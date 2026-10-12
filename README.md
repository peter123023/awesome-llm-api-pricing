**简体中文** | [English](README.en.md)

# Awesome LLM API Pricing

> 同一个模型，哪家渠道最便宜？按模型列出官方、聚合与中转渠道的输入/输出价格，帮你选最划算的调用方式。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) ![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg) ![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## 目录

- [收录范围与读表须知]](#收录范围与读表须知)
- [OpenAI]](#openai)
- [Claude（Anthropic）]](#claude（anthropic）)
- [DeepSeek]](#deepseek)
- [GLM（智谱）]](#glm（智谱）)
- [渠道明细]](#渠道明细)
- **更多**
  - [关于本清单]](#关于本清单)
  - [数据与更新]](#数据与更新)
  - [参与贡献]](#参与贡献)
  - [许可证]](#许可证)

---

## 收录范围与读表须知

本清单按**模型**组织：每个模型一节，下面表格列出所有可调用它的渠道及价格。

**读表须知：**
- 价格单位 **每 1M tokens**，输入与输出分别计价；
- 海外渠道 USD，国内渠道 CNY；
- 「官方」= 模型厂商自己的 API；「聚合」= 正规推理平台（上游价 + 手续费）；「中转」= 第三方网关，⚠️ 自行评估风险、勿充大额；
- 缓存命中价、免费层写在备注里；中文约 1 token ≈ 1.5 汉字。

> ⚠️ 表中标「中转」的为第三方网关，价格不代表官方，稳定性与账号安全自行评估。中转收录门槛：月访问量 ≥ 1 万次（SimilarWeb / traffic.cv 估算），欢迎 PR 推荐。

## OpenAI

### GPT-6 Astra

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $10 | $50 | 1.05M | 旗舰 |

### GPT-6.1 Sol

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $2 | $10 | 1.05M | 主力 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2.1 | $10.5 | 1.05M | 官方价 +约5% |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $2 | $10 | 1.05M | 与官方同价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $2 | $10 | 1.05M | 多供应商最低价 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $10 | 1.05M | 与官方同价 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.344 | $1.72 | 1.05M | 1.7折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $1.6 | $8 | 1.05M | 限时8折 |

### GPT-6 Luna

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $0.2 | $1.2 | 1.05M | 轻量便宜 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.21 | $1.26 | 1.05M | 官方价 +约5% |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.1 | $0.5 | 1.05M | 官方半价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $0.1 | $0.5 | 1.05M | 多供应商最低价 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $0.2 | $1.2 | 1.05M | 与官方同价 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.05 | $0.25 | 1.05M | 5折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.16 | $0.96 | 1.05M | 限时8折 |

## Claude（Anthropic）

### Claude Opus 5.5

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic 官方](https://www.anthropic.com/pricing)** | 官方 | 7.2 亿 | $4 | $20 | 200K | 旗舰 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $4.2 | $21 | 200K | 官方价 +约5% |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $4 | $20 | 200K | 与官方同价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $4 | $20 | 200K | 与官方同价 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $4 | $20 | 200K | 与官方同价 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $1.17 | $5.84 | 200K | 2.9折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $4 | $20 | 200K | 与官方同价 |

### Claude Sonnet 5

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic 官方](https://www.anthropic.com/pricing)** | 官方 | 7.2 亿 | $2 | $10 | 200K | 主力 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2.1 | $10.5 | 200K | 官方价 +约5% |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $2 | $10 | 200K | 与官方同价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $2 | $10 | 200K | 与官方同价 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $10 | 200K | 与官方同价 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.576 | $2.88 | 200K | 2.9折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $2 | $10 | 200K | 与官方同价 |

## DeepSeek

### DeepSeek V4-Pro

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** | 官方 | 3.6 亿 | ¥9 | ¥27 | 128K | 高峰价，闲时半价 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $1.26 | $3.78 | 128K | 高峰价折 USD |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $1.32 | $3.96 | 128K | 高峰价，闲时半价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $1.32 | $3.96 | 128K | 高峰价参考 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $1.32 | $3.96 | 128K | 高峰价参考 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.36 | $1.07 | 128K | 约2.7折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.92 | $2.77 | 128K | 限时7折 |

### DeepSeek V4.1-Flash

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** | 官方 | 3.6 亿 | ¥1 | ¥4 | 128K | 原生多模态 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.14 | $0.56 | 128K | 官方价 +约5%（USD） |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.3 | $1.2 | 128K | 高峰价，闲时半价 |
| **[Together AI](https://www.together.ai/pricing)** | 聚合 | 69 万 | $0.16 | $0.55 | 128K | 托管开源权重 |
| **[Groq](https://groq.com/pricing/)** | 聚合 | 363 万 | $0.15 | $0.6 | 128K | LPU 加速 |
| **[Fireworks AI](https://fireworks.ai/pricing)** | 聚合 | 54 万 | $0.16 | $0.6 | 128K | — |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥1 | ¥4 | 128K | 与官方同价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $0.3 | $1.2 | 128K | 高峰价参考 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $0.3 | $1.2 | 128K | 高峰价参考 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.128 | $0.511 | 128K | 8.5折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.21 | $0.84 | 128K | 限时7折 |

## GLM（智谱）

### GLM-5.3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** | 官方 | 687 万 | ¥8 | ¥28 | 1M | 旗舰，缓存命中 ¥2 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $1.15 | $4.1 | 1M | 官方价+约5% |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $1.1 | $3.9 | 1M | 与官方同价 |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥8 | ¥28 | 1M | 与官方同价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $1.1 | $3.9 | 1M | 多供应商最低价 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $1.1 | $3.9 | 1M | 与官方同价 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.33 | $1.17 | 1M | 约3折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $1.1 | $3.9 | 1M | 0手续费直通 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $1.2 | $4.2 | 1M | 中转参考价 |
| **[302.AI](https://302.ai/)** | 中转 | 7 万 | $1.2 | $4.2 | 1M | 中转参考价 |

### GLM-5.3-Flash

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** | 官方 | 687 万 | ¥0.4 | ¥1.4 | 1M | 限时五折，原生多模态 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.063 | $0.2 | 1M | 官方价+约5% |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.06 | $0.2 | 1M | 与官方同价 |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥0.4 | ¥1.4 | 1M | 与官方同价 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $0.06 | $0.2 | 1M | 多供应商最低价 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $0.06 | $0.2 | 1M | 与官方同价 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.018 | $0.06 | 1M | 约3折 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.06 | $0.2 | 1M | 0手续费直通 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $0.065 | $0.22 | 1M | 中转参考价 |
| **[302.AI](https://302.ai/)** | 中转 | 7 万 | $0.065 | $0.22 | 1M | 中转参考价 |

## 渠道明细

- **[OpenAI 官方](https://openai.com/api/pricing/)** [官方] — GPT 系列闭源模型官方 API。 · 月访问 4.9 亿（2026-08） · [官网](https://openai.com)
- **[Anthropic 官方](https://www.anthropic.com/pricing)** [官方] — Claude 系列官方 API，长文本与代码能力强。 · 月访问 7.2 亿（2026-08） · [官网](https://www.anthropic.com)
- **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** [官方] — 国产开源权重模型官方 API，性价比极高。 · 月访问 3.6 亿（2026-09） · [官网](https://api-docs.deepseek.com)
- **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** [官方] — 智谱清言 GLM 系列官方 API。 · 月访问 687 万（2026-09） · [官网](https://open.bigmodel.cn)
- **[OpenRouter](https://openrouter.ai/docs/limits)** [聚合] — 统一 API 接入数百模型，上游价 +约 5%。 · 月访问 2127 万（2026-09） · [官网](https://openrouter.ai)
- **[B.AI](https://b.ai/)** [中转] — 一个 Key 调用 Claude/GPT/Gemini/国产模型。 · 月访问 128 万（2026-09） · [官网](https://b.ai)
- **[Together AI](https://www.together.ai/pricing)** [聚合] — 开源模型推理云，也托管 DeepSeek。 · 月访问 69 万（2026-08） · [官网](https://www.together.ai)
- **[Groq](https://groq.com/pricing/)** [聚合] — LPU 推理，速度极快，价格便宜。 · 月访问 363 万（2026-09） · [官网](https://groq.com)
- **[Fireworks AI](https://fireworks.ai/pricing)** [聚合] — 开源模型托管，企业级 SLA。 · 月访问 54 万（2026-08） · [官网](https://fireworks.ai)
- **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** [聚合] — 国内开源模型推理平台，同时托管 DeepSeek/GLM。 · 月访问 147 万（2026-09） · [官网](https://siliconflow.cn)
- **[ZenMux](https://zenmux.ai/)** [中转] — 聚合 GPT/Claude/Gemini 的折扣网关。 · 月访问 38 万（2026-09） · [官网](https://zenmux.ai)
- **[AIHubMix](https://aihubmix.com/)** [中转] — 国内开发者常用的统一 Key 网关。 · 月访问 28 万（2026-09） · [官网](https://aihubmix.com)
- **[TeamoRouter](https://teamorouter.com/)** [中转] — 面向编码场景的模型网关。 · 月访问 23 万（2026-09） · [官网](https://teamorouter.com)
- **[OfoxAI](https://ofox.ai/)** [中转] — 多模型统一 API 网关。 · 月访问 21 万（2026-09） · [官网](https://ofox.ai)
- **[OhMyGPT](https://ohmygpt.com/)** [中转] — 国内开发者常用中转网关，折扣稳定 · 月访问 2 万（2026-09） · [官网](https://ohmygpt.com)
- **[302.AI](https://302.ai/)** [中转] — 按量付费企业级 AI 资源站，图像/视频/语言模型一站式 · 月访问 7 万（2026-09） · [官网](https://302.ai)

---

## 关于本清单

社区维护的大模型 API 价格对比。数据由 `data/items.json` 驱动，README 由脚本生成，请勿手改。

## 数据与更新

- 结构化数据见 [`data/items.json`](data/items.json)，表格版见 [`data/items.csv`](data/items.csv)；
- 价格过期或厂商调价，欢迎提 Issue 或 PR；
- GitHub Actions 每日自动重建 README。

## 参与贡献

欢迎提交新渠道、新模型或更正价格，流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

本仓库基于 [MIT 许可证](LICENSE) 发布。各商标、模型名称归各自厂商所有。
