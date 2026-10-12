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
