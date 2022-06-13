function About() {
  return (
    <div className="flex flex-col mx-auto w-[1000px] mb-20">
      <div className="flex justify-between px-4 py-10 ">
        <div className="flex flex-col w-[70%]">
          <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-green-500 ">About API Rewayah :</h1>
          <p className="mt-4 first-letter:ml-10">Hello Everybody!, This is an API for <span className="text-green-500">Seven Rewayah of Quran Kareem</span>, This made couse i haven't see someone create an API like this, then i am starting to think if i can make it as API for anyone can get it easly, and i am named it <span className="text-red-500 font-bold italic">"Quran Rewayah 7"</span>.</p>
          <p className="mt-4 first-letter:ml-10">So, i am <a className="text-green-500" href="https://github.com/saifuddien">Arief Saifuddien</a> from Jepara, Indonesia. I am a Student for <span className="font-bold italic">Islamic Studies</span> at International University of Africa Sudan <a href="https://iua.edu.sd" className="text-green-500 ">(IUA)</a>. I am made it actually not alone, but with my friend <a className="text-green-500" href="https://github.com/Toyin5">Muhammad Toyin</a> from Lagos, Nigeria. He is a Student for <span className="font-bold italic">Computer Science</span> at <a href="https://iua.edu.sd" className="text-green-500 ">(IUA)</a> too.</p>
          <p className="mt-6 font-bold italic">Thanks for visitting us!. Give us start, and support us for anything...</p>
        </div>
        <div className="flex flex-col ml-10">
          <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-green-500">API Made With :</h1>
          <p className="mt-4" ><i className="mr-2 text-red-500 fab fa-html5"></i> HTML</p>
          <p className="mt-2" ><i className="mr-2 text-blue-800 fab fa-css3-alt"></i> CSS</p>
          <p className="mt-2" ><i className="mr-2 text-blue-500 fab fa-css3-alt"></i> Tailwind</p>
          <p className="mt-2" ><i className="mr-2 text-yellow-500 fab fa-js-square"></i> Javascript</p>
          <p className="mt-2" ><i className="mr-2 text-green-500 fab fa-node-js"></i> Node JS</p>
          <p className="mt-2" ><i className="mr-2 text-white fab fa-node-js"></i> Express JS</p>
          <p className="mt-2"><i className="mr-2 text-blue-500 fab fa-react"></i> React JS</p>
        </div>
      </div>
      <div className="px-4 my-20">
        <h1 className="font-semibold text-center text-2xl mb-2 pb-3 border-b border-slate-400 text-green-500">API Members :</h1>
        <div className="flex justify-between pt-10 px-4">
          <div className="flex items-center">
            <img src="/images/arief.jpg" className="border-2 border-[#ebebeb] w-40 h-40 rounded-full mr-4" alt="Arief Photo" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400">Arief Saifuddien</h1>
              <p><i class="mr-2 mt-2 fas fa-briefcase"></i> API Founder</p>
              <p className="font-thin"><i class="fas fa-swatchbook mr-2 mt-2"></i> Islamic Studies</p>
              <p className="font-thin"><i class="fas fa-hotel mr-2 mt-2"></i> International University of Africa</p>
              <p className="font-thin"><i className="mr-2 fas fa-location-dot"></i> Jepara, Indonesia</p>
              <a className="font-thin hover:text-white" target="_blank" href="https://github.com/saifuddien"><i className="mr-2 fab fa-github"></i> saifuddien</a>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/images/toyin.jpg" className="border-2 border-[#ebebeb] w-40 h-40 rounded-full mr-4" alt="Toyin Photo" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400">Muhammad Toyin</h1>
              <p ><i class="mr-2 mt-2 fas fa-briefcase"></i> API Co Founder</p>
              <p className="font-thin"><i class="fas fa-swatchbook mr-2 mt-2"></i> Computer Science</p>
              <p className="font-thin"><i class="fas fa-hotel mr-2 mt-2"></i> International University of Africa</p>
              <p className="font-thin"><i className="mr-2 fas fa-location-dot"></i> Lagos, Nigeria</p>
              <a className="font-thin hover:text-white" target="_blank" href="https://github.com/Toyin5"><i className="mr-2 fab fa-github"></i> Toyin5</a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-20">
        <h1 className="font-semibold text-center text-2xl mb-2 pb-3 border-b border-slate-400 text-green-500">Message Me :</h1>
        <form className="w-[100%] py-10">
          <input required type="text" placeholder="Input Your Name..." className="mt-2 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
          <input required type="email" placeholder="Input Your Email..." className="mt-2 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
          <textarea required placeholder="Input Message..." className="mt-5 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
          <button className="mt-12 bg-[#3700b3] text-white py-2 pl-3 rounded-full text-lg hover:bg-[#3c217c] font-bold w-[100%]" >Send An Email</button>
        </form>
      </div>
    </div>
  );
}

export default About;