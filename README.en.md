[简体中文](README.md) | **English**

# Awesome LLM API Pricing

> Same model, which channel is cheapest? Per-model tables comparing official, aggregator and relay prices per 1M tokens.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) ![Prices verified](https://img.shields.io/badge/prices%20verified-2026--09-2ea44f) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) ![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg) ![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## Table of Contents

[Scope & How to Read](#scope--how-to-read) · [Quick Links](#quick-links) · [Model Verification](#model-verification-tools) · [Channels](#channels) · [About](#about) · [Data & Updates](#data--updates) · [Contributing](#contributing) · [License](#license)

---

## Quick Links

- [Free Models](#free-models): [MiMo-V2.6-Flash Free](#mimo-v26-flash-free)
- [OpenAI](#openai): [GPT-6 Astra](#gpt-6-astra) · [GPT-6.1 Sol](#gpt-61-sol) · [GPT-6 Luna](#gpt-6-luna)
- [Claude (Anthropic)](#claude-anthropic): [Claude Opus 5.5](#claude-opus-55) · [Claude Sonnet 5](#claude-sonnet-5)
- [DeepSeek](#deepseek): [DeepSeek V4.1-Flash](#deepseek-v41-flash) · [DeepSeek V4-Pro](#deepseek-v4-pro)
- [GLM (Zhipu)](#glm-zhipu): [GLM-5.3](#glm-53) · [GLM-5.3-Flash](#glm-53-flash)
- [Qwen (Alibaba)](#qwen-alibaba): [Qwen3.8 Max](#qwen38-max)
- [Kimi (Moonshot)](#kimi-moonshot): [Kimi K3](#kimi-k3)
- [Google Gemini](#google-gemini): [Gemini 4 Argon](#gemini-4-argon) · [Gemini 3.8 Flash](#gemini-38-flash)
- [xAI (Grok)](#xai-grok): [Grok 4.7](#grok-47)
- [Embeddings](#embeddings): [Embedding-3](#embedding-3) · [text-embedding-v3](#text-embedding-v3) · [text-embedding-3-large](#text-embedding-3-large) · [text-embedding-3-small](#text-embedding-3-small)

---

## Scope & How to Read

Organized **by model**: each model is a section, and the table lists every channel that sells it.

**How to read:**
- Price per **1M tokens**, input and output billed separately;
- Overseas channels in USD, China channels in CNY;
- 「Official」= the model vendor's own API; 「Aggregator」= reputable inference platform (upstream + fee); 「Relay」= third-party gateway ⚠️ evaluate yourself, do not deposit large amounts;
- Cache pricing and free tiers are in notes; ~1 token ≈ 1.5 Chinese characters.

> ⚠️ Rows marked 「Relay」 are third-party gateways. Their prices are not official; evaluate stability and safety yourself.

## Free Models
<p align="right"><a href="#license">⬇ Jump to bottom</a></p>

### MiMo-V2.6-Flash Free

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | Free | Free | — | Xiaomi MiMo free tier, zero cost in/out; no end date published; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |

## OpenAI
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### GPT-6 Astra

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $10 | $50 | 1.05M | flagship; Official GPT API with the widest ecosystem compatibility; Batch API runs offline jobs at half price, usage tiers scale with spend automatically; vision/audio billed per token. Site-wide visits include ChatGPT web users. |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $10 | $50 | 1.05M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $10 | $50 | 1.05M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $1.74 | $8.7 | 1.05M | 17% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $9 | $45 | 1.05M | 10% off official; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥2.5 | ¥12.5 | 1.05M | tiered dynamic discounts; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

### GPT-6.1 Sol

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $2 | $10 | 1.05M | workhorse; Official GPT API with the widest ecosystem compatibility; Batch API runs offline jobs at half price, usage tiers scale with spend automatically; vision/audio billed per token. Site-wide visits include ChatGPT web users. |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $10 | 1.05M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $10 | 1.05M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 1.05M | lowest across providers; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 1.05M | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.348 | $1.74 | 1.05M | 17% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.6 | $8 | 1.05M | limited 20% off; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥0.5 | ¥2.5 | 1.05M | tiered dynamic discounts; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

### GPT-6 Luna

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $0.2 | $1.2 | 1.05M | budget; Official GPT API with the widest ecosystem compatibility; Batch API runs offline jobs at half price, usage tiers scale with spend automatically; vision/audio billed per token. Site-wide visits include ChatGPT web users. |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.1 | $0.5 | 1.05M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.1 | $0.5 | 1.05M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.1 | $0.5 | 1.05M | lowest across providers; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.1 | $0.5 | 1.05M | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.05 | $0.25 | 1.05M | 50% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.08 | $0.4 | 1.05M | limited 20% off; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |

## Claude (Anthropic)
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### Claude Opus 5.5

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic](https://www.anthropic.com/pricing)** | Official | 722.2M | $4 | $20 | 1M | flagship; Official Claude API, a top tier for long context and coding; prompt-cache reads cut repeated input cost by up to 90%, batch saves 50%; Opus/Sonnet/Haiku cover flagship to budget. Site-wide visits include claude.ai web users. |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $4 | $20 | 1M | same as official; cache read $0.20/write $5; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $4 | $20 | 1M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $4 | $20 | 1M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $4 | $20 | 1M | same as official; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $4 | $20 | 1M | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $1.14 | $5.72 | 1M | 29% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $4 | $20 | 1M | same as official; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |

### Claude Sonnet 5

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic](https://www.anthropic.com/pricing)** | Official | 722.2M | $2 | $10 | 1M | workhorse; Official Claude API, a top tier for long context and coding; prompt-cache reads cut repeated input cost by up to 90%, batch saves 50%; Opus/Sonnet/Haiku cover flagship to budget. Site-wide visits include claude.ai web users. |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $2 | $10 | 1M | same as official; cache read $0.20/write $2.50; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $10 | 1M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $10 | 1M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 1M | same as official; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 1M | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.562 | $2.81 | 1M | 28% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $2 | $10 | 1M | same as official; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥0.8 | ¥4 | 1M | tiered dynamic discounts; cache ¥0.08; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

## DeepSeek
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### DeepSeek V4.1-Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | Official | 357.6M | ¥2 | ¥8 | 1M | native multimodal; peak, off-peak half; Official API of the open-weight price benchmark; weekdays 9-12 & 14-18 Beijing time are peak, off-peak half price; automatic context caching cuts cost further; fully OpenAI-SDK compatible with zero-migration. |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $0.3 | $1.2 | 1M | cache read $0.006; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.15 | $0.6 | 1M | official off-peak rate; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.3 | $1.2 | 1M | peak rate; off-peak half; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[Together AI](https://www.together.ai/pricing)** | Aggregator | 691K | $0.3 | $1.2 | 1M | hosted open weights; Open-source model inference cloud: serverless on-demand plus dedicated endpoints, hosting hundreds of open models incl. DeepSeek & FLUX; per-second billing suits batch jobs, fine-tuning also available. |
| **[Groq](https://groq.com/pricing/)** | Aggregator | 3.6M | $0.15 | $0.6 | 1M | LPU accelerated; Proprietary LPU chips deliver extremely low first-token latency and high throughput, ideal for real-time and high-concurrency workloads; free tier available, but hosted models have shorter context. |
| **[Fireworks AI](https://fireworks.ai/pricing)** | Aggregator | 542K | $0.3 | $1.2 | 1M | Enterprise-grade inference cloud: serverless and dedicated (incl. private) deployment with enterprise SLA; fine-tuning and one-click model deployment, a common choice for production GenAI. |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥1 | ¥4 | 1M | same as official; One of the largest Chinese inference platforms for open models, hosting DeepSeek, GLM, Qwen and more, with free tiers on small models; direct access within China, CNY payment and invoicing supported. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.3 | $1.2 | 1M | peak rate, off-peak half; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.3 | $1.2 | 1M | peak rate, off-peak half; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.255 | $1.02 | 1M | 85% of list at peak, half off-peak; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.21 | $0.84 | 1M | limited 30% off; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥0.35 | ¥1.4 | 1M | tiered dynamic discounts; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

### DeepSeek V4-Pro

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** | Official | 357.6M | ¥9 | ¥27 | 1M | peak; off-peak half price; Official API of the open-weight price benchmark; weekdays 9-12 & 14-18 Beijing time are peak, off-peak half price; automatic context caching cuts cost further; fully OpenAI-SDK compatible with zero-migration. |
| **[DeepInfra](https://deepinfra.com/pricing)** | Aggregator | 502K | $1.3 | $2.6 | 1M | open-weight hosting; cache $0.10; Hosted inference platform for open-weight models, known for low prices and steady throughput; a major OpenRouter upstream. Pure token billing with no surcharge and very cheap cache hits; closed models (Qwen3.8 Max) pass through at official international pricing. 502K monthly visits (traffic.cv, deepinfra.com, 2026-09). |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $1.74 | $3.48 | 1M | below official peak price; cache read $0.145; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.66 | $1.98 | 1M | official off-peak rate; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $1.32 | $3.96 | 1M | peak rate; off-peak half; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $1.32 | $3.96 | 1M | peak rate, off-peak half; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $1.32 | $3.96 | 1M | peak rate, off-peak half; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $1.13 | $3.39 | 1M | 86% of list at peak, half off-peak; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.92 | $2.77 | 1M | limited 30% off; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥1.575 | ¥4.725 | 1M | tiered dynamic discounts; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

## GLM (Zhipu)
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### GLM-5.3

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥8 | ¥28 | 1M | flagship, cache hit ¥2; Official API of the GLM family, a top Chinese model line; GLM-5.3-Flash at 50% off for a limited time (list CNY 0.8/2.8); context caching and function calling supported, proper invoicing for enterprise procurement. |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $1.4 | $4.4 | 1M | cache read $0.26; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.079 | $4.8 | 1M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $1.1 | $3.9 | 1M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥8 | ¥28 | 1M | same as official; One of the largest Chinese inference platforms for open models, hosting DeepSeek, GLM, Qwen and more, with free tiers on small models; direct access within China, CNY payment and invoicing supported. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $1.1 | $3.9 | 1M | lowest across providers; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $1.1 | $3.9 | 1M | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.4 | $4.4 | 1M | 0 fee passthrough; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $1.2 | $4.2 | 1M | relay rate; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥5.6 | ¥19.6 | 1M | cache ¥1.4; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |
| **[302.AI](https://302.ai/)** | Relay | 67K | $1.2 | $4.2 | 1M | relay rate; Enterprise AI resource hub with pay-as-you-go: no monthly fee, ~1 credit per USD, ~$5 minimum top-up, balance never expires; unlimited creation and sharing of bots/apps, private deployment for its open-source app ecosystem; reviewed as "friendly to both beginners and developers, with all APIs open". Third-party relay; do not deposit large amounts. |

### GLM-5.3-Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥0.4 | ¥1.4 | 1M | limited 50% off, native multimodal; Official API of the GLM family, a top Chinese model line; GLM-5.3-Flash at 50% off for a limited time (list CNY 0.8/2.8); context caching and function calling supported, proper invoicing for enterprise procurement. |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.04 | $0.5 | 1M | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.06 | $0.2 | 1M | same as official; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[SiliconFlow](https://siliconflow.cn/pricing)** | Aggregator | 1.5M | ¥0.4 | ¥1.4 | 1M | same as official; One of the largest Chinese inference platforms for open models, hosting DeepSeek, GLM, Qwen and more, with free tiers on small models; direct access within China, CNY payment and invoicing supported. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $0.06 | $0.2 | 1M | lowest across providers; First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $0.06 | $0.2 | 1M | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.103 | $0.36 | 1M | 90% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $0.06 | $0.2 | 1M | 0 fee passthrough; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $0.065 | $0.22 | 1M | relay rate; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥0.56 | ¥1.96 | 1M | cache ¥0.161; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |
| **[302.AI](https://302.ai/)** | Relay | 67K | $0.065 | $0.22 | 1M | relay rate; Enterprise AI resource hub with pay-as-you-go: no monthly fee, ~1 credit per USD, ~$5 minimum top-up, balance never expires; unlimited creation and sharing of bots/apps, private deployment for its open-source app ecosystem; reviewed as "friendly to both beginners and developers, with all APIs open". Third-party relay; do not deposit large amounts. |

## Qwen (Alibaba)
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### Qwen3.8 Max

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Alibaba Cloud Model Studio (Qwen)](https://help.aliyun.com/zh/model-studio/model-pricing)** | Official | 339K | ¥12 | ¥36 | 1M | flagship, multimodal; cache hit ¥1.5, batch ¥6; Alibaba Cloud Model Studio: Qwen3.8 Max is the current flagship (multimodal, 1M context) at CNY 12/36, cache hits just CNY 1.5 (~12.5% of list) and batch input half price; open-weight Qwen models and closed flagships share one platform with proper invoicing in China; the global Model Studio lists the same model at $1.65/$4.95. Monthly visits include Tongyi web users (tongyi.aliyun.com, ~339K in 2026-09). |
| **[DeepInfra](https://deepinfra.com/pricing)** | Aggregator | 502K | $1.65 | $4.951 | 250K | same as official intl; cache $0.206; Hosted inference platform for open-weight models, known for low prices and steady throughput; a major OpenRouter upstream. Pure token billing with no surcharge and very cheap cache hits; closed models (Qwen3.8 Max) pass through at official international pricing. 502K monthly visits (traffic.cv, deepinfra.com, 2026-09). |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $2 | $6 | 1M | cache read $0.25/write $2.50; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $6 | 1M | global list price; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $2 | $6 | 1M | same as official intl; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $6 | 1M | same as official intl; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $1.71 | $5.14 | 1M | 0 fee passthrough; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $1.49 | $4.46 | 1M | 10% off intl; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |

## Kimi (Moonshot)
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### Kimi K3

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Kimi (Moonshot) Official](https://platform.kimi.com/docs/pricing/chat-k3)** | Official | 40.5M | ¥20 | ¥100 | 1.05M | flagship for long-horizon coding and agent tasks; cache hit ¥2; Official Kimi API: K3 targets 1M-token long context, long-horizon coding and agent tasks; CNY billing on the China site (¥20/¥100), international site at $3/$15 equivalent; context cache hits cost just ¥2 (write ¥40, 1h TTL), ideal for repeated prefixes. Monthly visits include Kimi web assistant users (kimi.com, ~40.5M in 2026-09). |
| **[DeepInfra](https://deepinfra.com/pricing)** | Aggregator | 502K | $2.85 | $14.25 | 1M | open-weight hosting; cache $0.285; Hosted inference platform for open-weight models, known for low prices and steady throughput; a major OpenRouter upstream. Pure token billing with no surcharge and very cheap cache hits; closed models (Qwen3.8 Max) pass through at official international pricing. 502K monthly visits (traffic.cv, deepinfra.com, 2026-09). |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $3 | $15 | 1.05M | cache read $0.30; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $3 | $15 | 1M | same as official intl; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $3 | $15 | 1M | same as official intl; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $3 | $15 | 1M | same as official intl; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $3 | $15 | 1M | same as official intl; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥19.6 | ¥98 | 1.05M | slightly below official; cache ¥1.96; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

## Google Gemini
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### Gemini 4 Argon

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Google Gemini](https://ai.google.dev/gemini-api/docs/pricing)** | Official | 2640.0M | $2 | $10 | 1M | flagship reasoning; intro price through 2026-11-30, then $4/$20 from Dec 1; cache read $0.10 (implicit only); Official Gemini API: 3.8 Flash targets long-horizon software engineering, autonomous agents and enterprise workflows, at an intro price of $0.75/$3.75 (through 2026-12-31, then $1.5/$7.5); the AI Studio free tier is usable for testing but data improves Google products; Grounding with Google Search includes 5,000 free requests/month, then $14 per 1,000. Monthly visits include Gemini web users (gemini.google.com, ~2.64B in 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $10 | 1M | same as official intro price; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[ZenMux](https://zenmux.ai/)** | Relay | 381K | $2 | $10 | 1M | same as official intro price (Google Vertex upstream; site's 50% off is vs Dec list price); First gateway with an "AI insurance" scheme: hallucinations, poor output and high latency are auto-detected and compensated as credits the next day — reviewers call it "a promise nobody else in the gateway business makes out loud"; dual OpenAI + Anthropic protocol for Claude Code, Cursor etc.; ZenMux Auto routes by quality/cost, reportedly cutting spend ~20%; SOC2 in progress. Third-party relay; do not deposit large amounts. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $10 | 1M | same as official intro price; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.684 | $3.42 | 1M | 34% of official intro price; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |

### Gemini 3.8 Flash

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Google Gemini](https://ai.google.dev/gemini-api/docs/pricing)** | Official | 2640.0M | $0.75 | $3.75 | 1M | intro price through 2026-12-31, then $1.5/$7.5; Official Gemini API: 3.8 Flash targets long-horizon software engineering, autonomous agents and enterprise workflows, at an intro price of $0.75/$3.75 (through 2026-12-31, then $1.5/$7.5); the AI Studio free tier is usable for testing but data improves Google products; Grounding with Google Search includes 5,000 free requests/month, then $14 per 1,000. Monthly visits include Gemini web users (gemini.google.com, ~2.64B in 2026-09). |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | Aggregator | 13.3M | $1.5 | $7.5 | 1M | list price, no official intro discount; cache read $0.15; Official model gateway from the OpenCode team (same team as the open-source agent): models vetted for coding agents with delivery confirmed per provider, advertised zero markup on pay-per-request; $20 top-up, auto-recharge below $5, monthly spend caps; works with any agent (Claude Code, Codex, etc.); upstream zero-retention, no training on your data (few exceptions, see privacy docs); some long-context tiers priced higher. 13.3M monthly visits (traffic.cv, opencode.ai, 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $0.75 | $3.75 | 1M | same as official intro price; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[B.AI](https://b.ai/)** | Relay | 1.3M | $0.75 | $3.75 | 1M | same as official intro price; Publicly endorsed by TRON founder Justin Sun (featured by 36Kr): blockchain login with anonymous USDT crypto payment, claims the lowest prices around; positions itself as financial infrastructure for the AI-agent era with the x402 payment protocol. Third-party relay; do not deposit large amounts. |
| **[TeamoRouter](https://teamorouter.com/)** | Relay | 231K | $0.22 | $1.09 | 1M | 29% of list; Production-oriented model router: smart scheduling, prompt caching (>99% claimed hit rate), automatic failover, and a no-model-downgrade promise; real-time bidding across 2,000+ providers, hot GPT/Claude models typically at 17-29% of list; works with 10+ agent clients incl. Claude Code & Codex; claims 6,000+ teams, 1T+ tokens routed daily and 99.98% routing SLA; pay-as-you-go in USD, no minimum spend, Alipay supported. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $0.68 | $3.38 | 1M | 10% off intro; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | Relay | 96K | ¥0.525 | ¥2.625 | 1M | tiered dynamic discounts; cache ¥0.0525; Coding-tool relay focused on Claude Code / CodeX / Gemini CLI passthrough; sign-up via LinuxDO or email. Prices are public on the api.ikuncode.cc model marketplace (42 models with per-1M-token unit prices and tiered dynamic discounts); console shows token usage; minimum recharge undisclosed. ⚠️ Third-party resale service — prices are not official; assess stability and account safety yourself and avoid large top-ups. 95.5K monthly visits (traffic.cv, www.ikuncode.cc, 2026-09). |

## xAI (Grok)
<p align="right"><a href="#table-of-contents">⬆ Back to top</a> · <a href="#license">⬇ Jump to bottom</a></p>

### Grok 4.7

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[xAI](https://docs.x.ai/docs/models)** | Official | 205.5M | $2 | $6 | 500K | flagship; cache hit $0.50; Official Grok API: 4.7 is the current flagship (released 2026-09) for coding, agents and general text, priced the same as Grok 4.6 at $2/$6; cache hits $0.50; 500K context window suits long documents and agent tasks. OpenRouter and OfoxAI list it at the same price. Monthly visits include Grok web users (grok.com, ~205M in 2026-09). |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | Aggregator | 21.3M | $2 | $6 | 500K | same as official; The largest model aggregator: one API for hundreds of models at upstream list prices; auto-routing to the cheapest available provider with failover, free tiers on popular models; crypto top-up supported. |
| **[AIHubMix](https://aihubmix.com/)** | Relay | 284K | $2 | $6 | 500K | same as official; Marketed as "one API to route all LLMs": unlimited concurrency, fully OpenAI-compatible with zero-code switching, continuously optimized routes; 27+ genuinely free models subsidized by the platform (incl. GPT-5.5, Gemini 3, GLM); 10% off spending in partner app ecosystems via APP-Code; no subscription, pay as you go; active blog and docs. Third-party relay; do not deposit large amounts. |
| **[OfoxAI](https://ofox.ai/)** | Relay | 213K | $2 | $6 | 500K | same as official; Official-channel direct routing with transparent real-time pricing, zero platform fee; onboard by changing one base URL, supports 10+ tools incl. Claude Code & Codex; strong on video/image models (Seedance from $0.11/s, images from $0.03); publishes verifiable platform-wide token usage rankings. Third-party relay; do not deposit large amounts. |
| **[OhMyGPT](https://ohmygpt.com/)** | Relay | 16K | $2.2 | $6.6 | 500K | relay rate; Veteran relay for Chinese developers: 100+ models (OpenAI, Claude, Gemini, DeepSeek, Grok, Qwen etc.), 100% OpenAI-compatible with zero code changes; solid enterprise features like per-key permission control and an open OAuth API; the widest payment coverage; third-party directory AI Gateways editorial score 3.8/5. Third-party relay; do not deposit large amounts. |

## Embeddings
<p align="right"><a href="#table-of-contents">⬆ Back to top</a></p>

### Embedding-3

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Zhipu GLM](https://open.bigmodel.cn/pricing)** | Official | 6.9M | ¥0.5 | — | 8K | embedding, batch ¥0.25; Official API of the GLM family, a top Chinese model line; GLM-5.3-Flash at 50% off for a limited time (list CNY 0.8/2.8); context caching and function calling supported, proper invoicing for enterprise procurement. |

### text-embedding-v3

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[Alibaba Cloud Model Studio (Qwen)](https://help.aliyun.com/zh/model-studio/model-pricing)** | Official | 339K | ¥0.5 | — | 8K | embedding, batch ¥0.25; Alibaba Cloud Model Studio: Qwen3.8 Max is the current flagship (multimodal, 1M context) at CNY 12/36, cache hits just CNY 1.5 (~12.5% of list) and batch input half price; open-weight Qwen models and closed flagships share one platform with proper invoicing in China; the global Model Studio lists the same model at $1.65/$4.95. Monthly visits include Tongyi web users (tongyi.aliyun.com, ~339K in 2026-09). |

### text-embedding-3-large

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $0.13 | — | 8K | embedding, 1536/3072 dims; Official GPT API with the widest ecosystem compatibility; Batch API runs offline jobs at half price, usage tiers scale with spend automatically; vision/audio billed per token. Site-wide visits include ChatGPT web users. |

### text-embedding-3-small

| Channel | Type | Visits | Input | Output | Context | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI](https://openai.com/api/pricing/)** | Official | 487.5M | $0.02 | — | 8K | embedding, 1536 dims; Official GPT API with the widest ecosystem compatibility; Batch API runs offline jobs at half price, usage tiers scale with spend automatically; vision/audio billed per token. Site-wide visits include ChatGPT web users. |

## Model Verification Tools

Relays are tempting on price but carry "shell-model / degraded-quality" risk — use these three free tools to verify what is actually behind the API (monthly visits from traffic.cv, 2026-09).

| Tool | Monthly Visits | Method | What to check |
| --- | --- | --- | --- |
| **[CCTest](https://cctest.ai/zh)** | 36.5K | Fingerprint + usage probes | Multi-round numeric fingerprint attribution and token usage anomaly checks for adulteration/degradation; supports Claude/GPT/Gemini |
| **[BazaarLink Probe](https://bazaarlink.ai/zh-CN/probe)** | 176.5K | 84 automated probes | Purpose-built to detect degraded, adulterated or swapped models; enter Base URL + test key for a report |
| **[LLM Zhaoyaojing](https://llmtest.cn/)** | 3.4K | Multi-round behavior probes | Checks identity consistency, knowledge and chain-of-thought traces; open source, pure frontend, key never uploaded |

## Channels

- **[OpenAI](https://openai.com/api/pricing/)** [Official] — Official API for the closed-source GPT family. · monthly visits 487.5M（2026-08） · [website](https://openai.com)
- **[Anthropic](https://www.anthropic.com/pricing)** [Official] — Official Claude API; strong at long context and coding. · monthly visits 722.2M（2026-08） · [website](https://www.anthropic.com)
- **[DeepSeek](https://api-docs.deepseek.com/quick_start/pricing)** [Official] — Official API for the open-weight DeepSeek models; extreme value. · monthly visits 357.6M（2026-09） · [website](https://api-docs.deepseek.com)
- **[Zhipu GLM](https://open.bigmodel.cn/pricing)** [Official] — Official Zhipu GLM API. · monthly visits 6.9M（2026-09） · [website](https://open.bigmodel.cn)
- **[Alibaba Cloud Model Studio (Qwen)](https://help.aliyun.com/zh/model-studio/model-pricing)** [Official] — Official Qwen API on Alibaba Cloud Model Studio, covering open and closed models. · monthly visits 339K（2026-09） · [website](https://help.aliyun.com)
- **[Kimi (Moonshot) Official](https://platform.kimi.com/docs/pricing/chat-k3)** [Official] — Official Kimi API by Moonshot AI, focused on long context and agentic workflows. · monthly visits 40.5M（2026-09） · [website](https://platform.kimi.com)
- **[Google Gemini](https://ai.google.dev/gemini-api/docs/pricing)** [Official] — Official Gemini API by Google, strong in multimodality and long context. · monthly visits 2640.0M（2026-09） · [website](https://ai.google.dev)
- **[xAI](https://docs.x.ai/docs/models)** [Official] — Official Grok API by xAI. · monthly visits 205.5M（2026-09） · [website](https://docs.x.ai)
- **[DeepInfra](https://deepinfra.com/pricing)** [Aggregator] — Low-cost hosted inference for open-weight models; a major OpenRouter upstream. · monthly visits 502K（2026-09） · [website](https://deepinfra.com)
- **[OpenCode Zen](https://opencode.ai/docs/zen/)** [Aggregator] — Official model gateway by the OpenCode team: coding-agent-vetted models, zero-markup pay-per-request. · monthly visits 13.3M（2026-09） · [website](https://opencode.ai)
- **[OpenRouter](https://openrouter.ai/docs/limits)** [Aggregator] — One API for hundreds of models at upstream list prices. · monthly visits 21.3M（2026-09） · [website](https://openrouter.ai)
- **[B.AI](https://b.ai/)** [Relay] — Agent API infrastructure; one key for all models. · monthly visits 1.3M（2026-09） · [website](https://b.ai)
- **[Together AI](https://www.together.ai/pricing)** [Aggregator] — Open-model inference cloud; hosts DeepSeek. · monthly visits 691K（2026-08） · [website](https://www.together.ai)
- **[Groq](https://groq.com/pricing/)** [Aggregator] — LPU inference; extremely fast and cheap. · monthly visits 3.6M（2026-09） · [website](https://groq.com)
- **[Fireworks AI](https://fireworks.ai/pricing)** [Aggregator] — Open-model hosting with enterprise SLA. · monthly visits 542K（2026-08） · [website](https://fireworks.ai)
- **[SiliconFlow](https://siliconflow.cn/pricing)** [Aggregator] — Chinese open-model cloud; hosts DeepSeek and GLM. · monthly visits 1.5M（2026-09） · [website](https://siliconflow.cn)
- **[ZenMux](https://zenmux.ai/)** [Relay] — Discount gateway aggregating GPT/Claude/Gemini. · monthly visits 381K（2026-09） · [website](https://zenmux.ai)
- **[AIHubMix](https://aihubmix.com/)** [Relay] — Popular unified-key gateway among Chinese devs. · monthly visits 284K（2026-09） · [website](https://aihubmix.com)
- **[TeamoRouter](https://teamorouter.com/)** [Relay] — Unified production-grade model gateway, down to 10% of list. · monthly visits 231K（2026-09） · [website](https://teamorouter.com)
- **[OfoxAI](https://ofox.ai/)** [Relay] — Unified multi-model API gateway. · monthly visits 213K（2026-09） · [website](https://ofox.ai)
- **[OhMyGPT](https://ohmygpt.com/)** [Relay] — Popular relay gateway for Chinese devs; stable discounts. · monthly visits 16K（2026-09） · [website](https://ohmygpt.com)
- **[IKunCode](https://api.ikuncode.cc/pricing)** [Relay] — Coding-tool relay for Claude Code / CodeX / Gemini CLI. · monthly visits 96K（2026-09） · [website](https://api.ikuncode.cc)
- **[302.AI](https://302.ai/)** [Relay] — Pay-as-you-go enterprise AI hub: image, video and language models in one place. · monthly visits 67K（2026-09） · [website](https://302.ai)

---

## About

Community-maintained LLM API price comparison. Data in `data/items.json`; README is generated.

## Data & Updates

- Structured data: [`data/items.json`](data/items.json); spreadsheet: [`data/items.csv`](data/items.csv);
- The "prices verified" badge month = the latest full verification round (same source as traffic_month, updated in the monthly manual check);
- File an issue or open a PR for stale prices;
- GitHub Actions rebuilds the README daily.

## Contributing

New channels, models and corrections welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Released under the [MIT License](LICENSE). Trademarks belong to their owners.
