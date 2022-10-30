import{_ as a,c as i,b as n,t,a as e,o as s}from"./app.bee55a57.js";const y=JSON.parse('{"title":"programming \u6C47\u603B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6C47\u603B","slug":"\u6C47\u603B","link":"#\u6C47\u603B","children":[]},{"level":2,"title":"#Types:","slug":"types","link":"#types","children":[{"level":3,"title":"\u7EC4\u5408\u7C7B\u578B:","slug":"\u7EC4\u5408\u7C7B\u578B","link":"#\u7EC4\u5408\u7C7B\u578B","children":[]},{"level":3,"title":"Error:","slug":"error","link":"#error","children":[]}]},{"level":2,"title":"Javascript:\u6211\u7684\u8981\u70B9","slug":"javascript-\u6211\u7684\u8981\u70B9","link":"#javascript-\u6211\u7684\u8981\u70B9","children":[{"level":3,"title":"ECMA6:\u7C7B\u7684\u5B9A\u4E49,\u7EE7\u627F\u3002","slug":"ecma6-\u7C7B\u7684\u5B9A\u4E49-\u7EE7\u627F\u3002","link":"#ecma6-\u7C7B\u7684\u5B9A\u4E49-\u7EE7\u627F\u3002","children":[]},{"level":3,"title":"ES6 modules","slug":"es6-modules","link":"#es6-modules","children":[]},{"level":3,"title":"\u5F15\u7528\u7C7B\u578B","slug":"\u5F15\u7528\u7C7B\u578B","link":"#\u5F15\u7528\u7C7B\u578B","children":[]},{"level":3,"title":"JS\u51FD\u6570:","slug":"js\u51FD\u6570","link":"#js\u51FD\u6570","children":[]}]},{"level":2,"title":"Solidity","slug":"solidity","link":"#solidity","children":[{"level":3,"title":"specifiers:","slug":"specifiers","link":"#specifiers","children":[]},{"level":3,"title":"\u51FD\u6570\u4FEE\u9970\u7B26:","slug":"\u51FD\u6570\u4FEE\u9970\u7B26","link":"#\u51FD\u6570\u4FEE\u9970\u7B26","children":[]},{"level":3,"title":"reference types","slug":"reference-types","link":"#reference-types","children":[]},{"level":3,"title":"struct","slug":"struct","link":"#struct","children":[]},{"level":3,"title":"\u7EE7\u627F\u53CAOOP:","slug":"\u7EE7\u627F\u53CAoop","link":"#\u7EE7\u627F\u53CAoop","children":[]},{"level":3,"title":"\u63A5\u53E3 EIP165","slug":"\u63A5\u53E3-eip165","link":"#\u63A5\u53E3-eip165","children":[]}]},{"level":2,"title":"Vue.js","slug":"vue-js","link":"#vue-js","children":[{"level":3,"title":"Case sensitivity","slug":"case-sensitivity","link":"#case-sensitivity","children":[]},{"level":3,"title":"Components/Vue instance","slug":"components-vue-instance","link":"#components-vue-instance","children":[]},{"level":3,"title":"directive bindings","slug":"directive-bindings","link":"#directive-bindings","children":[]}]},{"level":2,"title":"Git","slug":"git","link":"#git","children":[]},{"level":2,"title":"HTML/CSS","slug":"html-css","link":"#html-css","children":[{"level":3,"title":"selectors","slug":"selectors","link":"#selectors","children":[]},{"level":3,"title":"BOX:","slug":"box","link":"#box","children":[]},{"level":3,"title":"layout-page flow","slug":"layout-page-flow","link":"#layout-page-flow","children":[]}]},{"level":2,"title":"Nodejs","slug":"nodejs","link":"#nodejs","children":[]}],"relativePath":"programming/fullstack.md"}'),l={name:"programming/fullstack.md"},r=e(`<h1 id="programming-\u6C47\u603B" tabindex="-1">programming \u6C47\u603B <a class="header-anchor" href="#programming-\u6C47\u603B" aria-hidden="true">#</a></h1><h2 id="\u6C47\u603B" tabindex="-1">\u6C47\u603B <a class="header-anchor" href="#\u6C47\u603B" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>\u8FD9\u90E8\u5206\u5E94\u8BE5\u662Fweb3 full stack</p></div><h2 id="types" tabindex="-1">#Types: <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><p>JS: 7 types: number, undefined, boolean, string, symbol, null, Object</p><p>Go: int, byte, boolean, string, float</p><p>Solidity: int, unit, int8, int256, boolean, fixed, ufixed,fixed128x18, address,address payable, uint160, bytes20, contract</p><h3 id="\u7EC4\u5408\u7C7B\u578B" tabindex="-1">\u7EC4\u5408\u7C7B\u578B: <a class="header-anchor" href="#\u7EC4\u5408\u7C7B\u578B" aria-hidden="true">#</a></h3><p>Solidity:\u56FA\u5B9A\u5C3A\u5BF8\u6570\u7EC4: bytes1\u2026 bytes32 \u5728js\u4E2D\u6CA1\u6709struct, \u5728go\u4E2D\u6709\u3002\u5728solidity\u4E2D\u6709.</p><p>Map, array, struct, 3\u79CDdata location\u7C7B\u578B: memory, storage, calldata. \u7701\u7565\u5219\u4E3Astorage.</p><p>Array slices:\u6709\u70B9\u7C7B\u4F3C\u4E8Ego\u91CC\u9762\u7684array slice,\u4F46\u662F\u9650\u5236\u5F88\u591A.mappings\u53EA\u6709storage</p><h4 id="solidity\u6700\u5E38\u7528" tabindex="-1">Solidity\u6700\u5E38\u7528 <a class="header-anchor" href="#solidity\u6700\u5E38\u7528" aria-hidden="true">#</a></h4><p>\u57FA\u672C\u7C7B\u578B: Int, uint, boolean, bytes, address</p><p>\u53D8\u91CF\u7684\u7F3A\u7701\u503C: Boo,uint, int, \u9759\u6001\u5C3A\u5BF8\u6570\u7EC4:\u6BCF\u4E2A\u5143\u7D20\u90FD\u4E3A0.\u5F15\u7528\u7C7B\u578B:bytes, string, \u7F3A\u7701\u503C\u4E3A\u7A7A.</p><p>Scope: \u9075\u5FAAC99,\u4ECE\u58F0\u660E\u5230\u6700\u5C0F{}\u7ED3\u675F\u3002for\u5FAA\u73AF\u662F\u4E2A\u4F8B\u5916\uFF0C\u4ECE\u521D\u59CB\u5316\u5230for\u5FAA\u73AF\u7ED3\u675F\u3002\u51FD\u6570\u7684\u53C2\u6570\u5230\u51FD\u6570\u4F53\u7ED3\u675F. \u4EE3\u7801\u5757\u4E4B\u5916\u58F0\u660E\u7684\u53EF\u4EE5\u5728\u58F0\u660E\u524D\u770B\u5230\u3002 Checked or unchecked: &lt; 0.8.0: wrap for overflow. ^0.8.0: revert.</p><h3 id="error" tabindex="-1">Error: <a class="header-anchor" href="#error" aria-hidden="true">#</a></h3><p>State-reverting\u6765\u5904\u7406\u9519\u8BEF.\u9519\u8BEFbubble up\u76F4\u5230\u88ABtry/catch\u6355\u83B7\u3002\u4F8B\u5916\u7684\u662Fsend, call, delegatecall, staticcall. \u8FD4\u56DEfalse.(\u5982\u679C\u8C03\u7528\u8D26\u6237\u4E0D\u5B58\u5728\u8FD4\u56DEtrue, \u5FC5\u987B\u5148\u68C0\u67E5\u8D26\u6237\u662F\u5426\u5B58\u5728.) Error(string), Panic(uint256). Panic via assert and Error via require. Assert\u548Crequire\u53EF\u4EE5\u7528\u6765\u68C0\u67E5\u6761\u4EF6\uFF0Cthrow\u4E00\u4E2A\u4E00\u573A\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (!condition) revert CustomError(); \u4E0Erequire \u81EA\u5B9A\u4E49\u9519\u8BEF.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="javascript-\u6211\u7684\u8981\u70B9" tabindex="-1">Javascript:\u6211\u7684\u8981\u70B9 <a class="header-anchor" href="#javascript-\u6211\u7684\u8981\u70B9" aria-hidden="true">#</a></h2><p>\u53EF\u8BA1\u7B97\u5C5E\u6027, \u89E3\u6784\u8D4B\u503C\u3002</p><h3 id="ecma6-\u7C7B\u7684\u5B9A\u4E49-\u7EE7\u627F\u3002" tabindex="-1">ECMA6:\u7C7B\u7684\u5B9A\u4E49,\u7EE7\u627F\u3002 <a class="header-anchor" href="#ecma6-\u7C7B\u7684\u5B9A\u4E49-\u7EE7\u627F\u3002" aria-hidden="true">#</a></h3><p>\u5DE5\u5382\u6A21\u5F0F\uFF0C\u6309\u7167\u7279\u5B9A\u63A5\u53E3\u521B\u5EFA\u5BF9\u8C61\u3002(\u4E0D\u77E5\u9053\u7C7B\u578B) \u6784\u9020\u51FD\u6570\u6A21\u5F0F. \u51FD\u6570\u58F0\u660E\u6A21\u5F0F\uFF0C\u8D4B\u503C\u7ED9\u53D8\u91CF\u7684\u51FD\u6570\u8868\u8FBE\u5F0F. \u539F\u578B\u6A21\u5F0F:\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u5C5E\u6027(\u5BF9\u8C61) Class ES2015(private member: #) JS\u7684\u539F\u751F\u5F15\u7528\u7C7B\u578BObject, Array, String\u90FD\u5728\u539F\u578B\u4E0A\u5B9A\u4E49\u4E86\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><h3 id="es6-modules" tabindex="-1">ES6 modules <a class="header-anchor" href="#es6-modules" aria-hidden="true">#</a></h3><p>Default export,Named export,Renamed export and import, module object, module aggregation, dynamic module loading. \u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2Adefault export: \u53EF\u4EE5\u533F\u540D\u51FD\u6570\u4F5C\u4E3A\u7F3A\u7701\u5BFC\u51FA. \u4F8B\u5982: Import randomSquare from \u2018./modules/square.mjs\u2019 \u76F8\u5F53\u4E8E: import {default as randomSquare} from \u2018./modules/square.mjs\u2019</p><p>Renamed export or renamed import: \u53EF\u4EE5\u5728\u5BFC\u51FA\u6216\u8005\u5BFC\u5165\u4FA7\u505A\u91CD\u547D\u540D: Module export: Import * as Module from \u2018/modules/module.mjs\u2019 \u4F7F\u7528: Module.f1(), Module.f2() Module aggregation: Export {xxx} from \u2018./x.mjs\u2019</p><h3 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1">\u5F15\u7528\u7C7B\u578B <a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u57FA\u672C\u5F15\u7528\u7C7B\u578B: Date, RegExp, \u539F\u59CB\u503C\u5305\u88C5\u5BF9\u8C61. \u590D\u5408\u5F15\u7528\u7C7B\u578B: Array, Map \u6570\u7EC4: \u52A8\u6001\uFF0C\u4EFB\u610F\u7C7B\u578B\u3002 \u4E24\u4E2A\u521B\u5EFA\u6570\u7EC4\u7684\u9759\u6001\u65B9\u6CD5: Array.from(), Array.of()</p><p>\u8FED\u4EE3\u5668\u65B9\u6CD5: keys(), values(), entries()</p><p>\u590D\u5236\u548C\u586B\u5145\u65B9\u6CD5: copyWithin(), fill()</p><p>\u8D1F\u7D22\u5F15 \u6808\u65B9\u6CD5:push, pop, \u961F\u5217\u65B9\u6CD5\u3002</p><p>\u65AD\u8A00\u51FD\u6570 \u8FED\u4EE3\u65B9\u6CD5: every(), filter(), forEach(),map(), some()</p><h3 id="js\u51FD\u6570" tabindex="-1">JS\u51FD\u6570: <a class="header-anchor" href="#js\u51FD\u6570" aria-hidden="true">#</a></h3><p>Js\u6CA1\u6709\u51FD\u6570\u7B7E\u540D\u3002JS\u7684\u51FD\u6570\u53C2\u6570\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u7C7B\u6570\u7EC4\u3002arguments \u51FD\u6570\u58F0\u660E\u4E0E\u51FD\u6570\u8868\u8FBE\u5F0F, \u80D6\u7BAD\u5934\u51FD\u6570.</p><h2 id="solidity" tabindex="-1">Solidity <a class="header-anchor" href="#solidity" aria-hidden="true">#</a></h2><h3 id="specifiers" tabindex="-1">specifiers: <a class="header-anchor" href="#specifiers" aria-hidden="true">#</a></h3><h4 id="solidity-\u51FD\u6570" tabindex="-1">Solidity:\u51FD\u6570. <a class="header-anchor" href="#solidity-\u51FD\u6570" aria-hidden="true">#</a></h4><h3 id="\u51FD\u6570\u4FEE\u9970\u7B26" tabindex="-1">\u51FD\u6570\u4FEE\u9970\u7B26: <a class="header-anchor" href="#\u51FD\u6570\u4FEE\u9970\u7B26" aria-hidden="true">#</a></h3><p>State\u53EF\u89C1\u884C: public, internal, private. \u51FD\u6570\u7C7B\u578B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function &lt;function name&gt;(&lt;parameter types&gt;) {internal|external|public|private} [pure|view|payable] [returns (&lt;return types&gt;)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610Freturns, return\u7684\u533A\u522B.</p><h4 id="\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" tabindex="-1">\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF: <a class="header-anchor" href="#\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h4><p>storage, memory, calldata</p><p>\u5408\u7EA6\u5185\u51FD\u6570\u5916\u53EF\u4EE5\u4E0D\u5199\u4F4D\u7F6E\uFF0C\u7F3A\u7701\u4E3A\u72B6\u6001\u53D8\u91CF, storage. \u51FD\u6570\u5185\u53EF\u4EE5\u4E0D\u5199\u4F4D\u7F6E\uFF0C\u7F3A\u7701\u4E3Amemory.</p><p>state variable, local variable, global variable.</p><ul><li>local variable:\u51FD\u6570\u5185\u58F0\u660E, \u5C40\u90E8\u53D8\u91CF.</li><li>state variable: \u5408\u7EA6\u5185\uFF0C\u51FD\u6570\u5916.</li><li>global variable: solidity \u9884\u7559\u7684\u5173\u952E\u5B57. msg.sender, block.number, msg.data.</li></ul><h4 id="visibility" tabindex="-1">visibility <a class="header-anchor" href="#visibility" aria-hidden="true">#</a></h4><p>\u7F3A\u7701\u60C5\u51B5\u4E0B\u4E3Ainternal\uFF1B\u5408\u7EA6\u5185\u7684\u51FD\u6570\u5FC5\u987B\u660E\u786E\u53EF\u89C1\u6027\uFF1A</p><p>External/Public\u51FD\u6570\u6709\u4E24\u4E2A\u6210\u5458\uFF1A.address, .selector</p><p>Function Visibility specifiers: public, private, external, internal(\u76F8\u5BF9\u4E8Econtract\u6765\u8BB2.), default: internal</p><p>external(contract interface, transactions, can\u2019t be called internally-f(). this.f()\u53EF\u4EE5, only message calls), public(can callinternally or message calls), internal(\u53EF\u4EE5\u4F7F\u7528\u5185\u90E8\u53C2\u6570:\u4F8B\u5982mapping, storage\u5F15\u7528), private</p><p>Internal\u4E0Eexternal: \u5408\u7EA6\u5916\u90E8\u7684\u8C03\u7528, message call.{value: 10, gas: 10000}, payable, \u4F7F\u7528this.f()</p><p>external\u4E0Epublic\u7684\u533A\u522B:public\u53EF\u4EE5\u88AB\u5408\u7EA6\u5185\u8C03\u7528.</p><p>(stateMutability: view/pure/payable/nonpayable), stateMutability: default nonpayable</p><h4 id="modifier-\u6784\u9020\u51FD\u6570" tabindex="-1">modifier/\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#modifier-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h4><p>\u4FEE\u9970\u7B26:\u6743\u9650\u7BA1\u7406/require(\u5FC5\u987B\u6EE1\u8DB3\u67D0\u4E9B\u6761\u4EF6\u5426\u5219revert), modifier. \u4E24\u4E2A\u7279\u6B8A\u51FD\u6570:receive, fallback.</p><ul><li>\u8FD0\u884C\u51FD\u6570\u524D\u7684\u68C0\u67E5\uFF0C\u4F8B\u5982\u5730\u5740\uFF0C\u53D8\u91CF\uFF0C\u4F59\u989D\u7B49\u3002</li></ul><p>Payable: \u8FD9\u4E2Apublic\u51FD\u6570\u80FD\u6536ETH,\u6216\u8005\u8FD9\u4E2A\u5408\u7EA6\u5305\u542B\u6784\u9020\u51FD\u6570\u548Cfallback\u51FD\u6570.</p><h3 id="reference-types" tabindex="-1">reference types <a class="header-anchor" href="#reference-types" aria-hidden="true">#</a></h3><ul><li>reference types vs value types: \u5F15\u7528\u7C7B\u578B\u7684\u503C\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684\u540D\u5B57\u6539\u53D8\u3002\u503C\u7C7B\u578B\u5219\u6BCF\u6B21\u5F97\u5230\u5355\u72EC\u7684\u4E00\u4EFDcopy.</li><li>\u5305\u542Barray, structs, mappings. \u4F7F\u7528\u5F15\u7528\u7C7B\u578B\u5FC5\u987B\u8868\u660E\u5B58\u50A8\u533A\u57DF. memory(\u51FD\u6570lifetime), storage(contract lifetime), calldata</li><li>\u8D4B\u503C\u6216\u8005\u7C7B\u578B\u8F6C\u6362\u6539\u53D8\u6570\u636E\u4F4D\u7F6E\u603B\u4F1A\u5BFC\u81F4copy\u64CD\u4F5C.</li></ul><h4 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h4><p>\u56FA\u5B9A\u957F\u5EA6\u548C\u53EF\u53D8\u957F\u5EA6.</p><p>\u6CE8\u610F\u4E0E\u5176\u4ED6\u8BED\u8A00\u7684\u533A\u522B: uint[][5]:\u542B\u67095\u4E2A\u53EF\u53D8\u957F\u5EA6\u6570\u7EC4\u7684\u6570\u7EC4\u3002 bool[2][]:\u5305\u542Bparis\u7684\u52A8\u6001\u6570\u7EC4.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u56FA\u5B9A\u957F\u5EA6:</span></span>
<span class="line"><span style="color:#A6ACCD;">uint[8] array1;</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53EF\u53D8\u957F\u5EA6:</span></span>
<span class="line"><span style="color:#A6ACCD;">unit[] array4;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u521B\u5EFA\u6570\u7EC4" tabindex="-1">\u521B\u5EFA\u6570\u7EC4 <a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4" aria-hidden="true">#</a></h4><p>allocating memory Arrays: new</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">unit[] memory array8 = new uint[](5);</span></span>
<span class="line"><span style="color:#A6ACCD;">bytes memory array9 = new bytes(9);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B57\u9762\u5E38\u6570: <code>[1,2,3]</code>: solidity\u4E2D\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u6CA1\u6709\u6307\u660Etype\u7684\u65F6\u5019,\u9ED8\u8BA4\u4E3A\u6700\u5C0F\u5355\u4F4D\uFF0C\u6240\u4EE5.<code>[uint(1),2, 3]</code></p><h4 id="bytes-string" tabindex="-1">bytes, string <a class="header-anchor" href="#bytes-string" aria-hidden="true">#</a></h4><p>bytes: \u4EFB\u610F\u957F\u5EA6raw byte\u6570\u636E, string: \u4EFB\u610F\u957F\u5EA6utf-8 data. bytes, string\u4E0D\u662F\u503C\u7C7B\u578B\uFF0C\u662F\u6570\u7EC4/reference type.</p><h5 id="\u6570\u7EC4\u6210\u5458" tabindex="-1">\u6570\u7EC4\u6210\u5458 <a class="header-anchor" href="#\u6570\u7EC4\u6210\u5458" aria-hidden="true">#</a></h5><ul><li>length: memory\u6570\u636E\u7684\u957F\u5EA6\u5728\u521B\u5EFA\u540E\u5E02\u56FA\u5B9A\u7684.</li><li>push(), pop(): \u52A8\u6001\u6570\u7EC4\u548Cbytes\u6709push(), pop()</li></ul><h4 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h4><p><code>event Transfer(address indexed from, address indexed to,uint256 value)</code> indexed\u5173\u952E\u5B57.</p><h3 id="struct" tabindex="-1">struct <a class="header-anchor" href="#struct" aria-hidden="true">#</a></h3><h4 id="\u51FD\u6570\u8C03\u7528" tabindex="-1">\u51FD\u6570\u8C03\u7528: <a class="header-anchor" href="#\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a></h4><p>Error handling: Assert, Require, Revert, and Exceptions. State-reverting exceptions</p><h4 id="function-modifiers" tabindex="-1">Function modifiers: <a class="header-anchor" href="#function-modifiers" aria-hidden="true">#</a></h4><p>Declarative way to change the behaviour: eg: \u5728\u6267\u884C\u51FD\u6570\u524D\u68C0\u67E5\u67D0\u6761\u4EF6.</p><p>Free functions: \u5408\u7EA6\u5916\u5B9A\u4E49\u7684\u51FD\u6570\u662Ffree functions: \u9690\u5F0Finternal visibility. \u4EE3\u7801\u5305\u542B\u5728\u6240\u6709\u8C03\u7528\u5B83\u4EEC\u7684\u5408\u7EA6\u91CC\u9762\uFF0C\u5C31\u50CFinternal library functions.(\u7F16\u8BD1\u5668\u4F1A\u628A\u51FD\u6570\u4EE3\u7801\u6DFB\u52A0\u5728\u8C03\u7528\u5979\u4EEC\u7684\u5730\u65B9.) \u53EA\u4E0D\u8FC7\u6CA1\u6709this.</p><h4 id="special-functions-\u4E0D\u5E26function\u5173\u952E\u5B57" tabindex="-1">Special functions:(\u4E0D\u5E26function\u5173\u952E\u5B57.) <a class="header-anchor" href="#special-functions-\u4E0D\u5E26function\u5173\u952E\u5B57" aria-hidden="true">#</a></h4><p>Receive functions: receive() external payable {}, \u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u51FD\u6570: payable fallback function.</p><p>Fallback function: fallback() external [payable] {} or fallback(bytes calldata input) external [payable] returns (bytes memory output)</p><h4 id="state-variable" tabindex="-1">State variable: <a class="header-anchor" href="#state-variable" aria-hidden="true">#</a></h4><p>State visibility: public, internal, private (this.s\u8C03\u7528getter,\u800Cs\u662F\u76F4\u63A5\u8BBF\u95EEstorage)</p><p>Constant and immutable state variables: \u7F16\u8BD1\u5668\u4E0D\u4FDD\u7559storage slot. \u76F4\u63A5\u7528\u503C\u4EE3\u66FF.</p><p>Chiper than normal statevariables. \u4FDD\u7559\u4E3A32bytes. \u53EA\u652F\u6301\u503C\u7C7B\u578B\u548Cstrings.</p><p>State variable:\u7F3A\u7701storage(\u5B58\u50A8\u5728\u533A\u5757\u94FE\u4E0A.)</p><h4 id="library" tabindex="-1">Library: <a class="header-anchor" href="#library" aria-hidden="true">#</a></h4><p>\u53EA\u90E8\u7F72\u4E00\u6B21\uFF0C\u4EE3\u7801\u53EF\u4EE5\u4F7F\u7528ELEGATECALL\u590D\u7528\u3002 DELEGATECALL:code is executed in the calling contract</p><h3 id="\u7EE7\u627F\u53CAoop" tabindex="-1">\u7EE7\u627F\u53CAOOP: <a class="header-anchor" href="#\u7EE7\u627F\u53CAoop" aria-hidden="true">#</a></h3><p>Solidity: Is, \u4F7F\u7528virtual \u6765override.</p><h3 id="\u63A5\u53E3-eip165" tabindex="-1">\u63A5\u53E3 EIP165 <a class="header-anchor" href="#\u63A5\u53E3-eip165" aria-hidden="true">#</a></h3><p>\u89C4\u5219:</p><ol><li>\u4E0D\u80FD\u5305\u542B\u72B6\u6001\u53D8\u91CF</li><li>\u4E0D\u80FD\u5305\u542B\u6784\u9020\u51FD\u6570</li><li>\u4E0D\u80FD\u7EE7\u627F\u9664\u63A5\u53E3\u5916\u5176\u4ED6\u5408\u7EA6</li><li>\u6240\u6709\u51FD\u6570\u5FC5\u987B\u662Fexternal\u4E14\u4E0D\u80FD\u6709\u51FD\u6570\u4F53</li><li>\u7EE7\u627F\u63A5\u53E3\u7684\u5408\u7EA6\u5FC5\u987B\u5B9E\u73B0\u63A5\u53E3\u5B9A\u4E49\u7684\u6240\u6709\u529F\u80FD. \u63A5\u53E3\u662F\u667A\u80FD\u5408\u7EA6\u7684\u9AA8\u67B6\uFF0C\u5B9A\u4E49\u4E86\u5408\u7EA6\u7684\u529F\u80FD\u4EE5\u53CA\u5982\u4F55\u5904\u7F5A\u5B83\u4EEC\u3002</li></ol><ul><li>\u63A5\u53E3\u63D0\u4F9B\u4E86bytes4\u9009\u62E9\u5668\u4EE5\u53CA\u57FA\u4E8E\u5B83\u4EEC\u7684\u51FD\u6570\u7B7E\u540D</li><li>\u63A5\u53E3ID.</li></ul><p>ERC721 \u63A5\u53E3\u5408\u7EA6\u5B9A\u4E49\u4E863\u4E2Aevent\uFF0C9\u4E2Afunction.\u6CA1\u6709\u51FD\u6570\u4F53\u3002</p><p>ABI interface. Import Enums, Events, Try/catch, function selectors, abi.encode/decode, hashing, Yul/assembly.</p><h2 id="vue-js" tabindex="-1">Vue.js <a class="header-anchor" href="#vue-js" aria-hidden="true">#</a></h2><p>SFC(single file component), logic(js), template(HTML), style(CSS). Options API and COmposition API. Options API: a component\u2019s logic: object\u2019s option: data, methods, mounted. Object: this.</p><h3 id="case-sensitivity" tabindex="-1">Case sensitivity <a class="header-anchor" href="#case-sensitivity" aria-hidden="true">#</a></h3><p>Html tags\u548Cattributes: \u4E0D\u5206\u5927\u5C0F\u5199. VUE: Pascalcase. Props: kebab-case</p><h3 id="components-vue-instance" tabindex="-1">Components/Vue instance <a class="header-anchor" href="#components-vue-instance" aria-hidden="true">#</a></h3><p>\u6CE8\u518C: \u4F7F\u7528components option, PascalCase\u547D\u540D. \u521B\u5EFAvue instance\u7684\u4F20\u5165options\u5BF9\u8C61: data object\u21D4 instance\u2019s properties, \u9664\u4E86data properties, Vue instance\u66B4\u9732\u4E86\u4E00\u4E9B\u6709\u7528\u7684instance properties\u548C\u65B9\u6CD5.\u4EE5$\u524D\u7F00: $data, $el Vue instances: \u521D\u59CB\u5316\u6B65\u9AA4: \u6570\u636E\u89C2\u5BDF\uFF0C\u7F16\u8BD1\u6A21\u677F\uFF0C\u6302\u8F7DDOM,\u66F4\u65B0DOM.</p>`,103),o=e(`<h3 id="directive-bindings" tabindex="-1">directive bindings <a class="header-anchor" href="#directive-bindings" aria-hidden="true">#</a></h3><p>v-bind:id=\u201Dcomponent property\u201D : id attribute \u21D4 component property. Boolean bindings, \u52A8\u6001\u591A\u5C5E\u6027\u7ED1\u5B9A: v-bind=\u201Dcomponent property Component property\u4E5F\u53EF\u4EE5\u662F Dynamically Binding Multiple Attributes: v-bind=\u201DobjectOfAttrs\u201D Calling Functions: call a component-exposed method. Dynamic argument:\u5982\u679C\u4F7F\u7528\u590D\u6742\u7684dynamic argument,\u6700\u597D\u4F7F\u7528computed property Specifier: V-model: form input\u6216\u8005component\u4E4B\u95F4\u7684\u53CC\u5411\u7ED1\u5B9A. \u5C5E\u6027\u7ED1\u5B9A\u4E0E\u4E8B\u4EF6\u7ED3\u5408\u5728\u4E00\u8D77\u3002 V-bind: element attr/component props \u5230\u8868\u8FBE\u5F0F\u7684\u52A8\u6001\u7ED1\u5B9A. V-if: Watch option: Directives/arguments/dynamic arguments/modifiers V-bind, v-html, V-bind\u53EF\u4EE5\u52A0\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E26\u5192\u53F7\uFF1Av-bind:href = \u201Cproperty\u201D\u6765\u54CD\u5E94html \u5143\u7D20\u7684attribute\u7684\u66F4\u65B0. v-on\u4E5F\u53EF\u4EE5\u5E26\u53C2\u6570,\u7B80\u5199@events \u53C2\u6570\u53EF\u4EE5\u4F7F\u7528js \u8868\u8FBE\u5F0F: v-bind:[attributeName], v-on:[eventName] Directive\u7684\u53C2\u6570\u7684\u540E\u7F00: Class binding: \u53EF\u4EE5\u4F7F\u7528property, \u6216\u8005 computed property.</p><p>props, methods, computed Data option: \u7EC4\u4EF6\u72B6\u6001\u3002\u4F7F\u7528this. Top-level properties. Data option\u8FD4\u56DE\u7684\u5BF9\u8C61\u3002 Methods: this, the component instance. \u907F\u514D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u5426\u5219this \u4E0D\u8D77\u4F5C\u7528\u3002\u5728component\u2019s\u7684template\u4E2D\u4F7F\u7528\u3002 Methods VS computed properties: computed properties: cached. Methods: called each rendering.</p><p>Props: \u6CE8\u518C\u7684component\u7684attributes. Component instance\u7684\u81EA\u5DF1\u7684\u6570\u636E\u3002 One-way-down binding: prevents child components from accidentally mutating the parent\u2019s state. \u89E3\u51B3\u957Fparent chain\u95EE\u9898\u7684props drilling: provide, inject</p><p>Event handlers: Method vs inline detection:foo , method, foo()=&gt; inline emits option: Lifecycle hooks/component lifecycle hooks. Vue CLI/Vue router/ Views:\u9875\u9762 pages connected to routers Components: \u5D4C\u5165\u5230\u9875\u9762\u6216\u8005\u5176\u4ED6\u7EC4\u4EF6. &lt;a =&gt; &lt;router-link</p><p>Notes: Don\u2019t use arrow functions on an options property or callback, such as created: () =&gt; console.log(this.a) or vm.$watch(&#39;a&#39;, newValue =&gt; this.myMethod()). Since an arrow function doesn\u2019t have a this, this will be treated as any other variable and lexically looked up through parent scopes until found, often resulting in errors such as Uncaught TypeError: Cannot read property of undefined or Uncaught TypeError: this.myMethod is not a function.</p><p>Build in components: Transition, TransitionGroup, KeepAlive, Teleport,Suspense.</p><p>Vite express</p><h2 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;">Git remote show origin</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --oneline --decorate:</span></span>
<span class="line"><span style="color:#A6ACCD;">\u279C  ~ git config --global user.name</span></span>
<span class="line"><span style="color:#A6ACCD;">kongcheng1400</span></span>
<span class="line"><span style="color:#A6ACCD;">\u279C  ~ git config --global user.email</span></span>
<span class="line"><span style="color:#A6ACCD;">kongcheng1400@icloud.com</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -al ~/.ssh : id_rsa, id_rsa.pub</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh -T git@github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93.</span></span>
<span class="line"><span style="color:#A6ACCD;">git init -b main</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u914D\u7F6E\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u279C  prj1 git:(main) git remote add origin git@github.com:kongcheng1400/prj1.git</span></span>
<span class="line"><span style="color:#A6ACCD;">\u279C  prj1 git:(main) git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;">origin	git@github.com:kongcheng1400/prj1.git (fetch)</span></span>
<span class="line"><span style="color:#A6ACCD;">origin	git@github.com:kongcheng1400/prj1.git (push)</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master //\u63A8\u9001\u5230\u8FDC\u7A0B\u7684master\u5206\u652F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --delete main //\u5220\u9664\u8FDC\u7A0B\u5206\u652F.</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin master --allow-unrelated-histories</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="html-css" tabindex="-1">HTML/CSS <a class="header-anchor" href="#html-css" aria-hidden="true">#</a></h2><p>\u5DE5\u4F5C\u8FC7\u7A0B: html\u6587\u4EF6=&gt;DOM=&gt;\u8D44\u6E90(\u56FE\u7247\uFF0C\u89C6\u9891\uFF0C\u811A\u672C\uFF0C\u6837\u5F0F)=&gt;\u6E32\u67D3\u6811.</p><h3 id="selectors" tabindex="-1">selectors <a class="header-anchor" href="#selectors" aria-hidden="true">#</a></h3><p>\u5143\u7D20\u9009\u62E9\u5668, ID\u9009\u62E9\u5668(.#my-id); \u7C7B\u9009\u62E9\u5668: .my-class; \u5C5E\u6027\u9009\u62E9\u5668:<code>[type = &quot;input&quot;]</code> Comma:\u9009\u62E9\u5668\u5217\u8868.</p><ul><li>\u7A7A\u683C\uFF1A\u540E\u4EE3\u7EC4\u5408\u5668.</li><li><code>A &gt; B</code> \u76F4\u63A5\u5B50\u4EE3\u7EC4\u5408</li><li><code>A ~ B</code> \u4E00\u822C\u5144\u5F1F</li><li><code>A + B</code> \u7D27\u90BB\u5144\u5F1F</li><li>\u4F2A\u7C7B\u9009\u62E9\u5668,\u4F2A\u5143\u7D20: <code>a:hover</code>, <code>p::first-line</code>,</li></ul><h3 id="box" tabindex="-1">BOX: <a class="header-anchor" href="#box" aria-hidden="true">#</a></h3><ul><li>html\u7684\u57FA\u7840\u662F\u5143\u7D20\uFF0Ccss\u7684\u57FA\u7840\u662Fbox.</li><li>page flow,Block box, inline box.</li><li>\u63A7\u5236\u5916\u90E8\u663E\u793A\u7C7B\u578B:display:block, inline,</li><li>\u63A7\u5236\u5176\u5185\u90E8\u663E\u793A\u7C7B\u578B:display: flex/grid</li><li>\u76D2\u5B50: content box(width,height), padding box(padding),boarder box(border), Marginbox(margin)</li></ul><p>margin, border, padding, content(width, height)</p><h3 id="layout-page-flow" tabindex="-1">layout-page flow <a class="header-anchor" href="#layout-page-flow" aria-hidden="true">#</a></h3><ul><li>normal flow:</li><li>\u4F7F\u7528display\u7684\u503C\u6307\u5B9A.block, inline,</li><li>flexbox: display:flex, \u5728\u7236\u5143\u7D20\u4E0A\u8BBE\u7F6E.\u521B\u5EFA\u6A2A\u5411\u6216\u8005\u7EB5\u5411\u7684\u4E00\u7EF4\u9875\u9762\u5E03\u5C40. \u7136\u540E\u5728\u5B50\u5143\u7D20\u4E0A\u8BBE\u7F6Eflex\u5C5E\u6027.</li><li>grid</li><li>flow</li></ul><h2 id="nodejs" tabindex="-1">Nodejs <a class="header-anchor" href="#nodejs" aria-hidden="true">#</a></h2><p>NPM: npm config set registry <a href="https://registry.npm.taobao.org" target="_blank" rel="noreferrer">https://registry.npm.taobao.org</a></p>`,22);function p(c,d,h,u,g,m){return s(),i("div",null,[r,n("p",null,"Data property: \u653Ereactive state. Data component option, data() \u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61. \u5728template\u4E2D\uFF0C\u53EF\u4EE5\u5F15\u5165\u8FD4\u56DE\u5BF9\u8C61\u7684\u5C5E\u6027, \u8DEF\u5F84\uFF0C\u751A\u81F3\u811A\u672C. "+t()+"\u53EA\u7528\u4E8E\u6587\u5B57",1),o])}const f=a(l,[["render",p]]);export{y as __pageData,f as default};
