import { Link } from "react-router-dom";

function Docs() {
  return (
    <div className="flex justify-between px-4 -mt-4 mx-auto w-[1000px]">
      <div className="flex flex-col w-[75%] h-[100vh] overflow-scroll pt-14 pb-36 pr-10">
        <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-white ">Documentation :</h1>

        <h2 id="started" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Get Started</h2>

        <h3 className="mb-3">To getting an API you can graph the code below, parsing an <span className="font-bold">"endpoint"</span>, and <Link to="/login" className="text-green-500"><b><i>auth-token</i></b></Link> key in headers.</h3>
        <h3 className="mb-3">Base URL : </h3>

        <pre className="mb-3  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            https://quran-rewayah-api.vercel.app/api/quran-rewayah
          </div>
        </code></pre>

        <h3 className="mb-3">You can do it with fetch <code className="text-orange-500">fetch</code>() method in javascript,</h3>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah/&lt;endpoint&gt;'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-green-300">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with axios <code className="text-orange-500">axios</code>() method in javascript library <a href="https://www.npmjs.com/package/axios" className="text-green-500">axios</a>,</h3>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className="hljs-keyword text-purple-500">const</span> <span className="text-orange-500">axios</span> = <span className="hljs-built_in text-purple-500">require</span>(<span className="hljs-string text-green-500">'axios'</span>); // node js<br />
            <span className="hljs-keyword text-purple-500">import</span> <span className="text-orange-500">axios</span> <span className="hljs-keyword text-purple-500">from</span> <span className="hljs-string text-green-500">'axios'</span>; // js framework
            <br />
            <br />
            <span className="text-orange-500">axios</span>({'{'} <br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>, <br />
            <span className="ml-5 hljs-attribute text-purple-500">url</span>: <span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah/&lt;endpoint&gt;'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span><span>: </span><span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-green-300">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="hljs-function"><span className="hljs-params text-purple-500">res</span> =&gt;</span> <span className="hljs-built_in">console</span>.<span className="text-yellow-500">log</span>(<span className="hljs-params text-purple-500">res</span>.data));
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with <b>PHP, Python, Java, Ruby,</b> etc.</h3>

        <h2 id="token" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Get Token</h2>

        <h3 className="my-3">To get the <b>Token</b> you can <Link to="/login" className="text-green-500 font-bold">Login</Link> before, if you have no account, you can <Link to="/register" className="text-green-500 font-bold">Sign Up</Link> for free. and then login and generate your token. Paste on your headers.</h3>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className=" hljs-attribute text-purple-500">headers</span><span>: </span><span>{'{'}</span><br />
            <span className="ml-5 hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span >{'}'}</span><br />
          </div>
        </code></pre>

        <h2 id="juz" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Juz Of Quran</h2>

        <h3 className="my-3">To get <b>One Juz of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/juz/{'<number-of-juz>'}</code></pre> on the base url.</h3>

        <pre className="mb-3  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/juz/2</b>
          </div>
        </code></pre>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/juz/2</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h2 id="surah" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting All Surah Of Quran</h2>

        <h3 className="my-3">To get <b>All Surah of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/surah</code></pre> on the base url.</h3>

        <pre className="mb-3  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/surah</b>
          </div>
        </code></pre>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/surah</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h2 id="onesurah" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Surah Of Quran</h2>

        <h3 className="my-3">To get <b>One Surah of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/surah/{'<number-of-surah>'}</code></pre> on the base url.</h3>

        <pre className="mb-3  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/surah/2</b>
          </div>
        </code></pre>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/surah/2</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

        <h2 id="oneayah" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Ayah Of Surah in Quran</h2>

        <h3 className="my-3">To get <b>One Ayah Of Surah in Quran</b> you can parsing a parameter and query on the base url.</h3>

        <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            /ayah/{'<number-of-ayah>?surah=<number-of-surah>'}
          </div>
        </code></pre>

        <pre className="my-3  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/ayah/2?surah=7</b>
          </div>
        </code></pre>

        <pre className="w-[100%]  p-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-scroll">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quran-rewayah-api.vercel.app/api/quran-rewayah<b className="text-red-500">/ayah/2?surah=7</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>

      </div>
      <div className="flex flex-col ml-10 py-14">
        <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-white">Navigation Links :</h1>
        <a href="#started" className=" mt-5 hover:text-white text-md">Get Started</a>
        <a href="#token" className=" mt-5 hover:text-white text-md">Get Token</a>
        <a href="#juz" className=" mt-5 hover:text-white text-md">One Juz Of Quran</a>
        <a href="#surah" className=" mt-5 hover:text-white text-md">All Surah Of Quran</a>
        <a href="#onesurah" className=" mt-5 hover:text-white text-md">One Surah Of Quran</a>
        <a href="#oneayah" className=" mt-5 hover:text-white text-md">One Ayah Of Surah in Quran</a>
      </div>
    </div>
  );
}

export default Docs;