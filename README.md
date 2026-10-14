**简体中文** | [English](README.en.md)

# Awesome LLM API Pricing

> 同一个模型，哪家渠道最便宜？按模型列出官方、聚合与中转渠道的输入/输出价格，帮你选最划算的调用方式。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) ![Prices verified](https://img.shields.io/badge/prices%20verified-2026--09-2ea44f) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) ![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg) ![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## 目录

[收录范围与读表须知](#收录范围与读表须知) · [快速跳转](#快速跳转) · [真伪检测工具](#真伪检测工具) · [渠道明细](#渠道明细) · [关于本清单](#关于本清单) · [数据与更新](#数据与更新) · [参与贡献](#参与贡献) · [许可证](#许可证)

---

## 快速跳转

- [免费模型](#免费模型)：[MiMo-V2.6-Flash Free](#mimo-v26-flash-free)
- [OpenAI](#openai)：[GPT-6 Astra](#gpt-6-astra) · [GPT-6.1 Sol](#gpt-61-sol) · [GPT-6 Luna](#gpt-6-luna)
- [Claude（Anthropic）](#claudeanthropic)：[Claude Opus 5.5](#claude-opus-55) · [Claude Sonnet 5](#claude-sonnet-5)
- [DeepSeek](#deepseek)：[DeepSeek V4.1-Flash](#deepseek-v41-flash) · [DeepSeek V4-Pro](#deepseek-v4-pro)
- [GLM（智谱）](#glm智谱)：[GLM-5.3](#glm-53) · [GLM-5.3-Flash](#glm-53-flash)
- [Qwen（阿里）](#qwen阿里)：[Qwen3.8 Max](#qwen38-max)
- [Kimi（月之暗面）](#kimi月之暗面)：[Kimi K3](#kimi-k3)
- [Google Gemini](#google-gemini)：[Gemini 4 Argon](#gemini-4-argon) · [Gemini 3.8 Flash](#gemini-38-flash)
- [xAI（Grok）](#xaigrok)：[Grok 4.7](#grok-47)
- [向量嵌入](#向量嵌入)：[Embedding-3](#embedding-3) · [text-embedding-v3](#text-embedding-v3) · [text-embedding-3-large](#text-embedding-3-large) · [text-embedding-3-small](#text-embedding-3-small)

---

## 收录范围与读表须知

本清单按**模型**组织：每个模型一节，下面表格列出所有可调用它的渠道及价格。

**读表须知：**
- 价格单位 **每 1M tokens**，输入与输出分别计价；
- 海外渠道 USD，国内渠道 CNY；
- 「官方」= 模型厂商自己的 API；「聚合」= 正规推理平台（上游价 + 手续费）；「中转」= 第三方网关，⚠️ 自行评估风险、勿充大额；
- 缓存命中价、免费层写在备注里；中文约 1 token ≈ 1.5 汉字。

> ⚠️ 表中标「中转」的为第三方网关，价格不代表官方，稳定性与账号安全自行评估。中转收录门槛：月访问量 ≥ 1 万次（SimilarWeb / traffic.cv 估算），欢迎 PR 推荐。

## 免费模型
<p align="right"><a href="#许可证">⬇ 直达底部</a></p>

### MiMo-V2.6-Flash Free

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | 免费 | 免费 | — | 小米 MiMo 免费档，输入输出全免；Zen 官方标注限时免费、未公布具体截止日期；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |

## OpenAI
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### GPT-6 Astra

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $10 | $50 | 1.05M | 旗舰；GPT 系列官方 API，生态兼容最广；Batch API 半价适合离线批处理，用量分级限额随消费自动提升；视觉/音频按 token 另计。全站月访问含 ChatGPT 网页用户。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $10 | $50 | 1.05M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $10 | $50 | 1.05M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $1.74 | $8.7 | 1.05M | 1.7折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $9 | $45 | 1.05M | 官方价九折；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥2.5 | ¥12.5 | 1.05M | 分组动态折扣；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

### GPT-6.1 Sol

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $2 | $10 | 1.05M | 主力；GPT 系列官方 API，生态兼容最广；Batch API 半价适合离线批处理，用量分级限额随消费自动提升；视觉/音频按 token 另计。全站月访问含 ChatGPT 网页用户。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2 | $10 | 1.05M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $2 | $10 | 1.05M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $2 | $10 | 1.05M | 多供应商最低价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $10 | 1.05M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.348 | $1.74 | 1.05M | 1.7折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $1.6 | $8 | 1.05M | 限时8折；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥0.5 | ¥2.5 | 1.05M | 分组动态折扣；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

### GPT-6 Luna

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $0.2 | $1.2 | 1.05M | 轻量便宜；GPT 系列官方 API，生态兼容最广；Batch API 半价适合离线批处理，用量分级限额随消费自动提升；视觉/音频按 token 另计。全站月访问含 ChatGPT 网页用户。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.1 | $0.5 | 1.05M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.1 | $0.5 | 1.05M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $0.1 | $0.5 | 1.05M | 多供应商最低价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $0.1 | $0.5 | 1.05M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.05 | $0.25 | 1.05M | 5折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.08 | $0.4 | 1.05M | 限时8折；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |

## Claude（Anthropic）
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### Claude Opus 5.5

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic 官方](https://www.anthropic.com/pricing)** | 官方 | 7.2 亿 | $4 | $20 | 1M | 旗舰；Claude 系列官方 API，长文本与代码能力公认第一梯队；Prompt 缓存读取最高省 90% 重复输入成本，批量处理五折；Opus/Sonnet/Haiku 三档覆盖旗舰到高性价比。全站月访问含 Claude.ai 网页用户。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $4 | $20 | 1M | 与官方同价；缓存读 $0.20/写 $5；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $4 | $20 | 1M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $4 | $20 | 1M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $4 | $20 | 1M | 与官方同价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $4 | $20 | 1M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $1.14 | $5.72 | 1M | 2.9折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $4 | $20 | 1M | 与官方同价；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |

### Claude Sonnet 5

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic 官方](https://www.anthropic.com/pricing)** | 官方 | 7.2 亿 | $2 | $10 | 1M | 主力；Claude 系列官方 API，长文本与代码能力公认第一梯队；Prompt 缓存读取最高省 90% 重复输入成本，批量处理五折；Opus/Sonnet/Haiku 三档覆盖旗舰到高性价比。全站月访问含 Claude.ai 网页用户。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $2 | $10 | 1M | 与官方同价；缓存读 $0.20/写 $2.50；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2 | $10 | 1M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $2 | $10 | 1M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $2 | $10 | 1M | 与官方同价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $10 | 1M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.562 | $2.81 | 1M | 2.8折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $2 | $10 | 1M | 与官方同价；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥0.8 | ¥4 | 1M | 分组动态折扣，缓存命中 ¥0.08；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

## DeepSeek
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### DeepSeek V4.1-Flash

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** | 官方 | 3.6 亿 | ¥2 | ¥8 | 1M | 原生多模态；高峰价，闲时半价；开源权重模型的官方 API，性价比标杆；工作日 9-12、14-18（北京时间）为高峰，其余时段半价，context caching 自动命中再降成本；完全兼容 OpenAI SDK，迁移零改动。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $0.3 | $1.2 | 1M | 缓存读 $0.006；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.15 | $0.6 | 1M | 官方闲时价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.3 | $1.2 | 1M | 高峰价，闲时半价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[Together AI](https://www.together.ai/pricing)** | 聚合 | 69 万 | $0.3 | $1.2 | 1M | 托管开源权重；开源模型推理云：Serverless 按需与专属端点两种模式，托管 DeepSeek、FLUX 等数百个开源模型；按秒计费适合批量任务，也提供微调服务。 |
| **[Groq](https://groq.com/pricing/)** | 聚合 | 363 万 | $0.15 | $0.6 | 1M | LPU 加速；自研 LPU 推理芯片，以极低首 token 延迟和高吞吐著称，适合实时对话与高并发场景；有免费层可试用，但托管模型上下文普遍较短。 |
| **[Fireworks AI](https://fireworks.ai/pricing)** | 聚合 | 54 万 | $0.3 | $1.2 | 1M | 面向企业的高性能推理云：Serverless 与专用部署（含私有化）两种模式，企业级 SLA；支持模型微调与一键部署，生成式 AI 生产环境常用选择。 |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥1 | ¥4 | 1M | 与官方同价；国内最大的开源模型推理平台之一：托管 DeepSeek、GLM、Qwen 等主流开源模型，部分小模型免费；国内直连无需代理，支持人民币支付与发票。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $0.3 | $1.2 | 1M | 高峰价参考；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $0.3 | $1.2 | 1M | 高峰价参考；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.255 | $1.02 | 1M | 8.5折（峰时，谷时减半）；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.21 | $0.84 | 1M | 限时7折；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥0.35 | ¥1.4 | 1M | 分组动态折扣；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

### DeepSeek V4-Pro

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** | 官方 | 3.6 亿 | ¥9 | ¥27 | 1M | 高峰价，闲时半价；开源权重模型的官方 API，性价比标杆；工作日 9-12、14-18（北京时间）为高峰，其余时段半价，context caching 自动命中再降成本；完全兼容 OpenAI SDK，迁移零改动。 |
| **[DeepInfra](https://deepinfra.com/pricing)** | 聚合 | 50 万 | $1.3 | $2.6 | 1M | 开源权重自托管；缓存命中 $0.10；开源权重模型自托管推理平台，以低价与稳定吞吐著称，是 OpenRouter 的重要上游；纯 token 计价无手续费，缓存命中价极低；闭源款（Qwen3.8 Max）按官方国际版同价直通。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $1.74 | $3.48 | 1M | 低于官方高峰价；缓存读 $0.145；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.66 | $1.98 | 1M | 官方闲时价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $1.32 | $3.96 | 1M | 高峰价，闲时半价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $1.32 | $3.96 | 1M | 高峰价参考；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $1.32 | $3.96 | 1M | 高峰价参考；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $1.13 | $3.39 | 1M | 8.6折（峰时，谷时减半）；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.92 | $2.77 | 1M | 限时7折；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥1.575 | ¥4.725 | 1M | 分组动态折扣；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

## GLM（智谱）
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### GLM-5.3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** | 官方 | 687 万 | ¥8 | ¥28 | 1M | 旗舰，缓存命中 ¥2；智谱 GLM 系列官方 API，国产大模型第一梯队；GLM-5.3-Flash 限时五折（标准价 0.8/2.8 元），上下文缓存、函数调用齐全；国内合规发票齐全，适合企业采购。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $1.4 | $4.4 | 1M | 缓存读 $0.26；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.079 | $4.8 | 1M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $1.1 | $3.9 | 1M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥8 | ¥28 | 1M | 与官方同价；国内最大的开源模型推理平台之一：托管 DeepSeek、GLM、Qwen 等主流开源模型，部分小模型免费；国内直连无需代理，支持人民币支付与发票。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $1.1 | $3.9 | 1M | 多供应商最低价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $1.1 | $3.9 | 1M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $1.4 | $4.4 | 1M | 0手续费直通；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $1.2 | $4.2 | 1M | 中转参考价；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥5.6 | ¥19.6 | 1M | 缓存命中 ¥1.4；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |
| **[302.AI](https://302.ai/)** | 中转 | 7 万 | $1.2 | $4.2 | 1M | 中转参考价；按量付费的企业级 AI 资源站：0 月费、$1≈1 credit、最低充值约 $5、余额永久有效；机器人与应用无限制创建和分享，开源应用生态支持私有化部署；媒体评测称其「既面向小白也面向开发者友好，API 全部开放」。第三方中转，勿充大额。 |

### GLM-5.3-Flash

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** | 官方 | 687 万 | ¥0.4 | ¥1.4 | 1M | 限时五折，原生多模态；智谱 GLM 系列官方 API，国产大模型第一梯队；GLM-5.3-Flash 限时五折（标准价 0.8/2.8 元），上下文缓存、函数调用齐全；国内合规发票齐全，适合企业采购。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.04 | $0.5 | 1M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.06 | $0.2 | 1M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥0.4 | ¥1.4 | 1M | 与官方同价；国内最大的开源模型推理平台之一：托管 DeepSeek、GLM、Qwen 等主流开源模型，部分小模型免费；国内直连无需代理，支持人民币支付与发票。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $0.06 | $0.2 | 1M | 多供应商最低价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $0.06 | $0.2 | 1M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.103 | $0.36 | 1M | 9折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.06 | $0.2 | 1M | 0手续费直通；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $0.065 | $0.22 | 1M | 中转参考价；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥0.56 | ¥1.96 | 1M | 缓存命中 ¥0.161；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |
| **[302.AI](https://302.ai/)** | 中转 | 7 万 | $0.065 | $0.22 | 1M | 中转参考价；按量付费的企业级 AI 资源站：0 月费、$1≈1 credit、最低充值约 $5、余额永久有效；机器人与应用无限制创建和分享，开源应用生态支持私有化部署；媒体评测称其「既面向小白也面向开发者友好，API 全部开放」。第三方中转，勿充大额。 |

## Qwen（阿里）
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### Qwen3.8 Max

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[阿里云百炼 Qwen 官方](https://help.aliyun.com/zh/model-studio/model-pricing)** | 官方 | 34 万 | ¥12 | ¥36 | 1M | 旗舰，多模态；缓存命中 ¥1.5、Batch ¥6；阿里云大模型服务平台百炼：Qwen3.8 Max 为当前旗舰（多模态、1M 上下文），官方价 ¥12/¥36，缓存命中仅 ¥1.5（1.25 折）、Batch 输入半价；开源 Qwen 系列与闭源旗舰同平台可调，国内合规发票齐全；国际版 Model Studio 同款 $1.65/$4.95。全站月访问含通义网页用户。 |
| **[DeepInfra](https://deepinfra.com/pricing)** | 聚合 | 50 万 | $1.65 | $4.951 | 250K | 与官方国际版同价；缓存命中 $0.206；开源权重模型自托管推理平台，以低价与稳定吞吐著称，是 OpenRouter 的重要上游；纯 token 计价无手续费，缓存命中价极低；闭源款（Qwen3.8 Max）按官方国际版同价直通。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $2 | $6 | 1M | 缓存读 $0.25/写 $2.50；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2 | $6 | 1M | 国际版直供价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $2 | $6 | 1M | 与国际版同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $6 | 1M | 与国际版同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $1.71 | $5.14 | 1M | 0手续费直通；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $1.49 | $4.46 | 1M | 国际版九折；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |

## Kimi（月之暗面）
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### Kimi K3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Kimi（月之暗面）官方](https://platform.kimi.com/docs/pricing/chat-k3)** | 官方 | 4050 万 | ¥20 | ¥100 | 1.05M | 旗舰，长程编码与 Agent 任务；缓存命中 ¥2；Kimi 系列官方 API：K3 主打 1M tokens 长上下文、长程编码与 Agent 任务；国内站人民币计价（¥20/¥100），国际站等值 $3/$15；上下文缓存命中仅 ¥2、写入 ¥40（1 小时有效），适合高频重复前缀场景。全站月访问含 Kimi 网页助手用户。 |
| **[DeepInfra](https://deepinfra.com/pricing)** | 聚合 | 50 万 | $2.85 | $14.25 | 1M | 开源权重自托管；缓存命中 $0.285；开源权重模型自托管推理平台，以低价与稳定吞吐著称，是 OpenRouter 的重要上游；纯 token 计价无手续费，缓存命中价极低；闭源款（Qwen3.8 Max）按官方国际版同价直通。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $3 | $15 | 1.05M | 缓存读 $0.30；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $3 | $15 | 1M | 与官方国际版同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $3 | $15 | 1M | 与官方国际版同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $3 | $15 | 1M | 与官方国际版同价；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $3 | $15 | 1M | 与官方国际版同价；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥19.6 | ¥98 | 1.05M | 略低于官方价，缓存命中 ¥1.96；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

## Google Gemini
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### Gemini 4 Argon

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Google Gemini 官方](https://ai.google.dev/gemini-api/docs/pricing)** | 官方 | 26.4 亿 | $2 | $10 | 1M | 旗舰推理；介绍价至 2026-11-30，2026-12-01 起 $4/$20；缓存读 $0.10（仅隐式缓存）；Gemini 系列官方 API：3.8 Flash 定位长程软件工程、自主 Agent 与企业工作流，介绍价 $0.75/$3.75（2026-12-31 前，2027 年起 $1.5/$7.5）；AI Studio 免费层可测试但数据会用于改进产品；Grounding Google 搜索每月 5000 次免费、之后 $14/千次。全站月访问含 Gemini 网页用户。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $2 | $10 | 1M | 挂官方介绍价 $2/$10（五折，原价 $4/$20），折扣至 2026-11-30；缓存读 $0.10；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2 | $10 | 1M | 与官方介绍价同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $2 | $10 | 1M | 与官方介绍价同价（Google Vertex 上游，页面标五折为相对 12 月标准价）；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $10 | 1M | 与官方介绍价同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.684 | $3.42 | 1M | 3.4折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |

### Gemini 3.8 Flash

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Google Gemini 官方](https://ai.google.dev/gemini-api/docs/pricing)** | 官方 | 26.4 亿 | $0.75 | $3.75 | 1M | 介绍价至 2026-12-31，2027 起 $1.5/$7.5；Gemini 系列官方 API：3.8 Flash 定位长程软件工程、自主 Agent 与企业工作流，介绍价 $0.75/$3.75（2026-12-31 前，2027 年起 $1.5/$7.5）；AI Studio 免费层可测试但数据会用于改进产品；Grounding Google 搜索每月 5000 次免费、之后 $14/千次。全站月访问含 Gemini 网页用户。 |
| **[OpenCode Zen](https://opencode.ai/docs/zen/)** | 聚合 | 1332 万 | $1.5 | $7.5 | 1M | 挂标准价，未跟进官方 $0.75/$3.75 介绍价；缓存读 $0.15；OpenCode 团队官方模型网关（与开源 Agent 工具 OpenCode 同团队）：模型针对编程 Agent 场景实测筛选、与提供商确认交付质量，宣称按请求计费零加价；$20 即用即付、余额低于 $5 自动充值，可设月度消费限额；可配合 Claude Code、Codex 等任意 Agent；上游零留存、不用数据训练（个别例外见官网隐私节）；部分长上下文档另有加价档。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.75 | $3.75 | 1M | 与官方介绍价同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $0.75 | $3.75 | 1M | 与官方介绍价同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.22 | $1.09 | 1M | 2.9折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $0.68 | $3.38 | 1M | 介绍价九折；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |
| **[IKunCode](https://api.ikuncode.cc/pricing)** | 中转 | 10 万 | ¥0.525 | ¥2.625 | 1M | 分组动态折扣，缓存命中 ¥0.0525；AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连适配，LinuxDO 或邮箱注册；价格在 api.ikuncode.cc 模型广场公开（42 款模型每 1M tokens 单价 + 分组动态折扣），控制台可查 token 用量；最低充值未公开。⚠️ 第三方转售服务，价格不代表官方，稳定性/账号安全自行评估，勿充值大额。 |

## xAI（Grok）
<p align="right"><a href="#目录">⬆ 回到顶部</a> · <a href="#许可证">⬇ 直达底部</a></p>

### Grok 4.7

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[xAI 官方](https://docs.x.ai/docs/models)** | 官方 | 2.1 亿 | $2 | $6 | 500K | 旗舰；缓存命中 $0.50；Grok 系列官方 API：4.7 为当前旗舰（2026-09 发布），面向编码、Agent 与通用文本，与 Grok 4.6 同价 $2/$6；缓存命中 $0.50；上下文窗口 500K，适合长文档与 Agent 长任务。OpenRouter、OfoxAI 等渠道与其同价。全站月访问含 Grok 网页用户。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2 | $6 | 500K | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $6 | 500K | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $2 | $6 | 500K | 与官方同价；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $2.2 | $6.6 | 500K | 中转参考价；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |

## 向量嵌入
<p align="right"><a href="#目录">⬆ 回到顶部</a></p>

### Embedding-3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** | 官方 | 687 万 | ¥0.5 | — | 8K | 嵌入模型，Batch 半价 ¥0.25；智谱 GLM 系列官方 API，国产大模型第一梯队；GLM-5.3-Flash 限时五折（标准价 0.8/2.8 元），上下文缓存、函数调用齐全；国内合规发票齐全，适合企业采购。 |

### text-embedding-v3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[阿里云百炼 Qwen 官方](https://help.aliyun.com/zh/model-studio/model-pricing)** | 官方 | 34 万 | ¥0.5 | — | 8K | 嵌入模型，Batch 半价 ¥0.25；阿里云大模型服务平台百炼：Qwen3.8 Max 为当前旗舰（多模态、1M 上下文），官方价 ¥12/¥36，缓存命中仅 ¥1.5（1.25 折）、Batch 输入半价；开源 Qwen 系列与闭源旗舰同平台可调，国内合规发票齐全；国际版 Model Studio 同款 $1.65/$4.95。全站月访问含通义网页用户。 |

### text-embedding-3-large

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $0.13 | — | 8K | 嵌入模型，1536/3072 维；GPT 系列官方 API，生态兼容最广；Batch API 半价适合离线批处理，用量分级限额随消费自动提升；视觉/音频按 token 另计。全站月访问含 ChatGPT 网页用户。 |

### text-embedding-3-small

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $0.02 | — | 8K | 嵌入模型，1536 维；GPT 系列官方 API，生态兼容最广；Batch API 半价适合离线批处理，用量分级限额随消费自动提升；视觉/音频按 token 另计。全站月访问含 ChatGPT 网页用户。 |

## 真伪检测工具

中转渠道价格诱人，但存在「套壳 / 降智」风险——用下面三个免费工具核验 API 背后的模型真伪（月访问为 traffic.cv 2026-09 数据）。

| 工具 | 月访问 | 检测方式 | 判断要点 |
| --- | --- | --- | --- |
| **[CCTest](https://cctest.ai/zh)** | 3.65 万 | 数字指纹 + 用量检测 | 多轮请求做数字指纹归因与 Token 用量异常检测，甄别掺假降智，支持 Claude/GPT/Gemini |
| **[BazaarLink Probe](https://bazaarlink.ai/zh-CN/probe)** | 17.6 万 | 84 项自动化探针 | 专测降智、掺假与偷换模型，填 Base URL + 测试 Key 即出报告 |
| **[LLM 照妖镜](https://llmtest.cn/)** | 3420 | 多轮行为探测 | 检验身份一致性、知识表现与思维链痕迹，开源纯前端、不上传 Key |

## 渠道明细

- **[OpenAI 官方](https://openai.com/api/pricing/)** [官方] — GPT 系列闭源模型官方 API。 · 月访问 4.9 亿（2026-08） · [官网](https://openai.com)
- **[Anthropic 官方](https://www.anthropic.com/pricing)** [官方] — Claude 系列官方 API，长文本与代码能力强。 · 月访问 7.2 亿（2026-08） · [官网](https://www.anthropic.com)
- **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** [官方] — 国产开源权重模型官方 API，性价比极高。 · 月访问 3.6 亿（2026-09） · [官网](https://api-docs.deepseek.com)
- **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** [官方] — 智谱清言 GLM 系列官方 API。 · 月访问 687 万（2026-09） · [官网](https://open.bigmodel.cn)
- **[阿里云百炼 Qwen 官方](https://help.aliyun.com/zh/model-studio/model-pricing)** [官方] — 阿里云百炼 Qwen 系列官方 API，开源闭源双线齐全。 · 月访问 34 万（2026-09） · [官网](https://help.aliyun.com)
- **[Kimi（月之暗面）官方](https://platform.kimi.com/docs/pricing/chat-k3)** [官方] — 月之暗面 Kimi 系列官方 API，主打长上下文与 Agentic 能力。 · 月访问 4050 万（2026-09） · [官网](https://platform.kimi.com)
- **[Google Gemini 官方](https://ai.google.dev/gemini-api/docs/pricing)** [官方] — Google Gemini 系列官方 API，多模态与长上下文见长。 · 月访问 26.4 亿（2026-09） · [官网](https://ai.google.dev)
- **[xAI 官方](https://docs.x.ai/docs/models)** [官方] — xAI 的 Grok 系列官方 API。 · 月访问 2.1 亿（2026-09） · [官网](https://docs.x.ai)
- **[DeepInfra](https://deepinfra.com/pricing)** [聚合] — 开源模型低价自托管推理平台，OpenRouter 主要上游之一。 · 月访问 50 万（2026-09） · [官网](https://deepinfra.com)
- **[OpenCode Zen](https://opencode.ai/docs/zen/)** [聚合] — OpenCode 官方模型网关，为编程 Agent 实测筛选模型，按请求计费零加价。 · 月访问 1332 万（2026-09） · [官网](https://opencode.ai)
- **[OpenRouter](https://openrouter.ai/docs/limits)** [聚合] — 统一 API 接入数百模型，模型价与上游挂牌一致。 · 月访问 2127 万（2026-09） · [官网](https://openrouter.ai)
- **[B.AI](https://b.ai/)** [中转] — Agent API 基础设施，一个 Key 调用全模型。 · 月访问 128 万（2026-09） · [官网](https://b.ai)
- **[Together AI](https://www.together.ai/pricing)** [聚合] — 开源模型推理云，也托管 DeepSeek。 · 月访问 69 万（2026-08） · [官网](https://www.together.ai)
- **[Groq](https://groq.com/pricing/)** [聚合] — LPU 推理，速度极快，价格便宜。 · 月访问 363 万（2026-09） · [官网](https://groq.com)
- **[Fireworks AI](https://fireworks.ai/pricing)** [聚合] — 开源模型托管，企业级 SLA。 · 月访问 54 万（2026-08） · [官网](https://fireworks.ai)
- **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** [聚合] — 国内开源模型推理平台，同时托管 DeepSeek/GLM。 · 月访问 147 万（2026-09） · [官网](https://siliconflow.cn)
- **[ZenMux](https://zenmux.ai/)** [中转] — 聚合 GPT/Claude/Gemini 的折扣网关。 · 月访问 38 万（2026-09） · [官网](https://zenmux.ai)
- **[AIHubMix](https://aihubmix.com/)** [中转] — 国内开发者常用的统一 Key 网关。 · 月访问 28 万（2026-09） · [官网](https://aihubmix.com)
- **[TeamoRouter](https://teamorouter.com/)** [中转] — 面向生产环境的统一模型网关，低至 1 折。 · 月访问 23 万（2026-09） · [官网](https://teamorouter.com)
- **[OfoxAI](https://ofox.ai/)** [中转] — 多模型统一 API 网关。 · 月访问 21 万（2026-09） · [官网](https://ofox.ai)
- **[OhMyGPT](https://ohmygpt.com/)** [中转] — 国内开发者常用中转网关，折扣稳定。 · 月访问 2 万（2026-09） · [官网](https://ohmygpt.com)
- **[IKunCode](https://api.ikuncode.cc/pricing)** [中转] — AI 编程工具中转站，主打 Claude Code / CodeX / Gemini CLI 直连。 · 月访问 10 万（2026-09） · [官网](https://api.ikuncode.cc)
- **[302.AI](https://302.ai/)** [中转] — 按量付费企业级 AI 资源站，图像/视频/语言模型一站式。 · 月访问 7 万（2026-09） · [官网](https://302.ai)

---

## 关于本清单

社区维护的大模型 API 价格对比。数据由 `data/items.json` 驱动，README 由脚本生成，请勿手改。

## 数据与更新

- 结构化数据见 [`data/items.json`](data/items.json)，表格版见 [`data/items.csv`](data/items.csv)；
- 顶部「prices verified」徽章的月份 = 最近一次全渠道核对轮次（与月访问数据的 traffic_month 同源，每月人工核对后更新）；
- 价格过期或厂商调价，欢迎提 Issue 或 PR；
- GitHub Actions 每日自动重建 README。

## 参与贡献

欢迎提交新渠道、新模型或更正价格，流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可证

本仓库基于 [MIT 许可证](LICENSE) 发布。各商标、模型名称归各自厂商所有。
