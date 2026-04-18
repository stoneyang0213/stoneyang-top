# stoneyang.top 操作日志

每次开工/收工在顶部追加,倒序。

---

## 2026-04-18 15:xx | Day 1 (Claude 端) | Astro 工程就绪 + 推 github

**Claude 自动完成部分**:
- AstroPaper starter clone(satnaing/astro-paper,--depth 1)
- 合并到项目根目录(保留 Claude.md / wiki/ / _next_session_bootstrap.md)
- `npm install`:566 packages,2 min
- `npm run build`:43 页构建通过,Pagefind 索引完成,exit 0
- `git init` + 初次 commit(中文 commit msg)
- `gh repo create stoneyang-top --public --source=. --push` 成功
- github repo: **https://github.com/stoneyang0213/stoneyang-top**

**技术小选择**:
- 用 npm 而非 pnpm(避免"装新工具"陷阱,删除 pnpm-lock.yaml 让 npm 生成 package-lock.json)
- 项目根用 `D:\projects\stoneyang-top\`(非中文路径,避免 bash/npm 编码坑)

**Day 1 剩余部分(stoneyang 亲自操作)**:
1. 登录 https://dash.cloudflare.com → Workers & Pages → Create application → Pages → Connect to Git
2. 选 `stoneyang0213/stoneyang-top` 仓库
3. 框架预设选 **Astro**,构建命令 `npm run build`,输出目录 `dist`,Node 版本 20+
4. Deploy,得到 `*.pages.dev` 默认域名
5. 自定义域名 → 加 `stoneyang.top`(如果域名已在 Cloudflare 则自动,否则需手动加 CNAME)

**阻塞点**:stoneyang.top 域名 DNS provider 是?(决定自定义域名配置流程)

---

## 2026-04-18 14:08 | Day 0 | 项目启动

**产出**:
- 项目目录: `D:\projects\stoneyang-top\`(改自 plan 原路径 `D:\3.产品\`,中文路径 bash/npm 有编码坑,改为纯英文)
- `Claude.md` v0:定义硬截止 / 反陷阱纪律 / 技术栈硬约束 / 7 天日程
- `wiki/log.md`:本文件
- `_next_session_bootstrap.md`:下次开工指针

**决策记录**:
- 路径改为英文 `D:\projects\stoneyang-top\`(plan 里写的 `D:\3.产品\`,因中文路径对 bash/npm/git 有坑,改为英文)
- 技术栈硬定:Astro + AstroPaper starter + Cloudflare Pages
- Products vs Projects 分离:Products 是变现产品,Projects 是 demo/开源作品

**Day 1 待做(即将启动)**:
- 初始化 Astro 工程(AstroPaper starter)
- 本地能 `npm run dev` 起来
- 决策:github 仓库(建议 `stoneyang0213/stoneyang-top` 公开)
- 决策:托管平台最终确认(Cloudflare Pages 推荐)
- DNS 指向 stoneyang.top

**阻塞点**:需要 stoneyang 确认托管平台账号状态 + DNS provider
