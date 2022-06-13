import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex flex-col items-center mx-auto w-[700px] mb-20">
      <h1 className="text-5xl my-10 font-bold">User Sign Up</h1>
      <form className="w-[100%] px-20">
        <input required type="text" placeholder="Input an Username..." className="mt-2 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <input required type="email" placeholder="Input an Email Address..." className="mt-5 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <input required type="password" placeholder="Input your Password..." className="mt-5 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <input required type="password" placeholder="Konfirm your Password..." className="mt-5 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <button className="mt-12 bg-[#3700b3] text-white py-2 pl-3 rounded-full text-lg hover:bg-[#3c217c] font-bold w-[100%]" >Sign Up as User</button>
        <div className="mt-4 text-center text-lg font-bold w-[100%]" >Have an Account? <Link to="/login" className=" text-[#3700b3] hover:text-[#3c217c]">Login</Link></div>
      </form>
    </div>
  );
}

export default Register;