[简体中文](README.md) | **English**

# Awesome LLM API Pricing

> A curated price comparison list of LLM APIs: **input / output rates**, context windows and cache discounts across closed- and open-weight providers.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg)
![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## Table of Contents

- [Scope](#scope)
- [Price Comparison](#price-comparison)
- [Providers](#providers)
  - [Overseas Providers](#overseas-providers)
  - [China Providers](#china-providers)
  - [Aggregators & Gateways](#aggregators--gateways)
- **More**
  - [About](#about)
  - [Data & Updates](#data--updates)
  - [Contributing](#contributing)
  - [License](#license)

---

## Scope

- Must offer an API key over an HTTP endpoint (web chat UIs do not count);
- Covers overseas closed-source labs, China cloud providers, and aggregator gateways;
- Primary metric is **input/output price per 1M tokens**; caching and free tiers are noted inline.

## Price Comparison

> Unit: USD or CNY per 1M tokens; "Context" is the vendor-advertised window.

| Vendor | Model | Input | Output | Context | Pricing |
| --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | GPT-4o | $2.5 | $10 | 128K | [page](https://openai.com/api/pricing/) |
| **[OpenAI](https://openai.com/api/pricing/)** | GPT-4o mini | $0.15 | $0.6 | 128K | [page](https://openai.com/api/pricing/) |
| **[OpenAI](https://openai.com/api/pricing/)** | o1 | $15 | $60 | 200K | [page](https://openai.com/api/pricing/) |
| **[Anthropic](https://www.anthropic.com/pricing)** | Claude Sonnet 4 | $3 | $15 | 200K | [page](https://www.anthropic.com/pricing) |
| **[Anthropic](https://www.anthropic.com/pricing)** | Claude Haiku 4.5 | $1 | $5 | 200K | [page](https://www.anthropic.com/pricing) |
| **[Google Gemini](https://ai.google.dev/pricing)** | Gemini 2.0 Flash | $0.1 | $0.4 | 1M | [page](https://ai.google.dev/pricing) |
| **[Google Gemini](https://ai.google.dev/pricing)** | Gemini 2.5 Pro | $1.25 | $10 | 1M | [page](https://ai.google.dev/pricing) |
| **[xAI Grok](https://x.ai/pricing)** | Grok 2 | $2 | $10 | 128K | [page](https://x.ai/pricing) |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | DeepSeek V3 (cache miss) | ¥2 | ¥8 | 128K | [page](https://api-docs.deepseek.com/quick_start/pricing) |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | DeepSeek V3 (cache hit) | ¥0.5 | ¥8 | 128K | [page](https://api-docs.deepseek.com/quick_start/pricing) |
| **[Alibaba Cloud DashScope Qwen](https://help.aliyun.com/zh/model-studio/models)** | qwen-plus | ¥0.8 | ¥2 | 128K | [page](https://help.aliyun.com/zh/model-studio/models) |
| **[Alibaba Cloud DashScope Qwen](https://help.aliyun.com/zh/model-studio/models)** | qwen-max | ¥20 | ¥60 | 32K | [page](https://help.aliyun.com/zh/model-studio/models) |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | GLM-4-Plus | ¥5 | ¥5 | 128K | [page](https://open.bigmodel.cn/pricing) |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | GLM-4-Flash | Free | Free | 128K | [page](https://open.bigmodel.cn/pricing) |
| **[Moonshot Kimi](https://platform.moonshot.cn/docs/pricing/chat)** | moonshot-v1-8k | ¥12 | ¥12 | 8K | [page](https://platform.moonshot.cn/docs/pricing/chat) |
| **[Moonshot Kimi](https://platform.moonshot.cn/docs/pricing/chat)** | moonshot-v1-128k | ¥60 | ¥60 | 128K | [page](https://platform.moonshot.cn/docs/pricing/chat) |
| **[Volcengine Ark Doubao](https://www.volcengine.com/docs/82379/1099320)** | Doubao-pro-32k | ¥0.8 | ¥2 | 32K | [page](https://www.volcengine.com/docs/82379/1099320) |
| **[Volcengine Ark Doubao](https://www.volcengine.com/docs/82379/1099320)** | Doubao-lite-32k | ¥0.3 | ¥0.6 | 32K | [page](https://www.volcengine.com/docs/82379/1099320) |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | All models (upstream +~5%) | — | — | varying | [page](https://openrouter.ai/docs/limits) |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | DeepSeek-V3 | ¥2 | ¥8 | 128K | [page](https://siliconflow.cn/pricing) |

## Providers

### Overseas Providers

- **[OpenAI](https://openai.com/api/pricing/)** — Closed-source GPT family with the most mature ecosystem; supports function calling, vision and audio. · [website](https://openai.com)（Cached input tokens are ~50% off; volume discounts for enterprise.）
- **[Anthropic](https://www.anthropic.com/pricing)** — Claude family, strong at long context and coding, positioned for safety and enterprise compliance. · [website](https://www.anthropic.com)（Separate prices for cache write vs read; prompt caching cuts repeated input cost.）
- **[Google Gemini](https://ai.google.dev/pricing)** — Gemini family; the Flash tier is very cheap with long context and native multimodality. · [website](https://ai.google.dev)（A free tier exists with per-minute rate limits, good for personal trials.）
- **[xAI Grok](https://x.ai/pricing)** — Grok family with live-data access; pricing targets the mid-tier closed-source segment. · [website](https://x.ai)（Launch promotions are common right after a new model ships.）

### China Providers

- **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** — Representative open-weight Chinese model; V3/R1 offer extreme value with MLA cache. · [website](https://api-docs.deepseek.com)（Cache-hit input is ~25% of list price; off-peak batch input is additionally discounted.）
- **[Alibaba Cloud DashScope Qwen](https://help.aliyun.com/zh/model-studio/models)** — Tongyi Qianwen API with plus/max/turbo tiers; free quota for new users. · [website](https://help.aliyun.com)（DashScope grants million-token trial quota to new users.）
- **[Zhipu GLM](https://open.bigmodel.cn/pricing)** — Zhipu GLM family; GLM-4-Plus targets flagship tier with mature long-context and agent tooling. · [website](https://open.bigmodel.cn)（The Flash tier is permanently free; the flagship tier charges input and output equally.）
- **[Moonshot Kimi](https://platform.moonshot.cn/docs/pricing/chat)** — API behind the Kimi assistant, focused on very long context and document parsing. · [website](https://platform.moonshot.cn)（Longer context costs more per token; cached prompts are discounted.）
- **[Volcengine Ark Doubao](https://www.volcengine.com/docs/82379/1099320)** — ByteDance Doubao models hosted on Volcengine Ark; pro/lite tiers at friendly prices. · [website](https://www.volcengine.com)（Free quota for new users; Ark also hosts third-party open models.）

### Aggregators & Gateways

- **[OpenRouter](https://openrouter.ai/docs/limits)** — One API for hundreds of models at upstream price plus ~5%, with per-token routing. · [website](https://openrouter.ai)（Price equals upstream plus a small fee; auto-routing can pick the cheapest model that meets quality.）
- **[SiliconFlow](https://siliconflow.cn/pricing)** — Aggregated inference for Chinese open-weight models (Qwen/DeepSeek/GLM) under one endpoint. · [website](https://siliconflow.cn)（Some small models are free for limited time; top-up bonuses are common.）

---

## About

This is a community-maintained LLM API price comparison. Data lives in `data/items.json`; README files are generated by a script — do not edit them by hand.

## Data & Updates

- Structured data: [`data/items.json`](data/items.json); spreadsheet export: [`data/items.csv`](data/items.csv);
- Prices go stale fast — file an issue or open a PR for corrections and new models;
- GitHub Actions rebuilds the README daily.

## Contributing

New vendors, new models and price corrections are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Released under the [MIT License](LICENSE). All trademarks and model names belong to their respective owners.
