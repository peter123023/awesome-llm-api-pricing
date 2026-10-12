[简体中文](README.md) | **English**

# Awesome LLM API Pricing

> Same model, which channel is cheapest? Per-model tables comparing official, aggregator and relay prices per 1M tokens.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) ![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg) ![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## Table of Contents

- [Scope & How to Read]](#scope--how-to-read)
- [OpenAI]](#openai)
- [Claude (Anthropic)]](#claude-anthropic)
- [DeepSeek]](#deepseek)
- [GLM (Zhipu)]](#glm-zhipu)
- [Channels]](#channels)
- **More**
  - [About]](#about)
  - [Data & Updates]](#data--updates)
  - [Contributing]](#contributing)
  - [License]](#license)

---

## Scope & How to Read

Organized **by model**: each model is a section, and the table lists every channel that sells it.

**How to read:**
- Price per **1M tokens**, input and output billed separately;
- Overseas channels in USD, China channels in CNY;
- 「Official」= the model vendor's own API; 「Aggregator」= reputable inference platform (upstream + fee); 「Relay」= third-party gateway ⚠️ evaluate yourself, do not deposit large amounts;
- Cache pricing and free tiers are in notes; ~1 token ≈ 1.5 Chinese characters.

> ⚠️ Rows marked 「Relay」 are third-party gateways. Their prices are not official; evaluate stability and safety yourself.

## OpenAI

### GPT-6 Astra

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $10 | $50 | 1.05M | flagship |

### GPT-6.1 Sol

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $2 | $10 | 1.05M | workhorse |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2.1 | $10.5 | 1.05M | official +~5% |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $10 | 1.05M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 1.05M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 1.05M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.344 | $1.72 | 1.05M | 17% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.6 | $8 | 1.05M | limited 20% off |

### GPT-6 Luna

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $0.2 | $1.2 | 1.05M | budget |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.21 | $1.26 | 1.05M | official +~5% |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.1 | $0.5 | 1.05M | half of official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.1 | $0.5 | 1.05M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.2 | $1.2 | 1.05M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.05 | $0.25 | 1.05M | 50% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.16 | $0.96 | 1.05M | limited 20% off |

## Claude (Anthropic)

### Claude Opus 5.5

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic](https://www.anthropic.com/pricing)** | Official | 722.2M | $4 | $20 | 200K | flagship |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $4.2 | $21 | 200K | official +~5% |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $4 | $20 | 200K | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $4 | $20 | 200K | same as official |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $4 | $20 | 200K | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $1.17 | $5.84 | 200K | 29% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $4 | $20 | 200K | same as official |

### Claude Sonnet 5

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic](https://www.anthropic.com/pricing)** | Official | 722.2M | $2 | $10 | 200K | workhorse |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2.1 | $10.5 | 200K | official +~5% |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $10 | 200K | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 200K | same as official |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 200K | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.576 | $2.88 | 200K | 29% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $2 | $10 | 200K | same as official |

## DeepSeek

### DeepSeek V4-Pro

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | Official | 357.6M | ¥9 | ¥27 | 128K | peak; off-peak half price |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $1.26 | $3.78 | 128K | peak, USD |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $1.32 | $3.96 | 128K | peak rate; off-peak half |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $1.32 | $3.96 | 128K | peak rate, off-peak half |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $1.32 | $3.96 | 128K | peak rate, off-peak half |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.36 | $1.07 | 128K | ~27% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.92 | $2.77 | 128K | limited 30% off |

### DeepSeek V4.1-Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | Official | 357.6M | ¥1 | ¥4 | 128K | native multimodal |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.14 | $0.56 | 128K | official +~5% (USD) |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.3 | $1.2 | 128K | peak rate; off-peak half |
| **[Together AI](https://www.together.ai/pricing)** | Aggregator | 691K | $0.16 | $0.55 | 128K | hosted open weights |
| **[Groq](https://groq.com/pricing/)** | Aggregator | 3.6M | $0.15 | $0.6 | 128K | LPU accelerated |
| **[Fireworks AI](https://fireworks.ai/pricing)** | Aggregator | 542K | $0.16 | $0.6 | 128K | — |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥1 | ¥4 | 128K | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.3 | $1.2 | 128K | peak rate, off-peak half |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.3 | $1.2 | 128K | peak rate, off-peak half |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.128 | $0.511 | 128K | 85% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.21 | $0.84 | 128K | limited 30% off |

## GLM (Zhipu)

### GLM-5.3

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥8 | ¥28 | 1M | flagship, cache hit ¥2 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $1.15 | $4.1 | 1M | list + ~5% |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $1.1 | $3.9 | 1M | same as official |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥8 | ¥28 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $1.1 | $3.9 | 1M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $1.1 | $3.9 | 1M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.33 | $1.17 | 1M | ~30% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.1 | $3.9 | 1M | 0 fee passthrough |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $1.2 | $4.2 | 1M | relay rate |
| **[302.AI](https://302.ai/)** | Relay | 67K | $1.2 | $4.2 | 1M | relay rate |

### GLM-5.3-Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥0.4 | ¥1.4 | 1M | limited 50% off, native multimodal |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.063 | $0.2 | 1M | list + ~5% |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.06 | $0.2 | 1M | same as official |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥0.4 | ¥1.4 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.06 | $0.2 | 1M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.06 | $0.2 | 1M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.018 | $0.06 | 1M | ~30% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.06 | $0.2 | 1M | 0 fee passthrough |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $0.065 | $0.22 | 1M | relay rate |
| **[302.AI](https://302.ai/)** | Relay | 67K | $0.065 | $0.22 | 1M | relay rate |

## Channels

- **[OpenAI](https://openai.com/api/pricing/)** [Official] — Official API for the closed-source GPT family. · monthly visits 487.5M（2026-08） · [website](https://openai.com)
- **[Anthropic](https://www.anthropic.com/pricing)** [Official] — Official Claude API; strong at long context and coding. · monthly visits 722.2M（2026-08） · [website](https://www.anthropic.com)
- **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** [Official] — Official API for the open-weight DeepSeek models; extreme value. · monthly visits 357.6M（2026-09） · [website](https://api-docs.deepseek.com)
- **[Zhipu GLM](https://open.bigmodel.cn/pricing)** [Official] — Official Zhipu GLM API. · monthly visits 6.9M（2026-09） · [website](https://open.bigmodel.cn)
- **[OpenRouter](https://openrouter.ai/docs/limits)** [Aggregator] — One API for hundreds of models at upstream price plus ~5%. · monthly visits 21.3M（2026-09） · [website](https://openrouter.ai)
- **[B.AI](https://b.ai/)** [Relay] — One key for Claude/GPT/Gemini and Chinese models. · monthly visits 1.3M（2026-09） · [website](https://b.ai)
- **[Together AI](https://www.together.ai/pricing)** [Aggregator] — Open-model inference cloud; hosts DeepSeek. · monthly visits 691K（2026-08） · [website](https://www.together.ai)
- **[Groq](https://groq.com/pricing/)** [Aggregator] — LPU inference; extremely fast and cheap. · monthly visits 3.6M（2026-09） · [website](https://groq.com)
- **[Fireworks AI](https://fireworks.ai/pricing)** [Aggregator] — Open-model hosting with enterprise SLA. · monthly visits 542K（2026-08） · [website](https://fireworks.ai)
- **[SiliconFlow](https://siliconflow.cn/pricing)** [Aggregator] — Chinese open-model cloud; hosts DeepSeek and GLM. · monthly visits 1.5M（2026-09） · [website](https://siliconflow.cn)
- **[ZenMux](https://zenmux.ai/)** [Relay] — Discount gateway aggregating GPT/Claude/Gemini. · monthly visits 381K（2026-09） · [website](https://zenmux.ai)
- **[AIHubMix](https://aihubmix.com/)** [Relay] — Popular unified-key gateway among Chinese devs. · monthly visits 284K（2026-09） · [website](https://aihubmix.com)
- **[TeamoRouter](https://teamorouter.com/)** [Relay] — Model gateway targeting coding workflows. · monthly visits 231K（2026-09） · [website](https://teamorouter.com)
- **[OfoxAI](https://ofox.ai/)** [Relay] — Unified multi-model API gateway. · monthly visits 213K（2026-09） · [website](https://ofox.ai)
- **[OhMyGPT](https://ohmygpt.com/)** [Relay] — popular relay for Chinese devs, stable discounts · monthly visits 16K（2026-09） · [website](https://ohmygpt.com)
- **[302.AI](https://302.ai/)** [Relay] — pay-as-you-go enterprise AI hub · monthly visits 67K（2026-09） · [website](https://302.ai)

---

## About

Community-maintained LLM API price comparison. Data in `data/items.json`; README is generated.

## Data & Updates

- Structured data: [`data/items.json`](data/items.json); spreadsheet: [`data/items.csv`](data/items.csv);
- File an issue or open a PR for stale prices;
- GitHub Actions rebuilds the README daily.

## Contributing

New channels, models and corrections welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Released under the [MIT License](LICENSE). Trademarks belong to their owners.
