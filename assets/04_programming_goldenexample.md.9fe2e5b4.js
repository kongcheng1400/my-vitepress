import{_ as n,c as s,o as a,a as e}from"./app.c85e2818.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"solidty","slug":"solidty","link":"#solidty","children":[{"level":3,"title":"insertionSort","slug":"insertionsort","link":"#insertionsort","children":[]}]}],"relativePath":"04_programming/goldenexample.md"}'),l={name:"04_programming/goldenexample.md"},t=e(`<h2 id="solidty" tabindex="-1">solidty <a class="header-anchor" href="#solidty" aria-hidden="true">#</a></h2><h3 id="insertionsort" tabindex="-1">insertionSort <a class="header-anchor" href="#insertionsort" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function insertionSort(uint[] memory a) public pure returns(uint[] memory) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // note that uint can not take negative value</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (uint i = 1;i &lt; a.length;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">            uint temp = a[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            uint j=i;</span></span>
<span class="line"><span style="color:#A6ACCD;">            while( (j &gt;= 1) &amp;&amp; (temp &lt; a[j-1])){</span></span>
<span class="line"><span style="color:#A6ACCD;">                a[j] = a[j-1];</span></span>
<span class="line"><span style="color:#A6ACCD;">                j--;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            a[j] = temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[t];function p(i,r,c,d,C,A){return a(),s("div",null,o)}const u=n(l,[["render",p]]);export{m as __pageData,u as default};
