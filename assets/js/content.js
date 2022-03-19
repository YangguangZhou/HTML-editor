document.body.innerHTML += `<div class="left fl">
<div class="button no-select">
    <div class="group">
        <div class="item" id="ext" title="在新窗口打开"><i class="fa fa-external-link"></i></div>
        <div class="item" id="beautify" title="[F4] 格式化代码"><i class="fa fa-magic"></i></div>
        <div class="item" id="setting" title="设置"><i class="fa fa-cog"></i></div>
    </div>
    <div id="launch" title="[F9] 运行代码"><i class="fa fa-code"></i></div>
</div>
<pre id="code"></pre>
<div id="status"></div>
</div>
<div class="right fr">
<iframe frameborder="0" id="frame"></iframe>
<div class="console">
    <div class="title no-select">console</div>
    <div id="command"></div>
</div>
</div>
<div id="dialogBG"></div>
<div id="dialog" class="clearfix">
<div id="closer" class="fr">×</div>
<div class="title fl">设置</div>
<div class="content fl">
    <div class="item">
        <span class="description">自动折行</span>
        <input id="autoWarp" type="checkbox" class="chooseBtn">
        <label for="autoWarp" class="choose-label"></label>
    </div>
    <div class="item">
        <span class="description">字体大小</span>
        <input id="fontSize" type="number" min="11" max="30" step="1" value="20">
    </div>
    <p>HTML-editor 代码运行工具</p>
    <p>版权所有 © 2020 - 2022 <a href="https://jerryz.com.cn/" target="_blank" rel="noopener noreferrer">Jerry Zhou</a>
    </p>
</div>
</div>`;