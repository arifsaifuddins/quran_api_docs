import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center mx-auto w-[700px] mb-20">
      <h1 className="text-5xl my-10 font-bold">User Login</h1>
      <form className="w-[100%] px-20">
        <input required type="email" placeholder="Input an Email Address..." className="mt-2 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <input required type="password" placeholder="Input your Password..." className="mt-5 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <button className="mt-12 bg-[#3700b3] text-white py-2 pl-3 rounded-full text-lg hover:bg-[#3c217c] font-bold w-[100%]" >Login as User</button>
        <div className="mt-4 cursor-pointer text-center bg-red-500 text-white py-2 pl-3 rounded-full text-lg hover:bg-red-700 font-bold w-[100%]" >Login as Admin</div>
        <div className="mt-4 text-center text-lg font-bold w-[100%]" >Have Not an Account? <Link to="/register" className=" text-[#3700b3] hover:text-[#3c217c]">Register</Link></div>
      </form>
      <div className="flex flex-col mt-20 w-[100%] px-20">
        <h1 className="pb-3 text-xl">You are logged in as Arief, And this your Token!</h1><hr />
        <div className="flex mt-3">
          <input type="text" placeholder="Your Token here, Login!" className=" bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
          <i className="fas hover:bg-red-700 bg-red-500 text-white font-bold py-2 cursor-pointer px-3 rounded-xl text-lg ml-2 fa-arrow-rotate-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Login;