import { Link, NavLink } from "react-router-dom";

function Header() {

  const active = ({ isActive }) => {
    return {
      color: isActive ? 'white' : 'rgb(148 163 184)',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
    <>
      <div className="bg-[#343434] z-30 right-0 left-0 md:fixed top-0">
        <div className="flex justify-between items-center w-[100%] lg:w-[1000px] mx-auto lg:h-16 h-14 px-4">
          <Link to={'/'}>
            <h1 className="text-4xl font-bold text-green-500 flex items-center"><span className="text-3xl text-slate-400 font-thin">&lt;</span> Quran<span className="text-[#ebebeb]">Me </span><span className="text-3xl text-slate-400 font-thin">&gt;</span></h1>
          </Link>
          <div className="flex max-w-max justify-between items-center">
            <NavLink style={active} className="mx-3 hidden md:flex" to="/"><i className="fas fa-home"></i></NavLink>
            <NavLink style={active} className="mx-3 hidden md:flex hover:underline" to="/docs">Docs</NavLink>
            <NavLink style={active} className="mx-3 hidden md:flex hover:underline" to="/quraa">Quraa</NavLink>
            <NavLink style={active} className="mx-3 hidden md:flex hover:underline" to="/about">About</NavLink>
            <Link className="ml-3 hidden md:flex bg-green-500 hover:bg-green-700 font-semibold px-4 text-[#ebebeb] rounded-lg" to="/login">Get Token</Link>
            <a className="ml-3 text-xl text-[#ebebeb] md:hidden" target="_blank" href="https://github.com/saifuddien/quran_rewayah_gui"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#444444] py-2 md:hidden flex sticky top-0 z-30">
        <div className="flex max-w-max mx-auto justify-between items-center">
          <NavLink style={active} className="mr-2" to="/"><i className="fas fa-home"></i></NavLink>
          <NavLink style={active} className="mx-2 hover:underline" to="/docs">Docs</NavLink>
          <NavLink style={active} className="mx-2 hover:underline" to="/quraa">Quraa</NavLink>
          <NavLink style={active} className="mx-2 hover:underline" to="/about">About</NavLink>
          <Link className="ml-2 bg-green-500 hover:bg-green-700 font-semibold px-3 text-[#ebebeb] rounded-lg" to="/login">Token</Link>
        </div>
      </div>
    </>
  );
}

export default Header;