[简体中文](README.md) | **English**

# Awesome LLM API Pricing

> Same model, which channel is cheapest? Per-model tables comparing official, aggregator and relay prices per 1M tokens.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) ![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg) ![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## Table of Contents

[Scope & How to Read](#scope--how-to-read) · [OpenAI](#openai) · [Claude (Anthropic)](#claude-anthropic) · [DeepSeek](#deepseek) · [GLM (Zhipu)](#glm-zhipu)

- [Channels](#channels)
- [About](#about)
- [Data & Updates](#data--updates)
- [Contributing](#contributing)
- [License](#license)

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
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $10 | 1.05M | same as official |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $10 | 1.05M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 1.05M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 1.05M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.348 | $1.74 | 1.05M | 17% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.6 | $8 | 1.05M | limited 20% off |

### GPT-6 Luna

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $0.2 | $1.2 | 1.05M | budget |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.1 | $0.5 | 1.05M | same as official |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.1 | $0.5 | 1.05M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.1 | $0.5 | 1.05M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.1 | $0.5 | 1.05M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.05 | $0.25 | 1.05M | 50% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.08 | $0.4 | 1.05M | limited 20% off |

## Claude (Anthropic)

### Claude Opus 5.5

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic](https://www.anthropic.com/pricing)** | Official | 722.2M | $4 | $20 | 1M | flagship |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $4 | $20 | 1M | same as official |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $4 | $20 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $4 | $20 | 1M | same as official |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $4 | $20 | 1M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $1.14 | $5.72 | 1M | 29% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $4 | $20 | 1M | same as official |

### Claude Sonnet 5

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic](https://www.anthropic.com/pricing)** | Official | 722.2M | $2 | $10 | 1M | workhorse |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $10 | 1M | same as official |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $10 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 1M | same as official |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 1M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.562 | $2.81 | 1M | 28% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $2 | $10 | 1M | same as official |

## DeepSeek

### DeepSeek V4-Pro

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | Official | 357.6M | ¥9 | ¥27 | 1M | peak; off-peak half price |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.66 | $1.98 | 1M | official off-peak rate |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $1.32 | $3.96 | 1M | peak rate; off-peak half |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $1.32 | $3.96 | 1M | peak rate, off-peak half |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $1.32 | $3.96 | 1M | peak rate, off-peak half |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $1.13 | $3.39 | 1M | 86% of list at peak, half off-peak |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.92 | $2.77 | 1M | limited 30% off |

### DeepSeek V4.1-Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | Official | 357.6M | ¥2 | ¥8 | 1M | native multimodal; peak, off-peak half |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.15 | $0.6 | 1M | official off-peak rate |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.3 | $1.2 | 1M | peak rate; off-peak half |
| **[Together AI](https://www.together.ai/pricing)** | Aggregator | 691K | $0.3 | $1.2 | 1M | hosted open weights |
| **[Groq](https://groq.com/pricing/)** | Aggregator | 3.6M | $0.15 | $0.6 | 1M | LPU accelerated |
| **[Fireworks AI](https://fireworks.ai/pricing)** | Aggregator | 542K | $0.3 | $1.2 | 1M | — |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥1 | ¥4 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.3 | $1.2 | 1M | peak rate, off-peak half |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.3 | $1.2 | 1M | peak rate, off-peak half |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.255 | $1.02 | 1M | 85% of list at peak, half off-peak |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.21 | $0.84 | 1M | limited 30% off |

## GLM (Zhipu)

### GLM-5.3

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥8 | ¥28 | 1M | flagship, cache hit ¥2 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.079 | $4.8 | 1M | same as official |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $1.1 | $3.9 | 1M | same as official |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥8 | ¥28 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $1.1 | $3.9 | 1M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $1.1 | $3.9 | 1M | same as official |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.4 | $4.4 | 1M | 0 fee passthrough |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $1.2 | $4.2 | 1M | relay rate |
| **[302.AI](https://302.ai/)** | Relay | 67K | $1.2 | $4.2 | 1M | relay rate |

### GLM-5.3-Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥0.4 | ¥1.4 | 1M | limited 50% off, native multimodal |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.04 | $0.5 | 1M | same as official |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.06 | $0.2 | 1M | same as official |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥0.4 | ¥1.4 | 1M | same as official |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.06 | $0.2 | 1M | lowest across providers |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.06 | $0.2 | 1M | same as official |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.103 | $0.36 | 1M | 90% of list |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.06 | $0.2 | 1M | 0 fee passthrough |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $0.065 | $0.22 | 1M | relay rate |
| **[302.AI](https://302.ai/)** | Relay | 67K | $0.065 | $0.22 | 1M | relay rate |

## Channels

- **[OpenAI](https://openai.com/api/pricing/)** [Official] — Official API for the closed-source GPT family. · monthly visits 487.5M（2026-08） · Official GPT API with the widest ecosystem compatibility; Batch API runs offline jobs at half price, usage tiers scale with spend automatically; vision/audio billed per token. Site-wide visits include ChatGPT web users. · [website](https://openai.com)
- **[Anthropic](https://www.anthropic.com/pricing)** [Official] — Official Claude API; strong at long context and coding. · monthly visits 722.2M（2026-08） · Official Claude API, a top tier for long context and coding; prompt-cache reads cut repeated input cost by up to 90%, batch saves 50%; Opus/Sonnet/Haiku cover flagship to budget. Site-wide visits include claude.ai web users. · [website](https://www.anthropic.com)
- **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** [Official] — Official API for the open-weight DeepSeek models; extreme value. · monthly visits 357.6M（2026-09） · Official API of the open-weight price benchmark; weekdays 9-12 & 14-18 Beijing time are peak, off-peak half price; automatic context caching cuts cost further; fully OpenAI-SDK compatible with zero-migration. · [website](https://api-docs.deepseek.com)
- **[Zhipu GLM](https://open.bigmodel.cn/pricing)** [Official] — Official Zhipu GLM API. · monthly visits 6.9M（2026-09） · Official API of the GLM family, a top Chinese model line; GLM-5.3-Flash at 50% off for a limited time (list CNY 0.8/2.8); context caching and function calling supported, proper invoicing for enterprise procurement. · [website](https://open.bigmodel.cn)
- **[OpenRouter](https://openrouter.ai/docs/limits)** [Aggregator] — One API for hundreds of models at upstream list prices. · monthly visits 21.3M（2026-09） · The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. · [website](https://openrouter.ai)
- **[B.AI](https://b.ai/)** [Relay] — Agent API infrastructure; one key for all models. · monthly visits 1.3M（2026-09） · Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. · [website](https://b.ai)
- **[Together AI](https://www.together.ai/pricing)** [Aggregator] — Open-model inference cloud; hosts DeepSeek. · monthly visits 691K（2026-08） · Open-source model inference cloud: serverless on-demand plus dedicated endpoints, hosting hundreds of open models incl. DeepSeek & FLUX; per-second billing suits batch jobs, fine-tuning also available. · [website](https://www.together.ai)
- **[Groq](https://groq.com/pricing/)** [Aggregator] — LPU inference; extremely fast and cheap. · monthly visits 3.6M（2026-09） · Proprietary LPU chips deliver extremely low first-token latency and high throughput, ideal for real-time and high-concurrency workloads; free tier available, but hosted models have shorter context. · [website](https://groq.com)
- **[Fireworks AI](https://fireworks.ai/pricing)** [Aggregator] — Open-model hosting with enterprise SLA. · monthly visits 542K（2026-08） · Enterprise-grade inference cloud: serverless and dedicated (incl. private) deployment with enterprise SLA; fine-tuning and one-click model deployment, a common choice for production GenAI. · [website](https://fireworks.ai)
- **[SiliconFlow](https://siliconflow.cn/pricing)** [Aggregator] — Chinese open-model cloud; hosts DeepSeek and GLM. · monthly visits 1.5M（2026-09） · One of the largest Chinese inference platforms for open models, hosting DeepSeek, GLM, Qwen and more, with free tiers on small models; direct access within China, CNY payment and invoicing supported. · [website](https://siliconflow.cn)
- **[ZenMux](https://zenmux.ai/)** [Relay] — Discount gateway aggregating GPT/Claude/Gemini. · monthly visits 381K（2026-09） · First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. · [website](https://zenmux.ai)
- **[AIHubMix](https://aihubmix.com/)** [Relay] — Popular unified-key gateway among Chinese devs. · monthly visits 284K（2026-09） · Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. · [website](https://aihubmix.com)
- **[TeamoRouter](https://teamorouter.com/)** [Relay] — Unified production-grade model gateway, down to 10% of list. · monthly visits 231K（2026-09） · Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. · [website](https://teamorouter.com)
- **[OfoxAI](https://ofox.ai/)** [Relay] — Unified multi-model API gateway. · monthly visits 213K（2026-09） · Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. · [website](https://ofox.ai)
- **[OhMyGPT](https://ohmygpt.com/)** [Relay] — Popular relay gateway for Chinese devs; stable discounts. · monthly visits 16K（2026-09） · Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. · [website](https://ohmygpt.com)
- **[302.AI](https://302.ai/)** [Relay] — Pay-as-you-go enterprise AI hub: image, video and language models in one place. · monthly visits 67K（2026-09） · Enterprise AI resource hub with pay-as-you-go: no monthly fee, ~1 credit per USD, ~$5 minimum top-up, balance never expires; unlimited creation and sharing of bots/apps, private deployment for its open-source app ecosystem; reviewed as "friendly to both beginners and developers, with all APIs open". Third-party relay; do not deposit large amounts. · [website](https://302.ai)

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
