import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex bg-[#101010] py-20 border-t-4 border-green-500">
        <div className="md:flex-row flex flex-col justify-between w-[100%] md:w-[1000px] mx-auto px-4">
          <div className="flex flex-col mb-16 md:text-xs lg:text-base">
            <h1 className="font-semibold text-xl mb-2">&bull; Page Links</h1>
            <div className="flex flex-col sm:inline md:flex">
              <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/">Home</Link>
              <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/docs">Docs</Link>
              <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/quraa">Quraa</Link>
              <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/about">About</Link>
              <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/login">Get Token</Link>
            </div>
          </div>
          <div className="flex flex-col mb-16 md:text-xs lg:text-base">
            <h1 className="font-semibold text-xl mb-2">&bull; Explore</h1>
            <a className="mt-2 font-thin ml-4 hover:text-white" target="_blank" href="https://github.com/ariefsaifuddien/quran_api_docs"><i className="mr-2 fab fa-github"></i> Quran Me</a>
            <a className="mt-2 font-thin ml-4 hover:text-white" target="_blank" href="https://github.com/ariefsaifuddien"><i className="mr-2 fab fa-github"></i> Arief Saifuddien</a>
          </div>
          <div className="flex flex-col mb-16 md:text-xs lg:text-base">
            <h1 className="font-semibold text-xl mb-2">&bull; Technology</h1>
            <p className="mt-2 font-thin ml-4"><i className="mr-2 text-red-500 fab fa-html5"></i> HTML</p>
            <p className="mt-2 font-thin ml-4"><i className="mr-2 text-blue-800 fab fa-css3-alt"></i> CSS</p>
            <p className="mt-2 font-thin ml-4" ><i className="mr-2 fab fa-js-square text-yellow-500"></i> Javascript</p>
            <p className="mt-2 font-thin ml-4 " ><i className="mr-2 fab fa-node-js text-green-500"></i> Node JS</p>
          </div>
          <div className="flex flex-col md:text-xs lg:text-base items-center">
            <Link to={'/'}>
              <h1 className="text-5xl font-bold text-green-500 flex items-center"><span className="text-5xl text-slate-400 font-thin">&lt;</span> Quran<span className="text-[#ebebeb]">Me </span><span className="text-5xl text-slate-400 font-thin">&gt;</span></h1>
            </Link>
            <h1 className="text-lg my-4">&copy; <span className="text-red-500">2022 </span>QuranMe API</h1>
          </div>
        </div>
      </div>
      <h1 className="text-center py-4 bg-[#222] font-bold">IUA | Khartoum | Sudan | Africa</h1>
    </>
  );
}

export default Footer;