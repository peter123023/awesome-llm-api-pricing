# AGENTS.md — awesome-llm-api 仓库规则书

本文件是所有协作者（人或 AI agent）编辑本仓库前必须遵守的约束。
README 由脚本生成，**不要手改 `README.md` / `README.en.md`**，改 `data/` 后跑 `npm run build`。

## 1. 仓库定位

收录各大大模型 API，以**价格/费用横向对比**为核心，帮开发者按成本选型。
- 主语言：中文（`README.md`），英文副版：`README.en.md`
- 计价主口径：**每 1M tokens 的输入价 / 输出价**
- 海外厂商用 USD，国内厂商用 CNY

## 2. 收录硬门槛（四条，缺一不可）

1. **有官方 API**：可自助申请 API Key、走 HTTP endpoint；纯网页聊天不算。
2. **价格公开透明**：官网有公开定价页、写明数字；只写"商务询价/联系销售"不收。
3. **个人可注册付费**：不需要企业资质或邀请函；封闭测试、邀请制不收。
4. **服务在营**：已 GA；已停服的下架。

**明确不收**：二手中转/黑市 Key、纯订阅制（只卖 Plus 不卖 API）、自部署软件（那是工具不是服务）、无定价页只在社交群报价的。

## 3. 厂商分级

### 3.1 官方厂商
- **海外**：OpenAI、Anthropic、Google Gemini、xAI、Mistral（T1 必收；已收录 OpenAI、Anthropic、Google Gemini、xAI；Mistral 国内声量低，暂缓收录）
- **国内**：DeepSeek、阿里云百炼 Qwen、智谱 GLM、月之暗面 Kimi、火山方舟豆包、百度千帆 ERNIE、腾讯混元、MiniMax、阶跃星辰 StepFun（已收录 DeepSeek、智谱 GLM、Qwen、Kimi 官方，其余待补）
- **向量嵌入**单独小表：OpenAI text-embedding-3、智谱 embedding、阿里 text-embedding-v3、硅基流动 bge 系列
- T2 观察（Cohere、Voyage、01.ai、百川、商汤）有人提 Issue 再补。
- **不收** Azure OpenAI / AWS Bedrock 这类转售渠道（价格是企业协议价，会打乱对比口径），只在备注里提一句。

### 3.2 正规聚合平台（A 类，可进总表）
OpenRouter、Together AI、Groq、Fireworks、SiliconFlow 硅基流动、NovitaAI、OctoAI、Lepton。
它们本身是公司级业务，价格是正经合同价，可与官方厂商并排比。

### 3.3 转售型中转站（B 类，单独成节）
国内 dev 圈的转售网关，**不进官方价格总表**，单独一节并加风险标注：

> ⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。

**B 类收录门槛（全部满足）：**
1. 月访问量 **≥ 1 万次**（SimilarWeb 估算，数据来源和月份写进数据字段）；
2. 有公开定价页，写清折扣率或实际单价；
3. 最低充值 ≤ ¥50；
4. 运营 ≥ 6 个月，有可查社区讨论；
5. 有自用 dashboard 查 token 用量。

**按 2026-09 数据过线并已收录的 8 家**：OpenRouter(2127万)、B.AI(128万)、ZenMux(38万)、AIHubMix(28万)、TeamoRouter(23万)、OfoxAI(21万)、302.AI(6.69万)、OhMyGPT(1.62万)。
IKunCode(6.9万) 达标但暂未收录；低于 1 万的（CCTest、AIGoCode 等）不收；AICoding 已停服下架。
流量数据**每月手工更新**，没有免费 API，不要写进自动 workflow。

## 4. README 内容结构（由 build-readme.mjs 生成）

1. **语言切换行 + 徽章**：顶部「简体中文 | English」与 shields 徽章。
2. **目录 + 快速跳转**：目录一行内联全部栏目（收录范围 · 快速跳转 · 渠道明细 · 关于本清单 · 数据与更新 · 参与贡献 · 许可证，` · ` 分隔）；随后「快速跳转」单独一节，tight list 每个模型家族一行——家族名跳家族 H2，后接该家族各模型 H3 直达锚点（` · ` 分隔）。
3. **收录范围与读表须知**：按**模型**组织的说明；计价口径——每 1M tokens 输入/输出分价、海外 USD / 国内 CNY、官方/聚合/中转三类定义、中转风险标注（收录门槛月访问 ≥ 1 万次）、缓存与免费层写在备注、1 token ≈ 1.5 汉字。
4. **模型比价**（核心）：家族 H2（OpenAI / Claude（Anthropic） / DeepSeek / GLM（智谱） / Qwen（阿里） / Kimi（月之暗面） / Google Gemini / xAI（Grok） / 其他厂商）内按模型 H3 出表，列：渠道 · 类型 · 月访问 · 输入 · 输出 · 上下文 · 备注（价格标签 + 渠道丰富备注）；家族内按最高输入价降序（旗舰在前），例外：DeepSeek 家族固定 V4.1-Flash 在前、V4-Pro 在后。
5. **渠道明细**：每渠道一条——一句话定位 · 月访问（含 traffic_month）· 官网链接。
6. **尾部**：关于本清单 / 数据与更新 / 参与贡献 / 许可证。

## 5. 数据 schema（data/items.json）

每条：
```json
{
  "slug": "vendor-slug",
  "name": {"zh": "中文名", "en": "Official English Name"},
  "vendor": {"zh": "国家", "en": "Country"},
  "desc": {"zh": "", "en": ""},
  "category": "overseas | domestic | aggregator | relay",
  "type": "official | aggregator | relay",
  "url": "https://官方定价页",
  "currency": "USD | CNY",
  "pricing": [
    {"model": "模型名", "family": "openai | claude | deepseek | glm | other", "input": 2.5, "output": 10, "context": "128K", "note": {"zh": "", "en": ""}}
  ],
  "cache": {"zh": "缓存命中价说明", "en": "cache notes"},
  "free_tier": {"zh": "免费层描述", "en": "free tier notes"},
  "min_recharge": "最低充值，未知留空",
  "monthly_visits": 21270000,
  "traffic_month": "2026-09",
  "tags": ["cheap", "coding", "long-context"],
  "notes": {"zh": "", "en": ""}
}
```
规则：
- `category` 与 `type` 必须配套：overseas/domestic → official，aggregator → aggregator，relay → relay（sync.mjs 校验）。
- `pricing[].family` 决定 README 分组，只能取 openai / claude / deepseek / glm / qwen / kimi / google / xai / other（sync.mjs 校验）。
- `pricing[].input/output` 单位固定 1M tokens；免费填 `0`，按上游浮动填 `null`。
- **`name.en` / `desc.en` 不得含中文**；中国品牌用官方英文名（DeepSeek、Qwen、Zhipu、Moonshot）。
- `monthly_visits` 各渠道都填（全站口径，官方渠道含其网页用户流量），B 类中转**必填且 ≥ 1 万次**；一律写 `traffic_month`。
- `cache` / `free_tier` / `min_recharge` 三个字段必须存在，值可为空字符串（sync.mjs 校验）。
- 价格是参考值，每条正式收录前必须点开官方定价页核对；`_meta.verified` 标核对状态。

## 6. 技术约束（改脚本时必须遵守）

- **GitHub 锚点算法**：先删标点（含全角标点如（）「」），再把每个空格逐个换 `-`（不折叠）。含 `&` 的标题锚点会是双连字符。用这个实现：
  ```js
  const slugify = (t) => t.toLowerCase().trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F\uFF00-\uFFEF\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/ /g, '-');
  ```
- **tight list**：目录为「一行内联导航 + 扁平列表」，不要嵌套子列表或在列表项里放伪标题，否则渲染成松散列表、行距变大（自查第 2 条把关）。
- **英文版纯净度**：`README.en.md` 除语言切换行外不得出现中文（`/[\u4e00-\u9fff]/` 命中 0）。
- `scripts/sync.mjs` 做数据校验（必填字段 / slug 重复 / category↔type 配套 / family 枚举 / 中转月访问 ≥ 1 万 / cache·free_tier·min_recharge 字段存在 / 英文含中文），CI 里失败即标红。
- `.github/workflows/sync.yml` 每日重建：sync → build → 有 diff 才 commit。
- REPO 名通过环境变量传入，默认 `peter123023/awesome-llm-api-pricing`（远端仓库名最终待定）。

## 7. 交付前自查（三件套，必须全过）

```bash
npm run sync && npm run build
```
1. TOC 锚点用**独立实现**的 GitHub slugify 校验，失效数 = 0；
2. markdown-it 渲染后 `<li>` 被 `<p>` 包裹的数量 = 0；
3. `README.en.md` 非切换行中文命中数 = 0。

## 8. 上线后

- GitHub 网页端填 **Description** 和 **Topics**（`llm`、`llm-api`、`pricing`、`openai`、`cost-comparison`），权重比仓库名高。
- 价格变动靠 Issue/PR 维护；中转流量每月人工核对一次。
