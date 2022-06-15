import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ admin }) {

  const [Admin, setAdmin] = useState(false)

  useEffect(() => {
    setAdmin(admin)
  })

  const active = ({ isActive }) => {
    return {
      color: isActive ? 'white' : 'rgb(148 163 184)',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
    <div className="fixed top-0 right-0 left-0 bg-[#343434] z-30">
      <div className="flex justify-between items-center w-[100%] lg:w-[1000px] mx-auto lg:h-16 h-14 px-4">
        <Link to={'/'}>
          <h1 className="text-4xl font-bold text-green-500 flex items-center"><span className="text-3xl text-slate-400 font-thin">&lt;</span> Quran<span className="text-[#ebebeb]">7 </span><span className="text-3xl text-slate-400 font-thin">&gt;</span></h1>
        </Link>
        <div className="flex max-w-max justify-between items-center">
          <NavLink style={active} className="mx-3 hidden md:flex" to="/"><i className="fas fa-home"></i></NavLink>
          <NavLink style={active} className="mx-3 hidden md:flex" to="/docs">Docs</NavLink>
          <NavLink style={active} className="mx-3 hidden md:flex" to="/quraa">Quraa</NavLink>
          <NavLink style={active} className="mx-3 hidden md:flex" to="/about">About</NavLink>
          {
            Admin === true && <NavLink style={active} className="mx-3 md:flex" to="/fields">Admin</NavLink>
          }
          <Link className="mx-3 hidden md:flex bg-green-500 hover:bg-green-700 font-semibold px-3 text-[#ebebeb] rounded-full" to="/login">Get Token</Link>
          <a className="ml-3 text-xl text-[#ebebeb]" target="_blank" href="https://github.com/saifuddien/quran_rewayah_gui"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="w-[100%] bg-[#444444] py-2 md:hidden flex">
        <div className="flex max-w-max mx-auto justify-between items-center">
          <NavLink style={active} className="mr-2" to="/"><i className="fas fa-home"></i></NavLink>
          <NavLink style={active} className="mx-2" to="/docs">Docs</NavLink>
          <NavLink style={active} className="mx-2" to="/quraa">Quraa</NavLink>
          <NavLink style={active} className="mx-2" to="/about">About</NavLink>
          <Link className="ml-2 bg-green-500 hover:bg-green-700 font-semibold px-3 text-[#ebebeb] rounded-full" to="/login">Get Token</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;