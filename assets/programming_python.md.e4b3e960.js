import{_ as s,c as n,o as a,a as l}from"./app.b37d644a.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"Dictionary","slug":"dictionary","link":"#dictionary","children":[]},{"level":3,"title":"\u7C7B\u578B\u8F6C\u6362","slug":"\u7C7B\u578B\u8F6C\u6362","link":"#\u7C7B\u578B\u8F6C\u6362","children":[]}]},{"level":2,"title":"\u63A8\u5BFC\u5F0F\u5B50","slug":"\u63A8\u5BFC\u5F0F\u5B50","link":"#\u63A8\u5BFC\u5F0F\u5B50","children":[{"level":3,"title":"\u5217\u8868\u63A8\u5BFC\u5F0F","slug":"\u5217\u8868\u63A8\u5BFC\u5F0F","link":"#\u5217\u8868\u63A8\u5BFC\u5F0F","children":[]},{"level":3,"title":"\u5B57\u5178\u63A8\u5BFC\u5F0F","slug":"\u5B57\u5178\u63A8\u5BFC\u5F0F","link":"#\u5B57\u5178\u63A8\u5BFC\u5F0F","children":[]},{"level":3,"title":"\u96C6\u5408\u63A8\u5BFC\u5F0F","slug":"\u96C6\u5408\u63A8\u5BFC\u5F0F","link":"#\u96C6\u5408\u63A8\u5BFC\u5F0F","children":[]},{"level":3,"title":"tuple\u63A8\u5BFC\u5F0F","slug":"tuple\u63A8\u5BFC\u5F0F","link":"#tuple\u63A8\u5BFC\u5F0F","children":[]}]},{"level":2,"title":"\u8FD0\u7B97\u7B26","slug":"\u8FD0\u7B97\u7B26","link":"#\u8FD0\u7B97\u7B26","children":[]},{"level":2,"title":"Number","slug":"number","link":"#number","children":[{"level":3,"title":"\u6570\u5B66\u51FD\u6570: math.","slug":"\u6570\u5B66\u51FD\u6570-math","link":"#\u6570\u5B66\u51FD\u6570-math","children":[]},{"level":3,"title":"\u968F\u673A\u6570\u51FD\u6570","slug":"\u968F\u673A\u6570\u51FD\u6570","link":"#\u968F\u673A\u6570\u51FD\u6570","children":[]},{"level":3,"title":"\u4E09\u89D2\u51FD\u6570","slug":"\u4E09\u89D2\u51FD\u6570","link":"#\u4E09\u89D2\u51FD\u6570","children":[]},{"level":3,"title":"\u6570\u5B66\u5E38\u91CF","slug":"\u6570\u5B66\u5E38\u91CF","link":"#\u6570\u5B66\u5E38\u91CF","children":[]}]}],"relativePath":"programming/python.md"}'),e={name:"programming/python.md"},p=l(`<h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u4E0D\u53EF\u53D8: Number(int, float, complex), String, Tuple \u53EF\u53D8: List, Dictionary Set</p><ul><li>\u6570\u5B57\u7C7B\u578B\u662F\u4E0D\u5141\u8BB8\u6539\u53D8\u7684\uFF0C\u6539\u53D8\u4E4B\u540E\u91CD\u65B0\u5206\u914D\u5B58\u50A8\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u4F7F\u7528del\u5220\u9664\u5F15\u7528\u3002</li></ul><p>list: [e,e,e] tuple: (e,e,e)</p><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h3><ul><li>\u4F7F\u7528\u5927\u62EC\u53F7,\u6216\u8005set()\u51FD\u6570</li><li>\u65E0\u5E8F\uFF0C\u552F\u4E00.</li></ul><p>\u521B\u5EFA</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">parame = {value01,value02,...}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">set(value)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>examples:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sites = {&#39;Google&#39;, &#39;Taobao&#39;, &#39;Runoob&#39;, &#39;Facebook&#39;, &#39;Zhihu&#39;, &#39;Baidu&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print(sites)   # \u8F93\u51FA\u96C6\u5408\uFF0C\u91CD\u590D\u7684\u5143\u7D20\u88AB\u81EA\u52A8\u53BB\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6210\u5458\u6D4B\u8BD5</span></span>
<span class="line"><span style="color:#A6ACCD;">if &#39;Runoob&#39; in sites :</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;Runoob \u5728\u96C6\u5408\u4E2D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">else :</span></span>
<span class="line"><span style="color:#A6ACCD;">    print(&#39;Runoob \u4E0D\u5728\u96C6\u5408\u4E2D&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># set\u53EF\u4EE5\u8FDB\u884C\u96C6\u5408\u8FD0\u7B97</span></span>
<span class="line"><span style="color:#A6ACCD;">a = set(&#39;abracadabra&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">b = set(&#39;alacazam&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(a - b)     # a \u548C b \u7684\u5DEE\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">print(a | b)     # a \u548C b \u7684\u5E76\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">print(a &amp; b)     # a \u548C b \u7684\u4EA4\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">print(a ^ b)     # a \u548C b \u4E2D\u4E0D\u540C\u65F6\u5B58\u5728\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="dictionary" tabindex="-1">Dictionary <a class="header-anchor" href="#dictionary" aria-hidden="true">#</a></h3><p>\u4F7F\u7528{}\u521B\u5EFA\u7684key:value pair \u6216\u8005\u4F7F\u7528dict()</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#!/usr/bin/python3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dict = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">dict[&#39;one&#39;] = &quot;1 - \u83DC\u9E1F\u6559\u7A0B&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">dict[2]     = &quot;2 - \u83DC\u9E1F\u5DE5\u5177&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tinydict = {&#39;name&#39;: &#39;runoob&#39;,&#39;code&#39;:1, &#39;site&#39;: &#39;www.runoob.com&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">print (dict[&#39;one&#39;])       # \u8F93\u51FA\u952E\u4E3A &#39;one&#39; \u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">print (dict[2])           # \u8F93\u51FA\u952E\u4E3A 2 \u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">print (tinydict)          # \u8F93\u51FA\u5B8C\u6574\u7684\u5B57\u5178</span></span>
<span class="line"><span style="color:#A6ACCD;">print (tinydict.keys())   # \u8F93\u51FA\u6240\u6709\u952E</span></span>
<span class="line"><span style="color:#A6ACCD;">print (tinydict.values()) # \u8F93\u51FA\u6240\u6709\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6784\u9020\u51FD\u6570:dict(d) d\u53EF\u4EE5\u662F\u5143\u7D20\u7684\u5217\u8868\uFF0C\u96C6\u5408\uFF0C\u6216\u8005\u5143\u7EC4.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; dict([(&#39;Runoob&#39;, 1), (&#39;Google&#39;, 2), (&#39;Taobao&#39;, 3)])</span></span>
<span class="line"><span style="color:#A6ACCD;">{&#39;Runoob&#39;: 1, &#39;Google&#39;: 2, &#39;Taobao&#39;: 3}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; {x: x**2 for x in (2, 4, 6)}</span></span>
<span class="line"><span style="color:#A6ACCD;">{2: 4, 4: 16, 6: 36}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; dict(Runoob=1, Google=2, Taobao=3)</span></span>
<span class="line"><span style="color:#A6ACCD;">{&#39;Runoob&#39;: 1, &#39;Google&#39;: 2, &#39;Taobao&#39;: 3}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1">\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h3><ul><li>int(x)</li><li>float(x)</li><li>complex(real, [,img])</li><li>str(x)</li><li>repr(x)</li><li>eval(x)</li><li>tuple(s)</li><li>lsit(s)</li><li>set(s)</li><li>fronzenset(s)</li><li>chr(x)</li><li>ord(x)</li><li>hex(x)</li><li>oct(x)</li></ul><h2 id="\u63A8\u5BFC\u5F0F\u5B50" tabindex="-1">\u63A8\u5BFC\u5F0F\u5B50 <a class="header-anchor" href="#\u63A8\u5BFC\u5F0F\u5B50" aria-hidden="true">#</a></h2><p>\u4E00\u79CD\u72EC\u7279\u7684\u6570\u636E\u5904\u7406\u65B9\u5F0F\uFF0C\u4ECE\u4E00\u4E2A\u5E8F\u5217\u6784\u5EFA\u53E6\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u5E8F\u5217.</p><ul><li>list\u63A8\u5BFC\u5F0F</li><li>dict\u63A8\u5BFC\u5F0F</li><li>set\u63A8\u5BFC\u5F0F</li><li>tuple\u63A8\u5BFC\u5F0F</li></ul><h3 id="\u5217\u8868\u63A8\u5BFC\u5F0F" tabindex="-1">\u5217\u8868\u63A8\u5BFC\u5F0F <a class="header-anchor" href="#\u5217\u8868\u63A8\u5BFC\u5F0F" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">[\u8868\u8FBE\u5F0F for \u53D8\u91CF in \u5217\u8868]</span></span>
<span class="line"><span style="color:#A6ACCD;">[out_exp_res for out_exp in input_lsit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005</span></span>
<span class="line"><span style="color:#A6ACCD;">[\u8868\u8FBE\u5F0F for \u53D8\u91CF in \u5217\u8868 if \u6761\u4EF6]</span></span>
<span class="line"><span style="color:#A6ACCD;">[out_exp_res for out_exp in input_list if condition]</span></span>
<span class="line"><span style="color:#A6ACCD;">[\u7ED3\u679C\u503C1 if \u5224\u65AD\u6761\u4EF6 else \u7ED3\u679C2  for \u53D8\u91CF\u540D in \u539F\u5217\u8868]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># exmaple</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; names = [&#39;Bob&#39;,&#39;Tom&#39;,&#39;alice&#39;,&#39;Jerry&#39;,&#39;Wendy&#39;,&#39;Smith&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; new_names = [name.upper()for name in names if len(name)&gt;3]</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; print(new_names)</span></span>
<span class="line"><span style="color:#A6ACCD;">[&#39;ALICE&#39;, &#39;JERRY&#39;, &#39;WENDY&#39;, &#39;SMITH&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; multiples = [i for i in range(30) if i % 3 == 0]</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; print(multiples)</span></span>
<span class="line"><span style="color:#A6ACCD;">[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">list1 = [&#39;python&#39;, &#39;test1&#39;, &#39;test2&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">list2 = [word.title() if word.startswith(&#39;p&#39;) else word.upper() for word in list1]</span></span>
<span class="line"><span style="color:#A6ACCD;">print(list2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5B57\u5178\u63A8\u5BFC\u5F0F" tabindex="-1">\u5B57\u5178\u63A8\u5BFC\u5F0F <a class="header-anchor" href="#\u5B57\u5178\u63A8\u5BFC\u5F0F" aria-hidden="true">#</a></h3><p><code>{key_expr: value_expr for value in collection}</code> \u6216\u8005 <code>{key_expr: value_expr for value in collection if condition}</code> example:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">listdemo = [&#39;Google&#39;,&#39;Runoob&#39;, &#39;Taobao&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5C06\u5217\u8868\u4E2D\u5404\u5B57\u7B26\u4E32\u503C\u4E3A\u952E\uFF0C\u5404\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u4E3A\u503C\uFF0C\u7EC4\u6210\u952E\u503C\u5BF9</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; newdict = {key:len(key) for key in listdemo}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; newdictx</span></span>
<span class="line"><span style="color:#A6ACCD;">{&#39;Google&#39;: 6, &#39;Runoob&#39;: 6, &#39;Taobao&#39;: 6}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; dic = {x: x**2 for x in (2, 4, 6)}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; dic</span></span>
<span class="line"><span style="color:#A6ACCD;">{2: 4, 4: 16, 6: 36}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; type(dic)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;class &#39;dict&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u96C6\u5408\u63A8\u5BFC\u5F0F" tabindex="-1">\u96C6\u5408\u63A8\u5BFC\u5F0F <a class="header-anchor" href="#\u96C6\u5408\u63A8\u5BFC\u5F0F" aria-hidden="true">#</a></h3><p><code>{expression for item in Sequence}</code> or <code>{expression for item in Sequence if conditional}</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; setnew = {i**2 for i in (1,2,3)}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; setnew</span></span>
<span class="line"><span style="color:#A6ACCD;">{1, 4, 9}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; a = {x for x in &#39;abracadabra&#39; if x not in &#39;abc&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; a</span></span>
<span class="line"><span style="color:#A6ACCD;">{&#39;d&#39;, &#39;r&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&gt;&gt; type(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;class &#39;set&#39;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="tuple\u63A8\u5BFC\u5F0F" tabindex="-1">tuple\u63A8\u5BFC\u5F0F <a class="header-anchor" href="#tuple\u63A8\u5BFC\u5F0F" aria-hidden="true">#</a></h3><p><code>(expression for item in Sequence)</code> or <code>(expression for item in Sequence if conditional)</code> \u53EF\u4EE5\u5229\u7528range\u533A\u95F4\uFF0Ctuple, list, dict, set\u7B49\u6570\u636E\u7C7B\u578B\uFF0C\u5FEB\u901F\u751F\u4E00\u4E2A\u6EE1\u8DB3\u5236\u5B9A\u9700\u6C42\u7684tuple.</p><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1">\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><ul><li>\u6210\u5458\u8FD0\u7B97\u7B26 in , not in</li><li>\u8EAB\u4EFD\u8FD0\u7B97\u7B26 is , id()</li></ul><p>in, not in\u7528\u6765\u6D4B\u8BD5\u662F\u5426\u5728\u5236\u5B9A\u5E8F\u5217\u4E2D.</p><h2 id="number" tabindex="-1">Number <a class="header-anchor" href="#number" aria-hidden="true">#</a></h2><h3 id="\u6570\u5B66\u51FD\u6570-math" tabindex="-1">\u6570\u5B66\u51FD\u6570: math. <a class="header-anchor" href="#\u6570\u5B66\u51FD\u6570-math" aria-hidden="true">#</a></h3><ul><li>abs(x)</li><li>ceil(x) ...</li></ul><h3 id="\u968F\u673A\u6570\u51FD\u6570" tabindex="-1">\u968F\u673A\u6570\u51FD\u6570 <a class="header-anchor" href="#\u968F\u673A\u6570\u51FD\u6570" aria-hidden="true">#</a></h3><ul><li>choice(seq)</li></ul><h3 id="\u4E09\u89D2\u51FD\u6570" tabindex="-1">\u4E09\u89D2\u51FD\u6570 <a class="header-anchor" href="#\u4E09\u89D2\u51FD\u6570" aria-hidden="true">#</a></h3><h3 id="\u6570\u5B66\u5E38\u91CF" tabindex="-1">\u6570\u5B66\u5E38\u91CF <a class="header-anchor" href="#\u6570\u5B66\u5E38\u91CF" aria-hidden="true">#</a></h3>`,40),i=[p];function t(o,c,r,d,C,A){return a(),n("div",null,i)}const h=s(e,[["render",t]]);export{y as __pageData,h as default};
