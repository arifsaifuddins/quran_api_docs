import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Juz, Surah, Ayah } from './Previews'

function Home() {

  const [PreJuz, setPreJuz] = useState(true)
  const [PreSurah, setPreSurah] = useState(false)
  const [PreAyah, setPreAyah] = useState(false)
  // const [PreQuraa, setPreQuraa] = useState(false)
  const [Text, setText] = useState("الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ۖ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ")

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const ayah = Math.ceil(Math.random() * 10) + 1
    const surah = Math.ceil(Math.random() * 80) + 1

    return await fetch(`https://api.quran.sutanlab.id/surah/${surah}/${ayah}`)
      .then(r => r.json())
      .then(j => {
        if (j.data) {
          setText(j.data.text.arab)
        } else {
          setText(("الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ۖ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ"))
        }
      })
  }

  const setJuz = (e) => {
    e.classList.add('border-t')
    e.nextElementSibling.classList.remove('border-t')
    e.nextElementSibling.nextElementSibling.classList.remove('border-t')
    // e.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('border-t')

    setPreJuz(true)
    setPreSurah(false)
    setPreAyah(false)
    // setPreQuraa(false)
  }

  const setSurah = (e) => {
    e.classList.add('border-t')
    e.previousElementSibling.classList.remove('border-t')
    e.nextElementSibling.classList.remove('border-t')
    // e.nextElementSibling.nextElementSibling.classList.remove('border-t')

    setPreJuz(false)
    setPreSurah(true)
    setPreAyah(false)
    // setPreQuraa(false)
  }

  const setAyah = (e) => {
    e.classList.add('border-t')
    e.previousElementSibling.previousElementSibling.classList.remove('border-t')
    e.previousElementSibling.classList.remove('border-t')
    // e.nextElementSibling.classList.remove('border-t')

    setPreJuz(false)
    setPreSurah(false)
    setPreAyah(true)
    // setPreQuraa(false)
  }

  // const setQuraa = (e) => {
  //   e.classList.add('border-t')
  //   e.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('border-t')
  //   e.previousElementSibling.previousElementSibling.classList.remove('border-t')
  //   e.previousElementSibling.classList.remove('border-t')

  //   setPreJuz(false)
  //   setPreSurah(false)
  //   setPreAyah(false)
  //   setPreQuraa(true)
  // }

  return (
    <div className="flex flex-col w-[100%] lg:w-[1000px] mx-auto mb-20 p-4 font-[tajawal]">
      <div className="flex md:h-96 h-[500px]">
        <div className="text-center m-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-10 text-[#ebebeb]"><span className="text-green-500">Quran</span> Rewayah 7 <span className="text-red-500">API</span></h1>
          <p className="font-thin sm:text-3xl md:text-4xl text-xl mt-6">An API for Seven Variations of Quran</p>
        </div>
      </div>

      <Link className="font-[arial] mt-10 mb-40 w-52 text-center mx-auto bg-green-500 hover:bg-green-700 font-semibold px-4 py-2 text-[#ebebeb] rounded-full" to="/login">Get Token <i className="ml-2 fas fa-up-right-from-square"></i></Link>

      <hr />

      <p className="font-bold text-lg sm:text-2xl md:text-3xl text-white text-center my-16 p-4 bg-slate-800 opacity-70 shadow-gray-500 shadow-sm rounded-b-lg md:mx-20 leading-10 lg:leading-loose border-t-4">{Text}</p>

      <pre className="md:w-[95%] w-[100%] mb-20 mx-auto bg-slate-800 opacity-70 rounded-b-lg text-sm text-white"><code className="lang-json">

        <div className="flex items-end font-bold bg-[#444] border-b border-white">
          <h1 className="p-3 px-4 text-sm sm:text-lg font-sans bg-white text-slate-800">Previews</h1>
          <div className="overflow-auto flex">
            <p onClick={(e) => setJuz(e.target)} className="py-2 text-xs sm:text-md border-t px-4 bg-slate-800 rounded-t-lg mx-2 cursor-pointer juz">Juz</p>
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

      <hr />

      <div className="flex flex-col sm:flex-row items-center mb-10 justify-around pt-10">
        <div className="flex items-center my-8 -ml-4 sm:ml-0 sm:text-sm md:text-base">
          <img src="https://avatars.githubusercontent.com/u/87503629?v=4" className="border-2 border-[#ebebeb] w-36 h-36 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full mr-4" alt="Arief Photo" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400">Arief Saifuddien</h1>
            <p className="text-white"><i className="mr-2 mt-2 fas fa-briefcase"></i> API Founder</p>
            <a className="font-thin text-white hover:text-white" target="_blank" href="https://github.com/saifuddien"><i className="mr-2 fab fa-github"></i> saifuddien</a>
            <p className="font-thin text-white"><i className="mr-2 fas fa-location-dot"></i> Jepara, Indonesia</p>
          </div>
        </div>
        <div className="flex items-center my-8 sm:text-sm md:text-base">
          <img src="https://avatars.githubusercontent.com/u/40214690?v=4" className="border-2 border-[#ebebeb] w-36 h-36 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full mr-4" alt="Toyin Photo" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400">Muhammad Toyin</h1>
            <p className="text-white"><i className="mr-2 mt-2 fas fa-briefcase"></i> API Co Founder</p>
            <a className="font-thin text-white hover:text-white" target="_blank" href="https://github.com/Toyin5"><i className="mr-2 fab fa-github"></i> Toyin5</a>
            <p className="font-thin text-white"><i className="mr-2 fas fa-location-dot"></i> Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="font-bold text-lg sm:text-2xl md:text-3xl text-center mt-20 text-green-500"><i>"Login, Get Token, and Do Anything..."</i></p>
    </div>
  );
}

export default Home;