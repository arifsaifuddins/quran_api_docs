import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [Name, setName] = useState(null)
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [Token, setToken] = useState('')
  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  const admin = import.meta.env.VITE_ADMIN
  const users = import.meta.env.VITE_USERS

  useEffect(() => {

    if (document.querySelector('.email').value != '' && document.querySelector('.pass').value != '') {
      setCommited(true)
    } else {
      setCommited(false)
    }

  }, [Email, Pass])

  useEffect(() => {
    if (localStorage.getItem('id_admin')) {
      setName(localStorage.getItem('admin'))

      fetch(`${admin}/${localStorage.getItem('id_admin')}`)
        .then(r => r.json())
        .then(j => {
          if (j.data) {
            document.querySelector('.email').value = j.data.email
            setName(j.data.username)
            setToken(j.token)
          }
        })
    }

    if (localStorage.getItem('id_user')) {
      setName(localStorage.getItem('user'))

      fetch(`${users}/${localStorage.getItem('id_user')}`)
        .then(r => r.json())
        .then(j => {
          if (j.data) {
            document.querySelector('.email').value = j.data.email
            setName(j.data.username)
            setToken(j.token)
          }
        })
    }
  }, [Name])

  const submitAdmin = async () => {
    setCommited(false)

    return await fetch(`${admin}/login`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: Email,
        password: Pass
      })
    })
      .then(r => r.json())
      .then(j => {
        if (j.data) {
          localStorage.clear()
          JSON.stringify(localStorage.setItem('admin', j.data.username))
          JSON.stringify(localStorage.setItem('id_admin', j.data._id))
          window.location.assign('/login')
        } else {
          setError(j.message)
          setErrored(true)
        }
      })
  }

  const submitUser = async () => {
    setCommited(false)

    return await fetch(`${users}/login`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: Email,
        password: Pass
      })
    })
      .then(r => r.json())
      .then(j => {
        if (j.data) {
          localStorage.clear()
          JSON.stringify(localStorage.setItem('user', j.data.username))
          JSON.stringify(localStorage.setItem('id_user', j.data._id))
          setName(j.data.username)
          setError(j.message + ' as ' + j.data.username)
          setErrored(true)
        } else {
          setError(j.message)
          setErrored(true)
        }
      })
  }

  const copyToken = () => {
    const token = document.querySelector(".token");

    token.select();
    token.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(token.value);

    setError('The API token copied!')
    setErrored(true)
  }

  return (
    <div className="flex flex-col items-center mx-auto w-[700px] mb-20">
      <h1 className="text-5xl my-10 font-bold">User Login</h1>
      <form className="w-[100%] px-20">
        {
          (Errored == true) && <div className="text-xl w-[100%] bg-slate-500 py-2 px-3 font-bold mb-4 rounded-xl text-white flex justify-between items-center">
            <div>{Error}</div>
            <button onClick={() => setErrored(false)} className="text-black hover:text-red-500 text-2xl font-bold">&times;</button>
          </div>
        }
        <input required type="email" placeholder="Input an Email Address..." onChange={(e) => setEmail(e.target.value)} className="mt-2 bg-transparent email text-white py-2 px-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        <input required type="password" placeholder="Input your Password..." onChange={(e) => setPass(e.target.value)} className="mt-5 bg-transparent pass text-white py-2 px-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
        {
          (Commited == false) ? <button disabled className="cursor-not-allowed mt-12 py-2 pl-3 rounded-full text-lg bg-[#3c217c] font-bold w-[100%]" >Login as User</button> : <p className="cursor-pointer text-center mt-12 bg-[#3700b3] text-white py-2 pl-3 rounded-full text-lg hover:bg-[#3c217c] font-bold w-[100%]" onClick={() => submitUser()}>Login as User</p>
        }
        {
          (Commited == false) ? <button disabled className="cursor-not-allowed mt-4 text-center bg-red-700 py-2 pl-3 rounded-full text-lg font-bold w-[100%]">Login as Admin</button> : <p className=" mt-4 cursor-pointer text-center bg-red-500 text-white py-2 pl-3 rounded-full text-lg hover:bg-red-700 font-bold w-[100%]" onClick={() => submitAdmin()}>Login as Admin</p>
        }
        <div className="mt-4 text-center text-lg font-bold w-[100%]" >Have Not an Account? <Link to="/register" className=" text-[#3700b3] hover:text-[#3c217c]">Register</Link></div>
      </form>
      <div className="flex flex-col mt-20 w-[100%] px-20">
        {
          (Name !== null) ? <h1 className="pb-3 text-xl">You're logged in as <span className="font-bold text-white">{Name}</span>,<br />this is your Token!, <Link to="/login" onClick={() => {
            window.location.assign('/')
            localStorage.clear()
          }} className=" hover:text-red-700 text-red-500 ml-2 font-bold"><i className="fas fa-arrow-right-from-bracket"></i> Log Out?</Link></h1> : <h1 className="pb-3 text-xl text-red-500">You're not logged in!</h1>
        }
        <hr />
        <div className="flex mt-3">
          <input type="text" placeholder="Your Token here, Login!" defaultValue={Token} className="token bg-transparent text-white py-2 px-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
          <i onClick={() => copyToken()} className="fas hover:bg-red-700 bg-red-500 text-white font-bold py-2 cursor-pointer px-3 rounded-xl text-lg ml-2 fa-copy"></i>
        </div>
      </div>
    </div>
  );
}

export default Login;