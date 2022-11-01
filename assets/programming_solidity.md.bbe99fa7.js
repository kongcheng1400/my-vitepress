import{_ as e,c as a,o as n,a as l}from"./app.bee55a57.js";const b=JSON.parse('{"title":"Solidity","description":"","frontmatter":{},"headers":[{"level":2,"title":"specifiers:","slug":"specifiers","link":"#specifiers","children":[{"level":3,"title":"\u51FD\u6570\u4FEE\u9970\u7B26:","slug":"\u51FD\u6570\u4FEE\u9970\u7B26","link":"#\u51FD\u6570\u4FEE\u9970\u7B26","children":[]},{"level":3,"title":"\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF:","slug":"\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF","link":"#\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF","children":[]},{"level":3,"title":"visibility","slug":"visibility","link":"#visibility","children":[]},{"level":3,"title":"modifier/\u6784\u9020\u51FD\u6570","slug":"modifier-\u6784\u9020\u51FD\u6570","link":"#modifier-\u6784\u9020\u51FD\u6570","children":[]}]},{"level":2,"title":"reference types","slug":"reference-types","link":"#reference-types","children":[{"level":3,"title":"\u6570\u7EC4","slug":"\u6570\u7EC4","link":"#\u6570\u7EC4","children":[]},{"level":3,"title":"\u521B\u5EFA\u6570\u7EC4","slug":"\u521B\u5EFA\u6570\u7EC4","link":"#\u521B\u5EFA\u6570\u7EC4","children":[]},{"level":3,"title":"bytes, string","slug":"bytes-string","link":"#bytes-string","children":[]},{"level":3,"title":"\u6570\u7EC4\u6210\u5458","slug":"\u6570\u7EC4\u6210\u5458","link":"#\u6570\u7EC4\u6210\u5458","children":[]}]},{"level":2,"title":"event","slug":"event","link":"#event","children":[]},{"level":2,"title":"struct","slug":"struct","link":"#struct","children":[]},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570","link":"#\u51FD\u6570","children":[{"level":3,"title":"Function modifiers:","slug":"function-modifiers","link":"#function-modifiers","children":[]},{"level":3,"title":"Special functions:(\u4E0D\u5E26function\u5173\u952E\u5B57.)","slug":"special-functions-\u4E0D\u5E26function\u5173\u952E\u5B57","link":"#special-functions-\u4E0D\u5E26function\u5173\u952E\u5B57","children":[]},{"level":3,"title":"State variable:","slug":"state-variable","link":"#state-variable","children":[]}]},{"level":2,"title":"Library:","slug":"library","link":"#library","children":[{"level":3,"title":"\u7EE7\u627F\u53CAOOP:","slug":"\u7EE7\u627F\u53CAoop","link":"#\u7EE7\u627F\u53CAoop","children":[]},{"level":3,"title":"\u63A5\u53E3 EIP165","slug":"\u63A5\u53E3-eip165","link":"#\u63A5\u53E3-eip165","children":[]}]},{"level":2,"title":"\u7279\u6B8A\u51FD\u6570","slug":"\u7279\u6B8A\u51FD\u6570","link":"#\u7279\u6B8A\u51FD\u6570","children":[{"level":3,"title":"error handling","slug":"error-handling","link":"#error-handling","children":[]},{"level":3,"title":"\u63A5\u6536ETH","slug":"\u63A5\u6536eth","link":"#\u63A5\u6536eth","children":[]},{"level":3,"title":"send ETH","slug":"send-eth","link":"#send-eth","children":[]},{"level":3,"title":"library","slug":"library-1","link":"#library-1","children":[]}]}],"relativePath":"programming/solidity.md"}'),s={name:"programming/solidity.md"},i=l(`<h1 id="solidity" tabindex="-1">Solidity <a class="header-anchor" href="#solidity" aria-hidden="true">#</a></h1><h2 id="specifiers" tabindex="-1">specifiers: <a class="header-anchor" href="#specifiers" aria-hidden="true">#</a></h2><h4 id="solidity-\u51FD\u6570" tabindex="-1">Solidity:\u51FD\u6570. <a class="header-anchor" href="#solidity-\u51FD\u6570" aria-hidden="true">#</a></h4><h3 id="\u51FD\u6570\u4FEE\u9970\u7B26" tabindex="-1">\u51FD\u6570\u4FEE\u9970\u7B26: <a class="header-anchor" href="#\u51FD\u6570\u4FEE\u9970\u7B26" aria-hidden="true">#</a></h3><p>State\u53EF\u89C1\u884C: public, internal, private. \u51FD\u6570\u7C7B\u578B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function &lt;function name&gt;(&lt;parameter types&gt;) {internal|external|public|private} [pure|view|payable] [returns (&lt;return types&gt;)]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6CE8\u610Freturns, return\u7684\u533A\u522B.</p><h3 id="\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" tabindex="-1">\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF: <a class="header-anchor" href="#\u6570\u636E\u4F4D\u7F6E\u548C\u53D8\u91CF\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h3><p>storage, memory, calldata</p><p>\u5408\u7EA6\u5185\u51FD\u6570\u5916\u53EF\u4EE5\u4E0D\u5199\u4F4D\u7F6E\uFF0C\u7F3A\u7701\u4E3A\u72B6\u6001\u53D8\u91CF, storage. \u51FD\u6570\u5185\u53EF\u4EE5\u4E0D\u5199\u4F4D\u7F6E\uFF0C\u7F3A\u7701\u4E3Amemory.</p><p>state variable, local variable, global variable.</p><ul><li>local variable:\u51FD\u6570\u5185\u58F0\u660E, \u5C40\u90E8\u53D8\u91CF.</li><li>state variable: \u5408\u7EA6\u5185\uFF0C\u51FD\u6570\u5916.</li><li>global variable: solidity \u9884\u7559\u7684\u5173\u952E\u5B57. msg.sender, block.number, msg.data.</li></ul><h3 id="visibility" tabindex="-1">visibility <a class="header-anchor" href="#visibility" aria-hidden="true">#</a></h3><p>\u7F3A\u7701\u60C5\u51B5\u4E0B\u4E3Ainternal\uFF1B\u5408\u7EA6\u5185\u7684\u51FD\u6570\u5FC5\u987B\u660E\u786E\u53EF\u89C1\u6027\uFF1A</p><p>External/Public\u51FD\u6570\u6709\u4E24\u4E2A\u6210\u5458\uFF1A.address, .selector</p><p>Function Visibility specifiers: public, private, external, internal(\u76F8\u5BF9\u4E8Econtract\u6765\u8BB2.), default: internal</p><p>external(contract interface, transactions, can\u2019t be called internally-f(). this.f()\u53EF\u4EE5, only message calls), public(can callinternally or message calls), internal(\u53EF\u4EE5\u4F7F\u7528\u5185\u90E8\u53C2\u6570:\u4F8B\u5982mapping, storage\u5F15\u7528), private</p><p>Internal\u4E0Eexternal: \u5408\u7EA6\u5916\u90E8\u7684\u8C03\u7528, message call.{value: 10, gas: 10000}, payable, \u4F7F\u7528this.f()</p><p>external\u4E0Epublic\u7684\u533A\u522B:public\u53EF\u4EE5\u88AB\u5408\u7EA6\u5185\u8C03\u7528.</p><p>(stateMutability: view/pure/payable/nonpayable), stateMutability: default nonpayable</p><h3 id="modifier-\u6784\u9020\u51FD\u6570" tabindex="-1">modifier/\u6784\u9020\u51FD\u6570 <a class="header-anchor" href="#modifier-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u4FEE\u9970\u7B26:\u6743\u9650\u7BA1\u7406/require(\u5FC5\u987B\u6EE1\u8DB3\u67D0\u4E9B\u6761\u4EF6\u5426\u5219revert), modifier. \u4E24\u4E2A\u7279\u6B8A\u51FD\u6570:receive, fallback.</p><ul><li>\u8FD0\u884C\u51FD\u6570\u524D\u7684\u68C0\u67E5\uFF0C\u4F8B\u5982\u5730\u5740\uFF0C\u53D8\u91CF\uFF0C\u4F59\u989D\u7B49\u3002</li></ul><p>Payable: \u8FD9\u4E2Apublic\u51FD\u6570\u80FD\u6536ETH,\u6216\u8005\u8FD9\u4E2A\u5408\u7EA6\u5305\u542B\u6784\u9020\u51FD\u6570\u548Cfallback\u51FD\u6570.</p><h2 id="reference-types" tabindex="-1">reference types <a class="header-anchor" href="#reference-types" aria-hidden="true">#</a></h2><ul><li>reference types vs value types: \u5F15\u7528\u7C7B\u578B\u7684\u503C\u53EF\u4EE5\u901A\u8FC7\u4E0D\u540C\u7684\u540D\u5B57\u6539\u53D8\u3002\u503C\u7C7B\u578B\u5219\u6BCF\u6B21\u5F97\u5230\u5355\u72EC\u7684\u4E00\u4EFDcopy.</li><li>\u5305\u542Barray, structs, mappings. \u4F7F\u7528\u5F15\u7528\u7C7B\u578B\u5FC5\u987B\u8868\u660E\u5B58\u50A8\u533A\u57DF. memory(\u51FD\u6570lifetime), storage(contract lifetime), calldata</li><li>\u8D4B\u503C\u6216\u8005\u7C7B\u578B\u8F6C\u6362\u6539\u53D8\u6570\u636E\u4F4D\u7F6E\u603B\u4F1A\u5BFC\u81F4copy\u64CD\u4F5C.</li></ul><h3 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h3><p>\u56FA\u5B9A\u957F\u5EA6\u548C\u53EF\u53D8\u957F\u5EA6.</p><p>\u6CE8\u610F\u4E0E\u5176\u4ED6\u8BED\u8A00\u7684\u533A\u522B: uint[][5]:\u542B\u67095\u4E2A\u53EF\u53D8\u957F\u5EA6\u6570\u7EC4\u7684\u6570\u7EC4\u3002 bool[2][]:\u5305\u542Bparis\u7684\u52A8\u6001\u6570\u7EC4.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u56FA\u5B9A\u957F\u5EA6:</span></span>
<span class="line"><span style="color:#A6ACCD;">uint[8] array1;</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u53EF\u53D8\u957F\u5EA6:</span></span>
<span class="line"><span style="color:#A6ACCD;">unit[] array4;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u521B\u5EFA\u6570\u7EC4" tabindex="-1">\u521B\u5EFA\u6570\u7EC4 <a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4" aria-hidden="true">#</a></h3><p>allocating memory Arrays: new</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">unit[] memory array8 = new uint[](5);</span></span>
<span class="line"><span style="color:#A6ACCD;">bytes memory array9 = new bytes(9);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B57\u9762\u5E38\u6570: <code>[1,2,3]</code>: solidity\u4E2D\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u6CA1\u6709\u6307\u660Etype\u7684\u65F6\u5019,\u9ED8\u8BA4\u4E3A\u6700\u5C0F\u5355\u4F4D\uFF0C\u6240\u4EE5.<code>[uint(1),2, 3]</code></p><h3 id="bytes-string" tabindex="-1">bytes, string <a class="header-anchor" href="#bytes-string" aria-hidden="true">#</a></h3><p>bytes: \u4EFB\u610F\u957F\u5EA6raw byte\u6570\u636E, string: \u4EFB\u610F\u957F\u5EA6utf-8 data. bytes, string\u4E0D\u662F\u503C\u7C7B\u578B\uFF0C\u662F\u6570\u7EC4/reference type.</p><h3 id="\u6570\u7EC4\u6210\u5458" tabindex="-1">\u6570\u7EC4\u6210\u5458 <a class="header-anchor" href="#\u6570\u7EC4\u6210\u5458" aria-hidden="true">#</a></h3><ul><li>length: memory\u6570\u636E\u7684\u957F\u5EA6\u5728\u521B\u5EFA\u540E\u5E02\u56FA\u5B9A\u7684.</li><li>push(), pop(): \u52A8\u6001\u6570\u7EC4\u548Cbytes\u6709push(), pop()</li></ul><h2 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h2><p><code>event Transfer(address indexed from, address indexed to,uint256 value)</code> indexed\u5173\u952E\u5B57.</p><h2 id="struct" tabindex="-1">struct <a class="header-anchor" href="#struct" aria-hidden="true">#</a></h2><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><p>Error handling: Assert, Require, Revert, and Exceptions. State-reverting exceptions</p><h3 id="function-modifiers" tabindex="-1">Function modifiers: <a class="header-anchor" href="#function-modifiers" aria-hidden="true">#</a></h3><p>Declarative way to change the behaviour: eg: \u5728\u6267\u884C\u51FD\u6570\u524D\u68C0\u67E5\u67D0\u6761\u4EF6.</p><p>Free functions: \u5408\u7EA6\u5916\u5B9A\u4E49\u7684\u51FD\u6570\u662Ffree functions: \u9690\u5F0Finternal visibility. \u4EE3\u7801\u5305\u542B\u5728\u6240\u6709\u8C03\u7528\u5B83\u4EEC\u7684\u5408\u7EA6\u91CC\u9762\uFF0C\u5C31\u50CFinternal library functions.(\u7F16\u8BD1\u5668\u4F1A\u628A\u51FD\u6570\u4EE3\u7801\u6DFB\u52A0\u5728\u8C03\u7528\u5979\u4EEC\u7684\u5730\u65B9.) \u53EA\u4E0D\u8FC7\u6CA1\u6709this.</p><h3 id="special-functions-\u4E0D\u5E26function\u5173\u952E\u5B57" tabindex="-1">Special functions:(\u4E0D\u5E26function\u5173\u952E\u5B57.) <a class="header-anchor" href="#special-functions-\u4E0D\u5E26function\u5173\u952E\u5B57" aria-hidden="true">#</a></h3><p>Receive functions: receive() external payable {}, \u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u51FD\u6570: payable fallback function.</p><p>Fallback function: fallback() external [payable] {} or fallback(bytes calldata input) external [payable] returns (bytes memory output)</p><h3 id="state-variable" tabindex="-1">State variable: <a class="header-anchor" href="#state-variable" aria-hidden="true">#</a></h3><p>State visibility: public, internal, private (this.s\u8C03\u7528getter,\u800Cs\u662F\u76F4\u63A5\u8BBF\u95EEstorage)</p><p>Constant and immutable state variables: \u7F16\u8BD1\u5668\u4E0D\u4FDD\u7559storage slot. \u76F4\u63A5\u7528\u503C\u4EE3\u66FF.</p><p>Chiper than normal statevariables. \u4FDD\u7559\u4E3A32bytes. \u53EA\u652F\u6301\u503C\u7C7B\u578B\u548Cstrings.</p><p>State variable:\u7F3A\u7701storage(\u5B58\u50A8\u5728\u533A\u5757\u94FE\u4E0A.)</p><h2 id="library" tabindex="-1">Library: <a class="header-anchor" href="#library" aria-hidden="true">#</a></h2><p>\u53EA\u90E8\u7F72\u4E00\u6B21\uFF0C\u4EE3\u7801\u53EF\u4EE5\u4F7F\u7528ELEGATECALL\u590D\u7528\u3002 DELEGATECALL:code is executed in the calling contract</p><h3 id="\u7EE7\u627F\u53CAoop" tabindex="-1">\u7EE7\u627F\u53CAOOP: <a class="header-anchor" href="#\u7EE7\u627F\u53CAoop" aria-hidden="true">#</a></h3><p>Solidity: Is, \u4F7F\u7528virtual \u6765override.</p><h3 id="\u63A5\u53E3-eip165" tabindex="-1">\u63A5\u53E3 EIP165 <a class="header-anchor" href="#\u63A5\u53E3-eip165" aria-hidden="true">#</a></h3><p>\u89C4\u5219:</p><ol><li>\u4E0D\u80FD\u5305\u542B\u72B6\u6001\u53D8\u91CF</li><li>\u4E0D\u80FD\u5305\u542B\u6784\u9020\u51FD\u6570</li><li>\u4E0D\u80FD\u7EE7\u627F\u9664\u63A5\u53E3\u5916\u5176\u4ED6\u5408\u7EA6</li><li>\u6240\u6709\u51FD\u6570\u5FC5\u987B\u662Fexternal\u4E14\u4E0D\u80FD\u6709\u51FD\u6570\u4F53</li><li>\u7EE7\u627F\u63A5\u53E3\u7684\u5408\u7EA6\u5FC5\u987B\u5B9E\u73B0\u63A5\u53E3\u5B9A\u4E49\u7684\u6240\u6709\u529F\u80FD. \u63A5\u53E3\u662F\u667A\u80FD\u5408\u7EA6\u7684\u9AA8\u67B6\uFF0C\u5B9A\u4E49\u4E86\u5408\u7EA6\u7684\u529F\u80FD\u4EE5\u53CA\u5982\u4F55\u5904\u7F5A\u5B83\u4EEC\u3002</li></ol><ul><li>\u63A5\u53E3\u63D0\u4F9B\u4E86bytes4\u9009\u62E9\u5668\u4EE5\u53CA\u57FA\u4E8E\u5B83\u4EEC\u7684\u51FD\u6570\u7B7E\u540D</li><li>\u63A5\u53E3ID.</li></ul><p>ERC721 \u63A5\u53E3\u5408\u7EA6\u5B9A\u4E49\u4E863\u4E2Aevent\uFF0C9\u4E2Afunction.\u6CA1\u6709\u51FD\u6570\u4F53\u3002</p><h2 id="\u7279\u6B8A\u51FD\u6570" tabindex="-1">\u7279\u6B8A\u51FD\u6570 <a class="header-anchor" href="#\u7279\u6B8A\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="error-handling" tabindex="-1">error handling <a class="header-anchor" href="#error-handling" aria-hidden="true">#</a></h3><p>\u4E09\u79CD\u65B9\u6CD5: error, require, assert</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">error TransferNotOwner(address sender);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function transferOwner1(uint tokenId, address newOwner) public {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (_owners[tokenId] != msg.sender) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        revert TransferNotOwner();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    _owners[tokenId] = newOwner;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//require \u91CD\u5199:</span></span>
<span class="line"><span style="color:#A6ACCD;">function transerOwner2(uint256 tokenId, address newOwner) public {</span></span>
<span class="line"><span style="color:#A6ACCD;">    require(_owners[tokenId] == msg.sender, &quot;Transfer Not Owner&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    _owners[tokenId] = newOwner;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//assert:\u4E00\u822C\u7528\u4E8Edebug,\u4E0D\u80FD\u89E3\u91CA\u539F\u56E0:</span></span>
<span class="line"><span style="color:#A6ACCD;">function transferOwner3(uint256 tokenId, address newOwner) public {</span></span>
<span class="line"><span style="color:#A6ACCD;">    assert(_owners[tokenId] == msg.sender);</span></span>
<span class="line"><span style="color:#A6ACCD;">    _owners[tokenId] = newOwner;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u63A5\u6536eth" tabindex="-1">\u63A5\u6536ETH <a class="header-anchor" href="#\u63A5\u6536eth" aria-hidden="true">#</a></h3><p>receive(), fallback() <code>receive() external payable {} //\u53EA\u63A5\u6536\uFF0C\u6CA1\u6709\u6570\u636E\u7ED9\u5B83</code><code>fallback() external payable {} \u5408\u7EA6\u4E0D\u5B58\u5728\u7684\u51FD\u6570\uFF0C proxy contract//</code></p><h3 id="send-eth" tabindex="-1">send ETH <a class="header-anchor" href="#send-eth" aria-hidden="true">#</a></h3><ul><li>transfer(), send(), call()</li></ul><h3 id="library-1" tabindex="-1">library <a class="header-anchor" href="#library-1" aria-hidden="true">#</a></h3><p>\u4E0E\u666E\u901A\u5408\u7EA6\u7684\u533A\u522B:</p><p>ABI interface. Import Enums, Events, Try/catch, function selectors, abi.encode/decode, hashing, Yul/assembly.</p>`,74),r=[i];function t(c,p,o,d,h,u){return n(),a("div",null,r)}const f=e(s,[["render",t]]);export{b as __pageData,f as default};
