天天双拼 V13.2 · iPad 在线版（Safari 主屏幕网页 App）
===================================================

已保留你确认的练习版本：
- 12 篇静态高清山水诗文与生活词语
- 「标准 / 大 / 超大」三档字号
- 键盘音效、完成提示、完成时其他内容不移位
- 进度在本机保存，可从设置导出或恢复 JSON 备份
- 可以从 Safari 添加到 iPad 主屏幕，像 App 一样全屏使用
- 首次联网成功并缓存完整程序后，断网也能打开（仍取决于 Safari 缓存是否被系统清理）

一、上传 GitHub Pages（在电脑上，只做一次）
1. 解压压缩包。
2. 打开 https://github.com/new 新建 Public 仓库，例如 tiantian-shuangpin。
3. 进入仓库 → Add file → Upload files → 把解压出的 index.html、sw.js、manifest.webmanifest、三个 PNG 图标文件上传到仓库根目录（也可以上传 .nojekyll 文件）。
4. Commit changes 提交文件。
5. Settings → Pages → Build and deployment → Source: Deploy from a branch。
6. Branch: main, Folder: /(root) → Save。
7. 等待 Pages 发布完成；访问 https://<用户名>.github.io/tiantian-shuangpin/ 检查能正常开始练习。

注意：GitHub Pages 网站通常公开可访问。请不要往仓库添加私人资料。
如果原来已建好同名仓库，直接替换这几个文件，并确认 Pages 使用 main/(root) 即可。

二、iPad 安装（无须 App Store / Sitecase）
1. 打开 iPad Safari，输入你的 GitHub Pages HTTPS 网址。
2. 首次打开保持联网，并等待页面完全显示，给浏览器缓存一点时间。
3. 点击 Safari 分享按钮（方框向上箭头）→ 添加到主屏幕。
4. 如有「作为网页 App 打开」，打开该选项；名称填「天天双拼」→ 添加。
5. 回到 iPad 主屏幕，点击天天双拼图标，开始练习。
6. 确认能运行后，开启飞行模式再打开，验证离线缓存。

三、备份练习记录
打开 天天双拼 → 设置 → 备份 / 恢复练习记录 → 保存备份文件。
记录留在本机，不会因为网站公开而自动上传 GitHub。
不要使用隐私模式来保存进度，也不要随意清除 Safari 网站数据。

四、以后的更新
只需把新的 index.html 和 sw.js 上传到同一个 GitHub 仓库。
发布后在线打开会更新缓存；如果以后更改文件版本，应同步提升 sw.js 里的 CACHE_NAME。
如果把仓库从 Public 设为 Private，GitHub Free 的 Pages 会失去可用的网站服务，不能把缓存当成永久可靠的安装方式。
