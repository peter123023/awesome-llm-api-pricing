# 参与贡献

本清单的一切内容都由 `data/items.json` 驱动，README 是脚本生成的 ——**不要直接改 README.md**，改数据文件即可。

## 收录门槛（提交 PR 前先自查）

**官方厂商 / 聚合平台**：有公开定价页、个人可注册付费、服务在营，即可提交。

**中转网关（B 类）**：必须满足以下条件才能提 PR：



* **月访问量 ≥ 1 万次**（SimilarWeb /traffic.cv 2026 口径，在 PR 里附上数据来源截图或链接）；

* 有公开定价页，写清折扣率或实际单价；

* 最低充值 ≤ ¥50；

* 运营 ≥ 6 个月，有可查社区讨论；

* 有自用 dashboard 查 token 用量。

> ⚠️ 月访问量 < 1 万的中转暂不收录 —— 样本太小，跑路风险高，对读者没参考价值。提 PR 前请先自查 SimilarWeb /traffic.cv。

## 新增一个厂商



1. 在 `data/items.json` 的 `items` 数组里追加一项，字段如下：



```
{
  "slug": "vendor-slug",
  "name": { "zh": "厂商中文名", "en": "Official English Name" },
  "vendor": { "zh": "国家/地区", "en": "Country" },
  "desc": { "zh": "一句话中文描述", "en": "one English sentence" },
  "category": "overseas | domestic | aggregator",
  "url": "https://官方定价页地址",
  "currency": "USD | CNY",
  "pricing": [
    { "model": "模型名", "input": 2.5, "output": 10, "context": "128K" }
  ],
  "tags": ["closed-source", "multimodal"],
  "notes": { "zh": "缓存折扣/免费层等备注", "en": "same notes in English" }
}
```

## 规则



* `pricing` 里 `input` / `output` 单位固定为 **每 1M tokens**，数字按 `currency` 填；免费填 `0`，按上游浮动填 `null`。

* `category` 只能是 `overseas` / `domestic` / `aggregator`。

* **英文名&#x20;**`name.en`**&#x20;/ 英文描述&#x20;**`desc.en`**&#x20;里不能出现中文**；中国品牌名请用官方英文名（如 DeepSeek、Qwen、Zhipu、Moonshot）。

* `url` 尽量直接指向**官方定价页**，而不是首页。

* 价格请从官方定价页核对，PR 里附一句核对日期更好。

## 本地验证



```
npm install
npm run all        # = sync（校验数据） + build（重新生成 README）
```

确认 `git diff` 只动了 README 和 CSV，再提交。