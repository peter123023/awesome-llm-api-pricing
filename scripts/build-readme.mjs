// build-readme.mjs — 由 data/ 生成 README.md（中文主版）、README.en.md（英文副版）和 data/items.csv
// 主结构：按模型分节，每个模型下面一张表列出各渠道（官方/聚合/中转）的价格。
// 用法: node scripts/build-readme.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const REPO = process.env.REPO || 'peter123023/awesome-llm-api-pricing';

const categories = JSON.parse(readFileSync(join(root, 'data/categories.json'), 'utf8'));
const data = JSON.parse(readFileSync(join(root, 'data/items.json'), 'utf8'));
const items = data.items;

// GitHub 官方锚点算法：先删标点，再把每个空格逐个换 -
const slugify = (t) =>
  t.toLowerCase().trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F\uFF00-\uFFEF\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/ /g, '-');

const originOf = (url) => { try { return new URL(url).origin; } catch { return url; } };
const sym = (c) => (c === 'CNY' ? '¥' : '$');
function fmtPrice(v, currency, lang) {
  if (v === null || v === undefined) return '—';
  if (v === 0) return lang === 'zh' ? '免费' : 'Free';
  return `${sym(currency)}${v}`;
}
function fmtTraffic(v, lang) {
  if (!v) return '—';
  if (lang === 'zh') {
    if (v >= 1e8) return (v / 1e8).toFixed(1) + ' 亿';
    if (v >= 1e4) return (v / 1e4).toFixed(0) + ' 万';
    return String(v);
  }
  if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (v >= 1e3) return (v / 1e3).toFixed(0) + 'K';
  return String(v);
}

const TYPE_LABEL = {
  official: { zh: '官方', en: 'Official' },
  aggregator: { zh: '聚合', en: 'Aggregator' },
  relay: { zh: '中转', en: 'Relay' },
};

// —— 反排索引：model -> 渠道价格行
const FAMILY_ORDER = { openai: 1, claude: 2, deepseek: 3, glm: 4, kimi: 5, other: 9 };
const modelMap = new Map();
for (const it of items) {
  for (const p of it.pricing) {
    if (!modelMap.has(p.model)) modelMap.set(p.model, []);
    modelMap.get(p.model).push({
      channel: it.name,
      url: it.url,
      type: it.type || 'official',
      currency: it.currency,
      family: p.family || 'other',
      input: p.input,
      output: p.output,
      context: p.context,
      note: p.note || '',
      channelNotes: it.notes || '',
      monthly_visits: it.monthly_visits,
    });
  }
}
// 模型顺序覆盖：仅在同一家族内生效（如 DeepSeek 固定 V4.1-Flash 在前、V4-Pro 在后）
const MODEL_ORDER_OVERRIDE = { 'DeepSeek V4.1-Flash': 1, 'DeepSeek V4-Pro': 2 };
// 排序：家族顺序（OpenAI > Claude > DeepSeek > 其他），家族内按最高输入价降序（旗舰在前）
const models = [...modelMap.keys()].sort((a, b) => {
  const fa = modelMap.get(a)[0].family;
  const fb = modelMap.get(b)[0].family;
  const fo = (FAMILY_ORDER[fa] || 9) - (FAMILY_ORDER[fb] || 9);
  if (fo !== 0) return fo;
  const oa = MODEL_ORDER_OVERRIDE[a];
  const ob = MODEL_ORDER_OVERRIDE[b];
  if (oa !== undefined || ob !== undefined) {
    return (oa ?? Infinity) - (ob ?? Infinity);
  }
  const pa = Math.max(...modelMap.get(a).map((r) => r.input || 0));
  const pb = Math.max(...modelMap.get(b).map((r) => r.input || 0));
  return pb - pa;
});

const I18N = {
  zh: {
    switchLine: '**简体中文** | [English](README.en.md)',
    h1: '# Awesome LLM API Pricing',
    tagline: '> 同一个模型，哪家渠道最便宜？按模型列出官方、聚合与中转渠道的输入/输出价格，帮你选最划算的调用方式。',
    badges: [
      '[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)`,
      `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)`,
      `![GitHub Stars](https://img.shields.io/github/stars/${REPO}.svg)`,
      `![Last Commit](https://img.shields.io/github/last-commit/${REPO}.svg)`,
    ].join(' '),
    toc: '## 目录',
    quickH: '## 快速跳转',
    scope: '## 收录范围与读表须知',
    scopeBody: [
      '本清单按**模型**组织：每个模型一节，下面表格列出所有可调用它的渠道及价格。',
      '',
      '**读表须知：**',
      '- 价格单位 **每 1M tokens**，输入与输出分别计价；',
      '- 海外渠道 USD，国内渠道 CNY；',
      '- 「官方」= 模型厂商自己的 API；「聚合」= 正规推理平台（上游价 + 手续费）；「中转」= 第三方网关，⚠️ 自行评估风险、勿充大额；',
      '- 缓存命中价、免费层写在备注里；中文约 1 token ≈ 1.5 汉字。',
    ].join('\n'),
    compareH: '## 模型比价',
    th: ['渠道', '类型', '月访问', '输入', '输出', '上下文', '备注'],
    relayNote: '> ⚠️ 表中标「中转」的为第三方网关，价格不代表官方，稳定性与账号安全自行评估。中转收录门槛：月访问量 ≥ 1 万次（SimilarWeb / traffic.cv 估算），欢迎 PR 推荐。',
    channelsH: '## 渠道明细',
    about: '## 关于本清单',
    aboutBody: '社区维护的大模型 API 价格对比。数据由 `data/items.json` 驱动，README 由脚本生成，请勿手改。',
    dataH: '## 数据与更新',
    dataBody: [
      '- 结构化数据见 [`data/items.json`](data/items.json)，表格版见 [`data/items.csv`](data/items.csv)；',
      '- 价格过期或厂商调价，欢迎提 Issue 或 PR；',
      '- GitHub Actions 每日自动重建 README。',
    ].join('\n'),
    contrib: '## 参与贡献',
    contribBody: '欢迎提交新渠道、新模型或更正价格，流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。',
    license: '## 许可证',
    licenseBody: '本仓库基于 [MIT 许可证](LICENSE) 发布。各商标、模型名称归各自厂商所有。',
  },
  en: {
    switchLine: '[简体中文](README.md) | **English**',
    h1: '# Awesome LLM API Pricing',
    tagline: '> Same model, which channel is cheapest? Per-model tables comparing official, aggregator and relay prices per 1M tokens.',
    badges: [
      '[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)`,
      `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)`,
      `![GitHub Stars](https://img.shields.io/github/stars/${REPO}.svg)`,
      `![Last Commit](https://img.shields.io/github/last-commit/${REPO}.svg)`,
    ].join(' '),
    toc: '## Table of Contents',
    quickH: '## Quick Links',
    scope: '## Scope & How to Read',
    scopeBody: [
      'Organized **by model**: each model is a section, and the table lists every channel that sells it.',
      '',
      '**How to read:**',
      '- Price per **1M tokens**, input and output billed separately;',
      '- Overseas channels in USD, China channels in CNY;',
      '- 「Official」= the model vendor\'s own API; 「Aggregator」= reputable inference platform (upstream + fee); 「Relay」= third-party gateway ⚠️ evaluate yourself, do not deposit large amounts;',
      '- Cache pricing and free tiers are in notes; ~1 token ≈ 1.5 Chinese characters.',
    ].join('\n'),
    compareH: '## Compare by Model',
    th: ['Channel', 'Type', 'Visits', 'Input', 'Output', 'Context', 'Notes'],
    relayNote: '> ⚠️ Rows marked 「Relay」 are third-party gateways. Their prices are not official; evaluate stability and safety yourself.',
    channelsH: '## Channels',
    about: '## About',
    aboutBody: 'Community-maintained LLM API price comparison. Data in `data/items.json`; README is generated.',
    dataH: '## Data & Updates',
    dataBody: [
      '- Structured data: [`data/items.json`](data/items.json); spreadsheet: [`data/items.csv`](data/items.csv);',
      '- File an issue or open a PR for stale prices;',
      '- GitHub Actions rebuilds the README daily.',
    ].join('\n'),
    contrib: '## Contributing',
    contribBody: 'New channels, models and corrections welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).',
    license: '## License',
    licenseBody: 'Released under the [MIT License](LICENSE). Trademarks belong to their owners.',
  },
};

const FAMILY_LABEL = {
  openai: { zh: 'OpenAI', en: 'OpenAI' },
  claude: { zh: 'Claude（Anthropic）', en: 'Claude (Anthropic)' },
  deepseek: { zh: 'DeepSeek', en: 'DeepSeek' },
  glm: { zh: 'GLM（智谱）', en: 'GLM (Zhipu)' },
  kimi: { zh: 'Kimi（月之暗面）', en: 'Kimi (Moonshot)' },
  other: { zh: '其他厂商', en: 'Other Providers' },
};
const FAMILY_ORDER_KEYS = ['openai', 'claude', 'deepseek', 'glm', 'kimi', 'other'];

function compareSection(lang) {
  const t = I18N[lang];
  const L = lang === 'zh' ? 'zh' : 'en';
  const out = [t.relayNote, ''];
  // 按家族分组
  const byFamily = new Map();
  for (const model of models) {
    const fam = modelMap.get(model)[0].family;
    if (!byFamily.has(fam)) byFamily.set(fam, []);
    byFamily.get(fam).push(model);
  }
  for (const fam of FAMILY_ORDER_KEYS) {
    const list = byFamily.get(fam);
    if (!list || !list.length) continue;
    out.push(`## ${FAMILY_LABEL[fam][L]}`);
    out.push('');
    for (const model of list) {
      out.push(`### ${model}`);
      out.push('');
      out.push('| ' + t.th.join(' | ') + ' |');
      out.push('|' + ' --- |'.repeat(t.th.length));
      for (const row of modelMap.get(model)) {
        const visits = row.monthly_visits ? fmtTraffic(row.monthly_visits, lang) : (lang === 'zh' ? '待核实' : '—');
        const noteParts = [];
        if (row.note && row.note[L]) noteParts.push(row.note[L]);
        if (row.channelNotes && row.channelNotes[L]) noteParts.push(row.channelNotes[L]);
        out.push(
          `| **[${row.channel[L]}](${row.url})** | ${TYPE_LABEL[row.type][L]} | ${visits} | ${fmtPrice(row.input, row.currency, lang)} | ${fmtPrice(row.output, row.currency, lang)} | ${row.context} | ${noteParts.join(lang === 'zh' ? '；' : '; ') || '—'} |`
        );
      }
      out.push('');
    }
  }
  return out.join('\n');
}

function channelSection(lang) {
  const t = I18N[lang];
  const L = lang === 'zh' ? 'zh' : 'en';
  const out = [];
  for (const it of items) {
    let tv;
    if (it.monthly_visits) {
      tv = `${fmtTraffic(it.monthly_visits, lang)}${it.traffic_month ? `（${it.traffic_month}）` : ''}`;
    } else {
      tv = lang === 'zh' ? '待核实' : 'unverified';
    }
    out.push(
      `- **[${it.name[L]}](${it.url})** [${TYPE_LABEL[it.type]?.[L] || ''}] — ${it.desc[L]}${tv ? ` · ${lang==='zh'?'月访问':'monthly visits'} ${tv}` : ''} · [${lang === 'zh' ? '官网' : 'website'}](${originOf(it.url)})`
    );
  }
  return out.join('\n');
}

function tocLines(lang) {
  const t = I18N[lang];
  const anchor = (h) => '(#' + slugify(h.replace(/^##\s*/, '')) + ')';
  // 目录：全部栏目内联成一行，节省纵向空间
  const nav = [
    [lang === 'zh' ? '收录范围与读表须知' : 'Scope & How to Read', anchor(t.scope)],
    [lang === 'zh' ? '快速跳转' : 'Quick Links', anchor(t.quickH)],
    [lang === 'zh' ? '渠道明细' : 'Channels', anchor(t.channelsH)],
    [lang === 'zh' ? '关于本清单' : 'About', anchor(t.about)],
    [lang === 'zh' ? '数据与更新' : 'Data & Updates', anchor(t.dataH)],
    [lang === 'zh' ? '参与贡献' : 'Contributing', anchor(t.contrib)],
    [lang === 'zh' ? '许可证' : 'License', anchor(t.license)],
  ];
  return [nav.map(([label, a]) => `[${label}]${a}`).join(' · ')].join('\n');
}

// 快速跳转：每个模型家族一行（家族名跳 H2），后接该家族各模型 H3 直达锚点
function quickJumpSection(lang) {
  const L = lang === 'zh' ? 'zh' : 'en';
  const byFamily = new Map();
  for (const model of models) {
    const fam = modelMap.get(model)[0].family;
    if (!byFamily.has(fam)) byFamily.set(fam, []);
    byFamily.get(fam).push(model);
  }
  const out = [];
  for (const fam of FAMILY_ORDER_KEYS) {
    const list = byFamily.get(fam);
    if (!list || !list.length) continue;
    const label = FAMILY_LABEL[fam][L];
    const links = list.map((m) => `[${m}](#${slugify(m)})`).join(' · ');
    out.push(`- [${label}](#${slugify(label)})${lang === 'zh' ? '：' : ': '}${links}`);
  }
  return out.join('\n');
}

function build(lang) {
  const t = I18N[lang];
  return [
    t.switchLine, '',
    t.h1, '',
    t.tagline, '',
    t.badges, '',
    '---', '',
    t.toc, '',
    tocLines(lang), '',
    '---', '',
    t.quickH, '',
    quickJumpSection(lang), '',
    '---', '',
    t.scope, '',
    t.scopeBody, '',
    compareSection(lang),
    t.channelsH, '',
    channelSection(lang), '',
    '---', '',
    t.about, '', t.aboutBody, '',
    t.dataH, '', t.dataBody, '',
    t.contrib, '', t.contribBody, '',
    t.license, '', t.licenseBody, '',
  ].join('\n');
}

writeFileSync(join(root, 'README.md'), build('zh'));
writeFileSync(join(root, 'README.en.md'), build('en'));

// CSV
const csvHeader = ['model', 'channel', 'type', 'input_per_1m', 'output_per_1m', 'context', 'pricing_url'];
const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const rows = [csvHeader.join(',')];
for (const [model, rows_] of modelMap) {
  for (const r of rows_) {
    rows.push([model, r.channel.en, r.type, r.input ?? '', r.output ?? '', r.context ?? '', r.url].map(esc).join(','));
  }
}
writeFileSync(join(root, 'data/items.csv'), rows.join('\n') + '\n');

console.log(`✔ README generated: ${items.length} channels, ${models.length} models`);
