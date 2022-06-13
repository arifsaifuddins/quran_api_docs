import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {

  const [Admin, setAdmin] = useState(false)

  const active = ({ isActive }) => {
    return {
      color: isActive ? 'white' : 'rgb(148 163 184)',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
    <div className="fixed top-0 right-0 left-0 bg-[#343434] z-30">
      <div className="flex justify-between items-center w-[1000px] mx-auto h-16">
        <Link to={'/'}>
          <h1 className="text-4xl font-bold text-green-500 flex items-center"><span className="text-3xl text-slate-400 font-thin">&lt;</span> Quran<span className="text-[#ebebeb]">7 </span><span className="text-3xl text-slate-400 font-thin">&gt;</span></h1>
        </Link>
        <div className="flex max-w-max justify-between items-center">
          <NavLink style={active} className="mx-3" to="/">Home</NavLink>
          <NavLink style={active} className="mx-3" to="/docs">Docs</NavLink>
          {/* <NavLink style={active} className="mx-3" to="/rewayah">Rewayah</NavLink> */}
          <NavLink style={active} className="mx-3" to="/about">About</NavLink>
          {
            Admin === true && <NavLink style={active} className="mx-3" to="/fields">Admin</NavLink>
          }
          <Link className="mx-3 bg-green-500 hover:bg-green-700 font-semibold px-3 text-[#ebebeb] rounded-full" to="/login">Get Token</Link>
          <a className="ml-3 text-xl hover:text-[#ebebeb]" target="_blank" href="https://github.com/saifuddien/quran_rewayah_gui"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Header;