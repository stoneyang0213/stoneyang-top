# stoneyang.top 下次开工一键启动

> 每次新 Claude 会话开工**第一件事**: 读这个文件,再读 `wiki/log.md` 顶部第一条,再动手。

## 当前状态快照(2026-04-18 16:05 更新)

**项目阶段**: Day 1 ✅ 完成,Day 2 待进入
**硬截止**: 2026-04-25
**所在目录**: `D:\projects\stoneyang-top\`
**github repo**: https://github.com/stoneyang0213/stoneyang-top (public)
**线上站点**: https://stoneyang-top.pages.dev/ (待绑 stoneyang.top)

**Day 1 完成清单**:
- [x] 项目目录 + `Claude.md` + `wiki/log.md` + bootstrap
- [x] AstroPaper starter + npm install + build(43 页)
- [x] github public repo + push
- [x] Cloudflare Pages 项目创建(wrangler CLI)
- [x] Pages 部署,157 文件,https://stoneyang-top.pages.dev/ 可访问

**部署方式**: wrangler CLI(不走 CF Workers Builds 的 git 自动构建,因为 CF 会自动注入 `@astrojs/cloudflare` adapter 让 AstroPaper 静态站 build 失败)。未来部署命令:
```bash
cd D:/projects/stoneyang-top
npm run build
npx wrangler pages deploy dist
# (wrangler.jsonc 已有 project name 和 output dir,不用额外参数)
```

**Day 2 任务**:
- [ ] 绑定 stoneyang.top 自定义域名(需 stoneyang 告知 DNS provider)
- [ ] 替换首页内容:stoneyang 身份 Hero + 3 张正在做卡片 + 双 CTA
- [ ] 建 8 个路由骨架:
  - `/about`、`/products/`、`/products/ai-reading`、`/products/agent-os`、`/projects`、`/writing`、`/resources`
- [ ] 全局 nav 替换 AstroPaper 默认菜单

**阻塞点(不急但要关注)**:
1. **stoneyang.top DNS provider**: 在哪里买的? 决定自定义域名绑定流程
2. **二维码图片**: 个人微信 + 公众号二维码待 stoneyang 提供(放 `public/qr-wechat.png` 和 `public/qr-gongzhonghao.png`)

**历史遗留(低优先级)**:
- CF Workers 后台的 `stoneyang-top` 服务(连 github 自动 build)持续失败,不影响 Pages。空时去 Settings → Delete 清理。

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
