import { useState } from "react";
import { Link } from "react-router-dom";
import { Juz, Surah, Ayah } from './Previews'

function Home() {

  const [PreJuz, setPreJuz] = useState(true)
  const [PreSurah, setPreSurah] = useState(false)
  const [PreAyah, setPreAyah] = useState(false)

  const setJuz = (e) => {
    e.classList.add('border-t-2', 'text-green-500', 'border-green-500')
    e.nextElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
    e.nextElementSibling.nextElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
    // e.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')

    setPreJuz(true)
    setPreSurah(false)
    setPreAyah(false)
    // setPreQuraa(false)
  }

  const setSurah = (e) => {
    e.classList.add('border-t-2', 'text-green-500', 'border-green-500')
    e.previousElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
    e.nextElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
    // e.nextElementSibling.nextElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')

    setPreJuz(false)
    setPreSurah(true)
    setPreAyah(false)
    // setPreQuraa(false)
  }

  const setAyah = (e) => {
    e.classList.add('border-t-2', 'text-green-500', 'border-green-500')
    e.previousElementSibling.previousElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
    e.previousElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
    // e.nextElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')

    setPreJuz(false)
    setPreSurah(false)
    setPreAyah(true)
    // setPreQuraa(false)
  }

  // const setQuraa = (e) => {
  //   e.classList.add('border-t-2', 'text-green-500', 'border-green-500')
  //   e.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
  //   e.previousElementSibling.previousElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')
  //   e.previousElementSibling.classList.remove('border-t-2', 'text-green-500', 'border-green-500')

  //   setPreJuz(false)
  //   setPreSurah(false)
  //   setPreAyah(false)
  //   setPreQuraa(true)
  // }

  return (
    <div className="flex flex-col w-[100%] lg:w-[1000px] mx-auto mb-20 p-4 font-[tajawal]">
      <div className="flex md:h-96 h-[500px]">
        <div className="text-center m-auto">
          <h1 className="text-6xl lg:text-7xl font-bold mt-10 text-[#ebebeb]"><span className="text-green-500">A Simply</span> Quran <span className="text-red-500">API</span></h1>
          <p className="sm:text-3xl md:text-4xl text-xl mt-6">"Login, Get Token, and Do Anything..."</p>
        </div>
      </div>

      <div className="flex mx-auto mb-52 gap-6 flex-col sm:flex-row ">
        <Link className="font-[arial] md:w-52 w-72 text-center mx-auto bg-gradient-to-r from-green-500 hover:scale-105 to-yellow-500 hover:to-green-700 hover:from-orange-400 font-semibold px-4 py-2 text-[#ebebeb] rounded-lg" to="/login">Get Token <i className="ml-2 fas fa-up-right-from-square"></i></Link>
        <Link className="font-[arial] md:w-52 w-72 text-center mx-auto border border-green-500 hover:scale-105 font-semibold px-4 py-2 text-[#ebebeb] rounded-lg" to="/docs">Docs <i className="ml-2 fas fa-book"></i></Link>
      </div>

      <pre className="w-[100%] mb-20 mx-auto bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-json">

        <div className="flex items-end font-bold bg-[#444] border-b border-white">
          <h1 className="p-3 px-4 text-sm sm:text-lg font-sans bg-white text-slate-800">Previews</h1>
          <div className="overflow-auto flex">
            <p onClick={(e) => setJuz(e.target)} className="py-2 text-xs sm:text-md border-t-2 border-green-500 text-green-500 px-4 bg-slate-800 rounded-t-lg mx-2 cursor-pointer juz">Juz</p>
            <p onClick={(e) => setSurah(e.target)} className="py-2 text-xs sm:text-md px-4 bg-slate-800 rounded-t-lg mr-2 cursor-pointer surah">Surah</p>
            <p onClick={(e) => setAyah(e.target)} className="py-2 text-xs sm:text-md px-4 bg-slate-800 rounded-t-lg cursor-pointer ayah">Ayah</p>
            {/* <p onClick={(e) => setQuraa(e.target)} className="py-2 text-xs sm:text-md px-4 mx-2 bg-slate-800 rounded-t-lg cursor-pointer ayah">Quraa</p> */}
          </div>
        </div>

        {PreJuz == true && <Juz />}
        {PreSurah == true && <Surah />}
        {PreAyah == true && <Ayah />}
        {/* {PreQuraa == true && <Quraa />} */}
      </code></pre>

      <div className="flex flex-col md:flex-row mb-10 justify-between py-24 my-8 sm:ml-0 sm:text-sm md:text-base">
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-[#ebebeb]">Arief Saifuddien</h1>
          <p className="my-6 text-2xl">
            <a target="_blank" href="https://wa.me/+249121208279"><i className="fab text-green-500 fa-whatsapp mr-3"></i></a>
            <a target="_blank" href="https://facebook.com/ariefsaifuddien01"><i className="fab text-blue-700 fa-facebook mx-3"></i></a>
            <a target="_blank" href="https://twitter.com/ariefsaifuddien"><i className="fab text-blue-500 fa-twitter mx-3"></i></a>
            <a target="_blank" href="https://instagram.com/ariefsaifuddien"><i className="fab text-pink-500 fa-instagram mx-3"></i></a>
            <a target="_blank" href="mailto:ariefsaifuddien01@gmail.com"><i className="fab text-red-500 fas fa-envelope mx-3"></i></a>
            <a target="_blank" href="https://github.com/ariefsaifuddien"><i className="fab fa-github mx-3"></i></a>
          </p>
          <p className="text-white text-lg" ><i className="mr-2 fas fa-home"></i> Khartoum, Sudan | IUA</p>
          <p className="text-white text-lg" ><i className="mr-2 mt-2 fas fa-briefcase"></i> API Founder</p>
          <p className="text-white text-lg" ><i className="mr-2 fas fa-location-dot"></i> Jepara, Indonesia</p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/87503629?v=4" className="md:w-96 rounded-xl mt-32 md:rotate-6 md:hover:rotate-0 transition" alt="Arief Photo" />
      </div>
    </div>
  );
}

export default Home;