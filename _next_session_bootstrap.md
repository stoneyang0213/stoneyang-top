# stoneyang.top 下次开工一键启动

> 每次新 Claude 会话开工**第一件事**: 读这个文件,再读 `wiki/log.md` 顶部第一条,再动手。

## 当前状态快照(2026-04-18 15:xx 更新)

**项目阶段**: Day 1 进行中(Claude 端完成,stoneyang 端 Cloudflare Pages 待操作)
**硬截止**: 2026-04-25
**所在目录**: `D:\projects\stoneyang-top\`
**github repo**: https://github.com/stoneyang0213/stoneyang-top (public)

**已完成**:
- [x] 项目目录 + `Claude.md` + `wiki/log.md` + bootstrap
- [x] AstroPaper starter + npm install + build 通过(43 页)
- [x] git init + 初次 commit
- [x] gh repo create + push main

**stoneyang 端立即要做(Day 1 收尾)**:
- [ ] 登录 https://dash.cloudflare.com → Workers & Pages → Create application → Pages → Connect to Git
- [ ] 选 `stoneyang0213/stoneyang-top`,框架预设 **Astro**,构建命令 `npm run build`,输出目录 `dist`
- [ ] Deploy → 得到 `*.pages.dev` 默认域名
- [ ] Custom domains → 加 `stoneyang.top`(如果域名已托管在 Cloudflare,一键;否则 DNS provider 加 CNAME)

**下一个 Claude 会话要做(Day 2)**:
- [ ] 替换首页内容:stoneyang 身份定位 Hero + 3 张正在做卡片
- [ ] 建 6 个一级路由 + 2 个产品子路由的骨架:
  - `/about`、`/products/`、`/products/ai-reading`、`/products/agent-os`、`/projects`、`/writing`、`/resources`
- [ ] 全局 nav 替换 AstroPaper 默认菜单

**阻塞点**:
1. **Cloudflare 部署**: 需要 stoneyang 登录 CF UI 操作一次(一次性配置,之后每次 git push 自动部署)
2. **stoneyang.top DNS provider**: 在哪里买的? 决定自定义域名配置复杂度
3. **二维码图片**: 个人微信 + 公众号二维码待 stoneyang 提供(放 `public/qr-wechat.png` 和 `public/qr-gongzhonghao.png`)

## 下次开工的第一句话

如果你是下一次的 Claude 会话,stoneyang 进来时可能会说:
- "继续 stoneyang.top" → 读本文件 + 读 wiki/log.md 顶部 → 按"立即要做" 清单下一项动手
- "Day X 进展?" → 读 wiki/log.md 看最新 entry
- "我决定用 Cloudflare / Vercel" → 登录该平台,连接 github 仓库,部署

## 硬规则提醒(每次会话开场必须遵守)

- **反陷阱**: 禁止"我研究一下...再做",禁止调配色/字体/动画,禁止装新工具
- **60 分就发**: 先跑通,再优化
- **每天硬收工**: 日期边界不通宵,每天留一条 log

## 关键路径

- 项目根: `D:\projects\stoneyang-top\`
- 项目 Claude.md: `D:\projects\stoneyang-top\Claude.md`(必读)
- 操作日志: `D:\projects\stoneyang-top\wiki\log.md`(倒序追加)
- 全局 plan: `C:\Users\33625\.claude\plans\stoneyang-top-claude-md-ip-2-https-www-linear-key.md`

- Obsidian AgentOS: `D:\2.知识体系\Obsidian\笔记库_V1.0\000-AgentOS\README.md`(Agent OS 产品页内容源头)
- AI 阅读课程教案: `D:\2.知识体系\Obsidian\笔记库_V1.0\000-AgentOS\03-Actuators_研发引擎\AI阅读课程\`
