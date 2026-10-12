**简体中文** | [English](README.en.md)

# Awesome LLM API Pricing

> 同一个模型，哪家渠道最便宜？按模型列出官方、聚合与中转渠道的输入/输出价格，帮你选最划算的调用方式。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md) ![GitHub Stars](https://img.shields.io/github/stars/peter123023/awesome-llm-api-pricing.svg) ![Last Commit](https://img.shields.io/github/last-commit/peter123023/awesome-llm-api-pricing.svg)

---

## 目录

[收录范围与读表须知](#收录范围与读表须知) · [快速跳转](#快速跳转) · [渠道明细](#渠道明细) · [关于本清单](#关于本清单) · [数据与更新](#数据与更新) · [参与贡献](#参与贡献) · [许可证](#许可证)

---

## 快速跳转

- [OpenAI](#openai)：[GPT-6 Astra](#gpt-6-astra) · [GPT-6.1 Sol](#gpt-61-sol) · [GPT-6 Luna](#gpt-6-luna)
- [Claude（Anthropic）](#claudeanthropic)：[Claude Opus 5.5](#claude-opus-55) · [Claude Sonnet 5](#claude-sonnet-5)
- [DeepSeek](#deepseek)：[DeepSeek V4.1-Flash](#deepseek-v41-flash) · [DeepSeek V4-Pro](#deepseek-v4-pro)
- [GLM（智谱）](#glm智谱)：[GLM-5.3](#glm-53) · [GLM-5.3-Flash](#glm-53-flash)
- [Kimi（月之暗面）](#kimi月之暗面)：[Kimi K3](#kimi-k3)

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
| **[OpenAI 官方](https://openai.com/api/pricing/)** | 官方 | 4.9 亿 | $10 | $50 | 1.05M | 旗舰；GPT 系列官方 API，生态兼容最广；Batch API 半价适合离线批处理，用量分级限额随消费自动提升；视觉/音频按 token 另计。全站月访问含 ChatGPT 网页用户。 |

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

### Claude Opus 5.5

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Anthropic 官方](https://www.anthropic.com/pricing)** | 官方 | 7.2 亿 | $4 | $20 | 1M | 旗舰；Claude 系列官方 API，长文本与代码能力公认第一梯队；Prompt 缓存读取最高省 90% 重复输入成本，批量处理五折；Opus/Sonnet/Haiku 三档覆盖旗舰到高性价比。全站月访问含 Claude.ai 网页用户。 |
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
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $2 | $10 | 1M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $2 | $10 | 1M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $2 | $10 | 1M | 与官方同价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $2 | $10 | 1M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $0.562 | $2.81 | 1M | 2.8折；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $2 | $10 | 1M | 与官方同价；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |

## DeepSeek

### DeepSeek V4.1-Flash

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** | 官方 | 3.6 亿 | ¥2 | ¥8 | 1M | 原生多模态；高峰价，闲时半价；开源权重模型的官方 API，性价比标杆；工作日 9-12、14-18（北京时间）为高峰，其余时段半价，context caching 自动命中再降成本；完全兼容 OpenAI SDK，迁移零改动。 |
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

### DeepSeek V4-Pro

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** | 官方 | 3.6 亿 | ¥9 | ¥27 | 1M | 高峰价，闲时半价；开源权重模型的官方 API，性价比标杆；工作日 9-12、14-18（北京时间）为高峰，其余时段半价，context caching 自动命中再降成本；完全兼容 OpenAI SDK，迁移零改动。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.66 | $1.98 | 1M | 官方闲时价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $1.32 | $3.96 | 1M | 高峰价，闲时半价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $1.32 | $3.96 | 1M | 高峰价参考；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $1.32 | $3.96 | 1M | 高峰价参考；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[TeamoRouter](https://teamorouter.com/)** | 中转 | 23 万 | $1.13 | $3.39 | 1M | 8.6折（峰时，谷时减半）；面向生产环境的模型路由层：智能调度、提示缓存（官方称命中率 >99%）、自动兜底，宣称绝不降级模型版本；2000+ 供应商实时竞价定价，热门 GPT/Claude 款普遍 1.7-2.9 折；已适配 Claude Code、Codex 等 10+ Agent 客户端，官方称 6,000+ 团队在用、日路由超 1T tokens、路由 SLA 99.98%；按量计费无月费无最低消费，支持支付宝。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $0.92 | $2.77 | 1M | 限时7折；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |

## GLM（智谱）

### GLM-5.3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** | 官方 | 687 万 | ¥8 | ¥28 | 1M | 旗舰，缓存命中 ¥2；智谱 GLM 系列官方 API，国产大模型第一梯队；GLM-5.3-Flash 限时五折（标准价 0.8/2.8 元），上下文缓存、函数调用齐全；国内合规发票齐全，适合企业采购。 |
| **[OpenRouter](https://openrouter.ai/docs/limits)** | 聚合 | 2127 万 | $0.079 | $4.8 | 1M | 与官方同价；最大的模型聚合网关：统一 API 接入数百个模型，价格与上游挂牌一致；自动路由到最便宜可用供应商并故障兜底，部分热门模型有免费档；支持加密货币充值。 |
| **[B.AI](https://b.ai/)** | 中转 | 128 万 | $1.1 | $3.9 | 1M | 与官方同价；波场创始人孙宇晨公开站台（36氪专题报道）：区块链登录、USDT 等加密货币纯匿名支付，宣称价格全网最低；定位 AI Agent 时代的金融基础设施，集成 x402 支付协议。第三方中转，勿充大额。 |
| **[硅基流动 SiliconFlow](https://siliconflow.cn/pricing)** | 聚合 | 147 万 | ¥8 | ¥28 | 1M | 与官方同价；国内最大的开源模型推理平台之一：托管 DeepSeek、GLM、Qwen 等主流开源模型，部分小模型免费；国内直连无需代理，支持人民币支付与发票。 |
| **[ZenMux](https://zenmux.ai/)** | 中转 | 38 万 | $1.1 | $3.9 | 1M | 多供应商最低价；全球首个推出「AI 保险」的聚合网关：自动检测幻觉、输出质量差、高延迟等问题，次日自动赔付额度——第三方评测称「这是同行里没人敢公开承诺的」；双协议兼容 OpenAI 与 Anthropic 标准，无缝对接 Claude Code、Cursor 等工具；ZenMux Auto 智能路由按质量/成本选模型（客户实测约省 20%）；SOC2 合规推进中。第三方中转，勿充大额。 |
| **[AIHubMix](https://aihubmix.com/)** | 中转 | 28 万 | $1.1 | $3.9 | 1M | 与官方同价；官方宣传「一个接口，路由所有大语言模型」：无限并发、与 OpenAI 官方 API 完全兼容零改动切换、持续优化线路；平台补贴 27+ 个真正免费的模型（含 GPT-5.5、Gemini 3、GLM 等）；生态伙伴应用消费享 9 折（APP-Code 机制）；无包月无会员、用多少买多少，博客与文档更新活跃。第三方中转，勿充大额。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $1.4 | $4.4 | 1M | 0手续费直通；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |
| **[OhMyGPT](https://ohmygpt.com/)** | 中转 | 2 万 | $1.2 | $4.2 | 1M | 中转参考价；面向国内开发者的老牌中转：聚合 100+ 模型（OpenAI、Claude、Gemini、DeepSeek、Grok、Qwen 等），100% OpenAI 兼容零改动迁移；企业功能齐全——密钥级权限控制、开放 OAuth API 等；支付方式覆盖国内外主流渠道，是支付最方便的一家；第三方评测站 AI Gateways 编辑评分 3.8/5。第三方中转，勿充大额。 |
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
| **[302.AI](https://302.ai/)** | 中转 | 7 万 | $0.065 | $0.22 | 1M | 中转参考价；按量付费的企业级 AI 资源站：0 月费、$1≈1 credit、最低充值约 $5、余额永久有效；机器人与应用无限制创建和分享，开源应用生态支持私有化部署；媒体评测称其「既面向小白也面向开发者友好，API 全部开放」。第三方中转，勿充大额。 |

## Kimi（月之暗面）

### Kimi K3

| 渠道 | 类型 | 月访问 | 输入 | 输出 | 上下文 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| **[Kimi（月之暗面）官方](https://platform.kimi.com/docs/pricing/chat-k3)** | 官方 | 4050 万 | ¥20 | ¥100 | 1.05M | 旗舰，长程编码与 Agent 任务；缓存命中 ¥2；Kimi 系列官方 API：K3 主打 1M tokens 长上下文、长程编码与 Agent 任务；国内站人民币计价（¥20/¥100），国际站等值 $3/$15；上下文缓存命中仅 ¥2、写入 ¥40（1 小时有效），适合高频重复前缀场景。全站月访问含 Kimi 网页助手用户（kimi.com，2026-09 约 4050 万）。 |
| **[OfoxAI](https://ofox.ai/)** | 中转 | 21 万 | $3 | $15 | 1M | 与官方国际版同价；主打官方渠道直连与实时透明定价（所见即所付），0 平台费；改一个 base URL 即接入，支持 Claude Code、Codex 等 10+ 工具；视频/图像模型强势（Seedance 低至 $0.11/秒、图像 $0.03/张起），并公开全平台 token 用量排行供查证。第三方中转，勿充大额。 |

## 渠道明细

- **[OpenAI 官方](https://openai.com/api/pricing/)** [官方] — GPT 系列闭源模型官方 API。 · 月访问 4.9 亿（2026-08） · [官网](https://openai.com)
- **[Anthropic 官方](https://www.anthropic.com/pricing)** [官方] — Claude 系列官方 API，长文本与代码能力强。 · 月访问 7.2 亿（2026-08） · [官网](https://www.anthropic.com)
- **[DeepSeek 官方](https://api-docs.deepseek.com/quick_start/pricing)** [官方] — 国产开源权重模型官方 API，性价比极高。 · 月访问 3.6 亿（2026-09） · [官网](https://api-docs.deepseek.com)
- **[智谱 GLM 官方](https://open.bigmodel.cn/pricing)** [官方] — 智谱清言 GLM 系列官方 API。 · 月访问 687 万（2026-09） · [官网](https://open.bigmodel.cn)
- **[Kimi（月之暗面）官方](https://platform.kimi.com/docs/pricing/chat-k3)** [官方] — 月之暗面 Kimi 系列官方 API，主打长上下文与 Agentic 能力。 · 月访问 4050 万（2026-09） · [官网](https://platform.kimi.com)
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
- **[302.AI](https://302.ai/)** [中转] — 按量付费企业级 AI 资源站，图像/视频/语言模型一站式。 · 月访问 7 万（2026-09） · [官网](https://302.ai)

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
