# stoneyang.top 个人官网项目

## 项目本质

stoneyang 的**超级个体 IP 中枢站**,是所有分发渠道(公众号 / 小红书 / 视频号 / github)回流的唯一 URL。
- 首要访客: 公众号/小红书读者想"了解这个人"
- 首要 CTA: 关注公众号(轻触点) + 加个人微信(重触点, AI 阅读课程咨询)
- v0 不承载支付/会员/订阅,付费全走个人微信私域

## 硬截止与纪律

**硬截止**: 2026-04-25 (7 天 sprint,沿用 14 本书 wiki 的节奏)

**三条反陷阱纪律**(违反任何一条立刻停手):

1. **禁止拖延陷阱**: 任何"我想再研究下 Astro 高级特性 / 再学一下 Tailwind / 要不要换框架"的冲动 = `feedback_tool_procrastination` 陷阱信号,默认拦截
2. **禁止 CSS 黑洞**: v0 不写自定义组件库,不调设计系统,不做动画,用 starter 开箱即用,白底 + 强对比 + 1 个强调色就够
3. **60 分就发**: Day 1 必须上线,哪怕首页只显示 "Hello stoneyang",不要 Day 1 还在调主题色

## 产品架构(v0)

- 6 个一级路由 + 2 个产品子路由
- `/` 首页 / `/about` 我是谁 / `/products` 产品矩阵 / `/products/ai-reading` / `/products/agent-os` / `/projects` 项目 / `/writing` 思考 / `/resources` 资源
- **Products vs Projects 的区分**: Products 是能变现的产品(AI 阅读 / Agent OS), Projects 是 demo / 开源作品(14 本书 wiki / Claude Code playbook)

## 技术栈(硬定,不许换)

- 框架: **Astro** + AstroPaper starter (或 Astro Theme Cactus)
- 部署: **Cloudflare Pages** (绑 stoneyang.top)
- 域名: stoneyang.top (已有)
- 字体: 中文思源黑体 / 霞鹜文楷, 英文 Inter
- 视觉: 白底 + 强对比黑字 + 1 个强调色

## 7 天 sprint 日程

| Day | 日期 | 交付 |
|---|---|---|
| Day 1 | 4/19 | Astro starter 部署到 stoneyang.top,能打开 |
| Day 2 | 4/20 | 8 个路由骨架 + 全局 nav + 占位 |
| Day 3 | 4/21 | 首页内容(Hero + 正在做 + 平台 + 双 CTA)|
| Day 4 | 4/22 | 产品矩阵页 + AI 阅读子页 + Agent OS 子页 |
| Day 5 | 4/23 | About + Projects + Writing + Resources |
| Day 6 | 4/24 | 视觉打磨 + 移动端 + favicon + OG |
| Day 7 | 4/25 | 上线通告 + 全平台反哺 |

## 每次开工 / 收工纪律

- **开工**: 先读 `_next_session_bootstrap.md` → `wiki/log.md` 最后一条 → 才动手
- **收工**: 必须追加 log 到 `wiki/log.md` + 更新 `_next_session_bootstrap.md`
- **不装新工具**: 7 天内动了"我想装 X"的念头 = 陷阱信号,默认拦截

## 与其他项目的关系

- **Agent OS (Obsidian vault)**: `D:\2.知识体系\Obsidian\笔记库_V1.0\000-AgentOS\` 是 `/products/agent-os` 页的内容源头(README.md 提供 5 大舱室架构)
- **AI 阅读课程**: `D:\2.知识体系\Obsidian\笔记库_V1.0\000-AgentOS\03-Actuators_研发引擎\AI阅读课程\` 是 `/products/ai-reading` 的内容源头
- **14 本书 wiki**: 已在 github.com/stoneyang0213/karpathy-mit-reading-wiki 公开,只做外链,不复制内容
- **公众号文章**: `/writing` 做索引,canonical 指向公众号原文
