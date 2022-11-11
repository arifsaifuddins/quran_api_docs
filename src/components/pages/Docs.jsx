import { Title } from "react-head";
import { Link } from "react-router-dom";

function Docs() {
  return (
    <div className="flex justify-between px-4 -mt-4 mx-auto w-[100%] lg:w-[1000px] flex-col md:flex-row font-[tajawal]">
      <Title>QuranMe API | Documentation</Title>
      <div className="flex flex-col md:w-[75%] h-[100vh] overflow-auto pt-14 pb-36 lg:pr-10 md:pr-5">
        <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-white ">Documentation :</h1>

        <h2 id="started" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Get Started</h2>

        <h3 className="mb-3">To getting an API you can graph the code below, parsing an <span className="font-bold">"endpoint"</span>, and <Link to="/login" className="text-green-500"><b><i>auth-token</i></b></Link> key in headers.</h3>
        <h3 className="mb-3">Base URL : </h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app
          </div>
        </code></pre>

        <h3 className="mb-3">You can do it with fetch <code className="text-orange-500">fetch</code>() method in javascript,</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript Fetch</h1>
          </div>

          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app/quran/&lt;endpoint&gt;'</span>, <span>{'{'}</span><br />
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

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript Axios</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-keyword text-purple-500">const</span> <span className="text-orange-500">axios</span> = <span className="hljs-built_in text-purple-500">require</span>(<span className="hljs-string text-green-500">'axios'</span>); // node js<br />
            <span className="hljs-keyword text-purple-500">import</span> <span className="text-orange-500">axios</span> <span className="hljs-keyword text-purple-500">from</span> <span className="hljs-string text-green-500">'axios'</span>; // js framework
            <br />
            <br />
            <span className="text-orange-500">axios</span>({'{'} <br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>, <br />
            <span className="ml-5 hljs-attribute text-purple-500">url</span>: <span className="hljs-string text-green-300">'https://quranme-api.vercel.app/quran/&lt;endpoint&gt;'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span><span>: </span><span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-green-300">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="hljs-function"><span className="hljs-params text-purple-500">res</span> =&gt;</span> <span className="hljs-built_in">console</span>.<span className="text-yellow-500">log</span>(<span className="hljs-params text-purple-500">res</span>.data));
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with curl <code className="text-orange-500">curl</code>() or <code className="text-orange-500">file_get_contents</code>() method in <a href="https://www.php.net" className="text-green-500">PHP</a> library</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-php">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">PHP</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="text-red-500">&lt;?php</span>
            <br /><br />
            <span className="text-gray-500">// curl()</span><br />
            $<span className="text-purple-500">curl</span> = <span className="text-orange-500">curl_init</span>(<span className="text-green-300">'https://quranme-api.vercel.app/quran/&lt;endpoint&gt;'</span>);<br /><br />
            <span className="text-orange-500">curl_setopt</span>($<span className="text-purple-500">curl</span>, CURLOPT_SSL_VERIFYPEER, <span className="text-purple-500">false</span>);<br />
            <span className="text-orange-500">curl_setopt</span>($<span className="text-purple-500">curl</span>, CURLOPT_RETURNTRANSFER, <span className="text-purple-500">true</span>);<br />
            <span className="text-orange-500">curl_setopt</span>($<span className="text-purple-500">curl</span>, CURLOPT_HTTPHEADER, [<br />
            <span className="text-green-300 ml-5">'auth-token: &lt;your token&gt;'</span><br />
            ]);<br /><br />
            $<span className="text-purple-500">res</span> = <span className="text-orange-500">curl_exec</span>($<span className="text-purple-500">curl</span>);<br />
            <span className="text-orange-500">curl_close</span>($<span className="text-purple-500">curl</span>);<br /><br />
            <span className="hljs-keyword">echo</span> $<span className="text-purple-500">res</span> . PHP_EOL;<br />
            <span className="text-orange-500">var_dump</span>(<span className="text-orange-500">json_decode</span>($<span className="text-purple-500">res</span>, <span className="text-purple-500">true</span>));
            <br /><br />
            <br /><br />
            <span className="text-gray-500">// file_get_contents()</span><br />
            $<span className="text-purple-500">context</span> = <span className="text-orange-500">stream_context_create</span>([<br />
            <span className="ml-5 text-green-300">'http'</span> ={'>'} [<br />
            <span className="ml-10 text-green-300">'method'</span> ={'>'} <span className="text-green-300">'GET'</span><br />
            <span className="ml-10 text-green-300">'header'</span> ={'>'} <span className="text-green-300">'auth-token: &lt;your token&gt;'</span><br />
            <span className="ml-5">]</span><br />
            <span>]);</span><br /><br />
            $<span className="text-purple-500">json</span> = <span className="text-orange-500">file_get_contents</span>(<span className="text-green-300">'https://quranme-api.vercel.app/quran/&lt;endpoint&gt;'</span>, <span className="text-purple-500">false</span>, $<span className="text-purple-500">context</span>);<br /><br />
            <span className="text-orange-500">var_dump</span>(<span className="text-orange-500">json_decode</span>($<span className="text-purple-500">json</span>, <span className="text-purple-500">true</span>));
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with request <code className="text-orange-500">request.get</code>() method in python library <a href="https://pypi.org/project/requests/" className="text-green-500">request</a>,</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-python">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Python</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-keyword text-purple-500">import</span> <span className="text-orange-500">request</span>
            <br />
            <br />
            <span className="hljs-attribute text-purple-500">header</span><span> = </span><span>{'{'}</span><span className=" hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-green-300">'&lt;your token&gt;'</span><span>{'}'}</span><br /> <br />
            <span className="hljs-attribute text-purple-500">resp</span> = <span className="hljs-built_in text-orange-500">request</span>.<span className="text-yellow-500">get</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app/quran/&lt;endpoint&gt;'</span>, headers=<span className="hljs-attribute text-purple-500">header</span>) <br /> <br />
            <span className="hljs-selector-class text-yellow-500">print</span>(<span className="hljs-built_in">resp</span>.<span className="text-yellow-500">json</span>())
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it with go <code className="text-orange-500">http.get</code>() method in golang library <a href="https://go.dev" className="text-green-500">go</a>,</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-go">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Go</h1>
          </div>

          <div className="overflow-auto p-2 m-2">
            <span className="hljs-keyword text-purple-500">package</span> <span className="text-gray-500">main</span>
            <br />
            <br />

            <span className="hljs-keyword text-purple-500">import</span> ( <br />
            <span className="text-green-300 ml-5">"bytes"</span><br />
            <span className="text-green-300 ml-5">"encoding/json"</span><br />
            <span className="text-green-300 ml-5">"fmt"</span><br />
            <span className="text-green-300 ml-5">"io/ioutil"</span><br />
            <span className="text-green-300 ml-5">"log"</span><br />
            <span className="text-green-300 ml-5">"net/http"</span><br />
            ) <br /><br />

            <span className="text-purple-500">func</span> <span className="text-orange-500">main</span>() {'{'}<br />
            <span className="ml-5 text-gray-500">var</span> <span className="text-purple-500">data</span> <span className="text-gray-500">map</span>[<span className="text-orange-500">string</span>]<span className="text-green-300">any</span><br /><br />
            <span className="ml-5 text-purple-500">req</span>, <span className="text-purple-500">err</span> := <span className="text-purple-500">http</span>.NewRequest(<span className="hljs-string">"<span className="text-green-300">GET</span>"</span>, <span className="text-green-300">"https://quranme-api.vercel.app/quran/&lt;endpoint&gt;"</span>, <span className="text-purple-500">nil</span>) <br />
            <span className="ml-5 text-purple-500">req</span>.Header.<span className="text-orange-500">Set</span>(<span className="text-green-300">"auth-token"</span>, <span className="text-green-300">"&lt;your token&gt;"</span>)<br /><br />

            <span className="ml-5 text-purple-500">client</span> := &amp;<span className="text-purple-500">http</span>.<span className="text-orange-500">Client</span>{'{}'} <br />
            <span className="ml-5 text-purple-500">res</span>, <span className="text-purple-500">err</span> := <span className="text-purple-500">client</span>.Do(<span className="text-purple-500">req</span>)<br /><br />

            <span className="ml-5 text-purple-500">bodyBytes</span>, <span className="text-purple-500">err</span> := ioutil.<span className="text-orange-500">ReadAll</span>(<span className="text-purple-500">res</span>.Body)<br />
            <span className="ml-5 ">json</span>.<span className="text-orange-500">Unmarshal</span>(<span className="text-purple-500">bodyBytes</span>, &amp;<span className="text-purple-500">data</span>)<br /><br />

            <span className="ml-5 ">if</span> <span className="text-purple-500">err</span> != <span className="text-purple-500">nil</span> {'{'}<br />
            <span className="ml-10 ">log</span>.<span className="text-orange-500">Fatalln</span>(<span className="text-purple-500">err</span>)<br />
            <span className="ml-5">{'}'}</span><br /><br />

            <span className="ml-5 ">defer</span> <span className="text-purple-500">res</span>.Body.<span className="text-orange-500">Close</span>()<br />
            <span className="ml-5 ">fmt</span>.<span className="text-orange-500">Println</span>(<span className="text-purple-500">data</span>)<br />
            <span>{'}'}</span><br /><br />
          </div>
        </code></pre>

        <h3 className="my-3">or you can do it too with <b>Java, Ruby, Dart</b> etc.</h3>

        <h2 id="token" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Get Token</h2>

        <h3 className="my-3">To get the <b>Token</b> you can <Link to="/login" className="text-green-500 font-bold">Login</Link> before, if you have no account, you can <Link to="/register" className="text-green-500 font-bold">Sign Up</Link> for free. and then login and generate your token. Paste on your headers.</h3>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className=" hljs-attribute text-purple-500">headers</span><span>: </span><span>{'{'}</span><br />
            <span className="ml-5 hljs-string text-green-300">'auth-token'</span><span>: </span><span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span >{'}'}</span><br />
          </div>
        </code></pre>

        <h2 id="juz" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Juz Of Quran</h2>

        <h3 className="my-3">To get <b>One Juz of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/quran/juz/{'<number-of-juz>'}</code></pre> on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app<b className="text-red-500">/quran/juz/2</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app<b className="text-red-500">/quran/juz/2</b>'</span>, <span>{'{'}</span><br />
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

        <h3 className="my-3">To get <b>All Surah of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/quran/surah</code></pre> on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app<b className="text-red-500">/quran/surah</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app<b className="text-red-500">/quran/surah</b>'</span>, <span>{'{'}</span><br />
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

        <h3 className="my-3">To get <b>One Surah of Quran</b> you can parsing a parameter <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">/quran/surah/{'<number-of-surah>'}</code></pre> on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app<b className="text-red-500">/quran/surah/2</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app<b className="text-red-500">/quran/surah/2</b>'</span>, <span>{'{'}</span><br />
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
          <div className="overflow-auto p-2">
            /quran/ayah/{'<number-of-ayah>?surah=<number-of-surah>'}
          </div>
        </code></pre>

        <pre className="my-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app<b className="text-red-500">/quran/ayah/2?surah=7</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app<b className="text-red-500">/quran/ayah/2?surah=7</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>


        {/* <h2 id="quraa" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting Quraa Of Rewayah 7</h2>

        <h3 className="my-3">To get <b>Quraa Of Rewayah 7</b> you can parsing a parameter on the base url.</h3>

        <pre className="mb-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app<b className="text-red-500">/quraa/qari</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app<b className="text-red-500">/quraa/qari</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre>


        <h2 id="quraa" className="pt-20 mb-5 font-bold text-xl text-red-500"><div className="text-white inline mr-2">&bull;</div> Getting One Qari Of Rewayah 7</h2>

        <h3 className="my-3">To get <b>One Qari Of Rewayah 7</b> you can parsing a parameters and specify index of qari on the base url.</h3>

        <pre className="inline px-2 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            /quraa/qari/{'<number-of-qari>'}
          </div>
        </code></pre>

        <pre className="my-3 bg-slate-800 opacity-70 rounded-lg text-sm text-white"><code className="lang-javascript">
          <div className="overflow-auto p-2">
            https://quranme-api.vercel.app<b className="text-red-500">/quraa/qari/3</b>
          </div>
        </code></pre>

        <pre className="w-[100%] bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-javascript">
          <div className="flex items-end font-bold bg-[#444] border-b border-white">
            <h1 className="p-2 px-4 text-md  font-sans bg-white text-slate-800">Javascript</h1>
          </div>
          <div className="overflow-auto p-2 m-2">
            <span className="hljs-selector-tag text-orange-500">fetch</span>(<span className="hljs-string text-green-300">'https://quranme-api.vercel.app<b className="text-red-500">/quraa/qari/3</b>'</span>, <span>{'{'}</span><br />
            <span className="ml-5 hljs-attribute text-purple-500">method</span>: <span className="hljs-string text-green-300">'GET'</span>,<br />
            <span className="ml-5 hljs-attribute text-purple-500">headers</span>: <span>{'{'}</span><br />
            <span className="ml-10 hljs-string text-green-300">'auth-token'</span>: <span className="hljs-string text-red-500">'&lt;your token&gt;'</span><br />
            <span className="ml-5">{'}'}</span><br />
            {'}'})<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">res</span> =&gt; <span className="text-purple-500">res</span>.<span className="text-yellow-500">json</span>())<br />
            <span className="hljs-selector-class ml-5 text-yellow-500">.then</span>(<span className="text-purple-500">result</span> =&gt; console.<span className="text-yellow-500">log</span>(<span className="text-purple-500">result</span>))
          </div>
        </code></pre> */}

      </div>
      <div className="hidden md:flex flex-col md:ml-5 pb-20 -mt-24">
        <h1 className="font-semibold text-2xl mb-2 mt-52 pr-5 py-3 border-y border-slate-400 text-green-500">Navigations :</h1>
        <a href="#started" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Get Started</a>
        <a href="#token" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Get Token</a>
        <a href="#juz" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Juz Of Quran</a>
        <a href="#surah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">All Surah Of Quran</a>
        <a href="#onesurah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Surah Of Quran</a>
        <a href="#oneayah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Ayah Of Surah</a>
        {/* <a href="#quraa" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Quraa Of Rewayah 7</a>
        <a href="#oneqari" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">One Quraa Of Rewayah 7</a> */}
      </div>
    </div>
  );
}

export default Docs;