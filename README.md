**简体中文** | [English](README.en.md)

# Awesome LLM API Pricing

> 大模型 API 价格对比清单：收录各家闭源/开源模型的 **输入 / 输出定价**、上下文与缓存折扣，帮你按成本选型。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg)
![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## 目录

- [收录范围](#收录范围)
- [价格对比总表](#价格对比总表)
- [厂商明细](#厂商明细)
  - [海外厂商](#海外厂商)
  - [国内厂商](#国内厂商)
  - [聚合与网关](#聚合与网关)
- **更多**
  - [关于本清单](#关于本清单)
  - [数据与更新](#数据与更新)
  - [参与贡献](#参与贡献)
  - [许可证](#许可证)

---

## 收录范围

- 必须能拿到 API Key、通过 HTTP endpoint 调用（网页版对话不算）；
- 同时收录海外闭源厂商、国内云厂商与聚合网关；
- 以**每 1M tokens 输入/输出价**为主口径，缓存折扣、免费层在备注里说明。

## 价格对比总表

> 单位：USD 或 CNY / 1M tokens；「上下文」为该模型官方标称窗口。

| 厂商 | 模型 | 输入 | 输出 | 上下文 | 定价页 |
| --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | GPT-4o | $2.5 | $10 | 128K | [定价页](https://openai.com/api/pricing/) |
| **[OpenAI](https://openai.com/api/pricing/)** | GPT-4o mini | $0.15 | $0.6 | 128K | [定价页](https://openai.com/api/pricing/) |
| **[OpenAI](https://openai.com/api/pricing/)** | o1 | $15 | $60 | 200K | [定价页](https://openai.com/api/pricing/) |
| **[Anthropic](https://www.anthropic.com/pricing)** | Claude Sonnet 4 | $3 | $15 | 200K | [定价页](https://www.anthropic.com/pricing) |
| **[Anthropic](https://www.anthropic.com/pricing)** | Claude Haiku 4.5 | $1 | $5 | 200K | [定价页](https://www.anthropic.com/pricing) |
| **[Google Gemini](https://ai.google.dev/pricing)** | Gemini 2.0 Flash | $0.1 | $0.4 | 1M | [定价页](https://ai.google.dev/pricing) |
| **[Google Gemini](https://ai.google.dev/pricing)** | Gemini 2.5 Pro | $1.25 | $10 | 1M | [定价页](https://ai.google.dev/pricing) |
| **[xAI Grok](https://x.ai/pricing)** | Grok 2 | $2 | $10 | 128K | [定价页](https://x.ai/pricing) |
| **[深度求索 DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | DeepSeek V3 (cache miss) | ¥2 | ¥8 | 128K | [定价页](https://api-docs.deepseek.com/quick_start/pricing) |
| **[深度求索 DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | DeepSeek V3 (cache hit) | ¥0.5 | ¥8 | 128K | [定价页](https://api-docs.deepseek.com/quick_start/pricing) |
| **[阿里云百炼 Qwen](https://help.aliyun.com/zh/model-studio/models)** | qwen-plus | ¥0.8 | ¥2 | 128K | [定价页](https://help.aliyun.com/zh/model-studio/models) |
| **[阿里云百炼 Qwen](https://help.aliyun.com/zh/model-studio/models)** | qwen-max | ¥20 | ¥60 | 32K | [定价页](https://help.aliyun.com/zh/model-studio/models) |
| **[智谱 GLM](https://open.bigmodel.cn/pricing)** | GLM-4-Plus | ¥5 | ¥5 | 128K | [定价页](https://open.bigmodel.cn/pricing) |
| **[智谱 GLM](https://open.bigmodel.cn/pricing)** | GLM-4-Flash | 免费 | 免费 | 128K | [定价页](https://open.bigmodel.cn/pricing) |
| **[月之暗面 Kimi](https://platform.moonshot.cn/docs/pricing/chat)** | moonshot-v1-8k | ¥12 | ¥12 | 8K | [定价页](https://platform.moonshot.cn/docs/pricing/chat) |
| **[月之暗面 Kimi](https://platform.moonshot.cn/docs/pricing/chat)** | moonshot-v1-128k | ¥60 | ¥60 | 128K | [定价页](https://platform.moonshot.cn/docs/pricing/chat) |
| **[火山方舟豆包](https://www.volcengine.com/docs/82379/1099320)** | Doubao-pro-32k | ¥0.8 | ¥2 | 32K | [定价页](https://www.volcengine.com/docs/82379/1099320) |
| **[火山方舟豆包](https://www.volcengine.com/docs/82379/1099320)** | Doubao-lite-32k | ¥0.3 | ¥0.6 | 32K | [定价页](https://www.volcengine.com/docs/82379/1099320) |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | All models (upstream +~5%) | — | — | varying | [定价页](https://openrouter.ai/docs/limits) |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | DeepSeek-V3 | ¥2 | ¥8 | 128K | [定价页](https://siliconflow.cn/pricing) |

## 厂商明细

### 海外厂商

- **[OpenAI](https://openai.com/api/pricing/)** — GPT 系列闭源模型，生态最成熟，支持函数调用、视觉与音频。 · [官网](https://openai.com)（缓存命中输入约五折；企业级有批量折扣。）
- **[Anthropic](https://www.anthropic.com/pricing)** — Claude 系列，长文本与代码能力强，主打安全与企业合规。 · [官网](https://www.anthropic.com)（缓存写入/读取分价，prompt 缓存可显著降低重复输入成本。）
- **[Google Gemini](https://ai.google.dev/pricing)** — Gemini 系列，Flash 档价格极低，上下文窗口大，多模态原生。 · [官网](https://ai.google.dev)（免费层有每分钟调用限制，适合个人试用。）
- **[xAI Grok](https://x.ai/pricing)** — Grok 系列，实时数据接入，定价对标中端闭源模型。 · [官网](https://x.ai)（新模型发布初期常有促销价。）

### 国内厂商

- **[深度求索 DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** — 国产开源权重模型代表，V3/R1 性价比极高，支持 MLA 缓存。 · [官网](https://api-docs.deepseek.com)（缓存命中输入约 2.5 折；夜间时段批量输入另有折扣。）
- **[阿里云百炼 Qwen](https://help.aliyun.com/zh/model-studio/models)** — 通义千问 API，qwen-plus/max/turbo 分档齐全，新用户有额度。 · [官网](https://help.aliyun.com)（百炼平台对新用户赠送百万级 token 体验额度。）
- **[智谱 GLM](https://open.bigmodel.cn/pricing)** — 智谱清言 GLM 系列，GLM-4-Plus 对标旗舰，长文本与 Agent 工具链完善。 · [官网](https://open.bigmodel.cn)（Flash 档长期免费；旗舰档输入输出同价。）
- **[月之暗面 Kimi](https://platform.moonshot.cn/docs/pricing/chat)** — Kimi 长文本助手背后的 API，主打超长上下文与文档解析。 · [官网](https://platform.moonshot.cn)（上下文越长单价越高；缓存命中有折扣。）
- **[火山方舟豆包](https://www.volcengine.com/docs/82379/1099320)** — 字节跳动豆包大模型，火山方舟托管，pro/lite 分档，价格亲民。 · [官网](https://www.volcengine.com)（新用户有免费额度；方舟平台同时托管第三方开源模型。）

### 聚合与网关

- **[OpenRouter](https://openrouter.ai/docs/limits)** — 统一 API 接入数百家模型，按上游原价加约 5%，支持按 token 混合路由。 · [官网](https://openrouter.ai)（价格即上游价 + 小额手续费；可按性能/价格自动选模型。）
- **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** — 国产开源模型聚合推理平台，Qwen/DeepSeek/GLM 权重模型一站调用。 · [官网](https://siliconflow.cn)（部分小模型限时免费；充赠活动常见。）

---

## 关于本清单

本仓库是一份社区维护的大模型 API 价格对比清单，数据由 `data/items.json` 驱动，README 由脚本自动生成，请勿直接手改 README。

## 数据与更新

- 结构化数据见 [`data/items.json`](data/items.json)，表格版见 [`data/items.csv`](data/items.csv)；
- 价格过期、厂商调价或新增模型，欢迎提 Issue 或 PR；
- GitHub Actions 每日自动重建 README。

## 参与贡献

欢迎提交新厂商、新模型或更正价格，流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

本仓库基于 [MIT 许可证](LICENSE) 发布。各商标、模型名称归各自厂商所有。
