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
- **海外**：OpenAI、Anthropic、Google Gemini、xAI、Mistral（T1 必收）
- **国内**：DeepSeek、阿里云百炼 Qwen、智谱 GLM、月之暗面 Kimi、火山方舟豆包、百度千帆 ERNIE、腾讯混元、MiniMax、阶跃星辰 StepFun
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
1. 月访问量 **≥ 10 万次**（SimilarWeb 估算，数据来源和月份写进数据字段）；
2. 有公开定价页，写清折扣率或实际单价；
3. 最低充值 ≤ ¥50；
4. 运营 ≥ 6 个月，有可查社区讨论；
5. 有自用 dashboard 查 token 用量。

**按 2026-09 数据过线的 6 家**：OpenRouter(2127万)、B.AI(128万)、ZenMux(38万)、AIHubMix(28万)、TeamoRouter(23万)、OfoxAI(21万)。
低于 10 万的（IKunCode 6.9万、CCTest、AIGoCode 等）不收；AICoding 已停服下架。
流量数据**每月手工更新**，没有免费 API，不要写进自动 workflow。

## 4. README 内容结构（四层）

1. **读表须知**：计价口径——1M tokens、输入/输出分价、缓存命中折扣、长上下文加价档、中文 token 换算（~1 token ≈ 1.5 汉字）、免费层与最低充值。
2. **价格总表**（核心）：厂商 · 模型 · 输入价 · 输出价 · 上下文 · 缓存价 · 免费层 · 定价页链接。
3. **场景速选**：极致性价比 / 编码最强 / 超长上下文 / 免费试用 / 多模态 / 向量嵌入。
4. **厂商明细**：一句话定位 + 隐藏成本（速率限制、充值门槛、夜间折扣）。

## 5. 数据 schema（data/items.json）

每条：
```json
{
  "slug": "vendor-slug",
  "name": {"zh": "中文名", "en": "Official English Name"},
  "vendor": {"zh": "国家", "en": "Country"},
  "desc": {"zh": "", "en": ""},
  "category": "overseas | domestic | aggregator",
  "url": "https://官方定价页",
  "currency": "USD | CNY",
  "pricing": [
    {"model": "模型名", "input": 2.5, "output": 10, "context": "128K"}
  ],
  "cache": "缓存命中价说明",
  "free_tier": "免费层描述",
  "min_recharge": "最低充值",
  "monthly_visits": 21270000,
  "traffic_month": "2026-09",
  "tags": ["cheap", "coding", "long-context"],
  "notes": {"zh": "", "en": ""}
}
```
规则：
- `pricing[].input/output` 单位固定 1M tokens；免费填 `0`，按上游浮动填 `null`。
- **`name.en` / `desc.en` 不得含中文**；中国品牌用官方英文名（DeepSeek、Qwen、Zhipu、Moonshot）。
- B 类中转站才填 `monthly_visits`；A 类聚合和官方厂商留空待补。
- 价格是参考值，每条正式收录前必须点开官方定价页核对；`_meta.verified` 标核对状态。

## 6. 技术约束（改脚本时必须遵守）

- **GitHub 锚点算法**：先删标点，再把每个空格逐个换 `-`（不折叠）。含 `&` 的标题锚点会是双连字符。用这个实现：
  ```js
  const slugify = (t) => t.toLowerCase().trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/ /g, '-');
  ```
- **tight list**：目录尾部的"关于/数据/贡献/许可"前必须加 `**更多**` 小标题，否则渲染成松散列表、行距变大。
- **英文版纯净度**：`README.en.md` 除语言切换行外不得出现中文（`/[\u4e00-\u9fff]/` 命中 0）。
- `scripts/sync.mjs` 做数据校验（缺字段/重名/非法 category/英文含中文），CI 里失败即标红。
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
