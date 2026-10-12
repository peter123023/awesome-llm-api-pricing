// sync.mjs — 数据校验（暂无远端站点接口，作为 CI 入口）
// 校验：必填字段、slug 唯一、category 引用合法、英文名/英文描述不含中文。
// 失败时 exit 1，GitHub Actions 会标红。
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const categories = JSON.parse(readFileSync(join(root, 'data/categories.json'), 'utf8'));
const data = JSON.parse(readFileSync(join(root, 'data/items.json'), 'utf8'));
const items = data.items;

const errors = [];
const catIds = new Set(categories.map((c) => c.id));
const slugs = new Set();

const CJK = /[\u4e00-\u9fff]/;
const RELAY_MIN_VISITS = 10000; // 中转门槛：月访问 ≥ 1 万次
const FAMILIES = new Set(['openai', 'claude', 'google', 'xai', 'mistral', 'deepseek', 'glm', 'kimi', 'other']);
const EXPECTED_TYPE = { overseas: 'official', domestic: 'official', aggregator: 'aggregator', relay: 'relay' };

for (const it of items) {
  const p = `item[${it.slug ?? '?'}]`;
  if (!it.slug) errors.push(`${p}: 缺 slug`);
  if (slugs.has(it.slug)) errors.push(`${p}: slug 重复`);
  slugs.add(it.slug);
  if (!it.name?.zh || !it.name?.en) errors.push(`${p}: name.zh/en 必填`);
  if (!it.desc?.zh || !it.desc?.en) errors.push(`${p}: desc.zh/en 必填`);
  if (!catIds.has(it.category)) errors.push(`${p}: category "${it.category}" 未在 categories.json 定义`);
  if (!it.url || !/^https?:\/\//.test(it.url)) errors.push(`${p}: url 必须是 http(s) 链接`);
  if (!Array.isArray(it.pricing) || it.pricing.length === 0) errors.push(`${p}: pricing 至少一条模型`);
  if (it.type === 'relay' && !(typeof it.monthly_visits === 'number' && it.monthly_visits >= RELAY_MIN_VISITS)) {
    errors.push(`${p}: 中转门槛月访问 ≥ 1 万次，当前 ${it.monthly_visits ?? '缺失'}`);
  }
  // category 与 type 必须配套；cache/free_tier/min_recharge 字段必须存在（值可为空）
  const wantType = EXPECTED_TYPE[it.category];
  if (!wantType) errors.push(`${p}: category "${it.category}" 非法`);
  else if ((it.type || 'official') !== wantType) errors.push(`${p}: category=${it.category} 应搭配 type=${wantType}，实际 ${it.type ?? '缺省'}`);
  if (!('cache' in it) || !('free_tier' in it) || !('min_recharge' in it)) {
    errors.push(`${p}: cache / free_tier / min_recharge 字段必须存在（值可为空字符串）`);
  }
  for (const pr of it.pricing ?? []) {
    if (!FAMILIES.has(pr.family)) errors.push(`${p}: 模型 "${pr.model}" family "${pr.family}" 非法（openai/claude/google/xai/mistral/deepseek/glm/kimi/other）`);
  }
  // 英文版不得含中文（品牌名请用官方英文名/罗马化）
  if (CJK.test(it.name?.en ?? '')) errors.push(`${p}: name.en 含中文: ${it.name.en}`);
  if (CJK.test(it.desc?.en ?? '')) errors.push(`${p}: desc.en 含中文`);
}

if (errors.length) {
  console.error('✘ 数据校验失败：');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(`✔ 数据校验通过：${items.length} 个厂商，${categories.length} 个分组`);
