import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex bg-[#101010] py-10">
      <div className="md:flex-row flex flex-col justify-between w-[100%] md:w-[1000px] mx-auto px-4">
        <div className="flex flex-col mb-16 md:text-xs lg:text-base">
          <h1 className="font-semibold text-xl mb-2">&bull; Page Links :</h1>
          <div className="flex flex-col sm:inline md:flex">
            <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/">Home</Link>
            <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/docs">Docs</Link>
            <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/quraa">Quraa</Link>
            <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/about">About</Link>
            <Link className="mt-2 font-thin hover:font-normal ml-4 hover:text-[#ebebeb]" to="/login">Get Token</Link>
          </div>
        </div>
        <div className="flex flex-col mb-16 md:text-xs lg:text-base">
          <h1 className="font-semibold text-xl mb-2">&bull; Technology :</h1>
          <p className="mt-2 font-thin ml-4 hover:text-white" ><i className="mr-2 fab fa-js-square text-yellow-500"></i> Javascript</p>
          <p className="mt-2 font-thin ml-4 hover:text-white " ><i className="mr-2 fab fa-node-js text-green-500"></i> Node JS</p>
          <p className="mt-2 font-thin ml-4 hover:text-white"><i className="mr-2 fab fa-react text-blue-500"></i> React JS</p>
        </div>
        <div className="flex flex-col mb-16 md:text-xs lg:text-base">
          <h1 className="font-semibold text-xl mb-2">&bull; Contributtor :</h1>
          <div className="flex flex-col sm:inline md:flex">
            <a className="mt-2 font-thin ml-4 hover:text-white" target="_blank" href="https://github.com/saifuddien/quran_rewayah_gui"><i className="mr-2 fab fa-github"></i> Quran Rewayah</a>
            <a className="mt-2 font-thin ml-4 hover:text-white" target="_blank" href="https://github.com/saifuddien"><i className="mr-2 fab fa-github"></i> Arief Saifuddien (Indonesia)</a>
            <a className="mt-2 font-thin ml-4 hover:text-white" target="_blank" href="https://github.com/Toyin5"><i className="mr-2 fab fa-github"></i> Muhammad Toyin (Nigeria)</a>
          </div>
          <h1 className="mt-6 ml-4"><i className="mr-2 fas fa-earth-africa"></i> Karthoum | Sudan | Africa</h1>
        </div>
        <div className="flex flex-col mb-16 md:text-xs lg:text-base items-center">
          <Link to={'/'}>
            <h1 className="text-6xl font-bold text-green-500 flex items-center"><span className="text-5xl text-slate-400 font-thin">&lt;</span> Quran<span className="text-[#ebebeb]">7 </span><span className="text-5xl text-slate-400 font-thin">&gt;</span></h1>
          </Link>
          <div className="flex mt-4">
            <h1 className="text-xl border-r border-slate-200 pr-3 mr-3">&copy; <span className="text-red-500">2022 </span>Quran7Rewayah</h1>
            <a className="text-xl hover:text-[#ebebeb]" target="_blank" href="https://github.com/saifuddien/quran_rewayah_gui"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;