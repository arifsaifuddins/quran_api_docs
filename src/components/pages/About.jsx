import { useEffect, useState } from "react"

function About() {
  const [Subject, setSubject] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Commited, setCommited] = useState(false)

  useEffect(() => {

    if (document.querySelector('.email').value != '' && document.querySelector('.subject').value != '' && document.querySelector('.message').value != '') {
      setCommited(true)
    } else {
      setCommited(false)
    }

  }, [Email, Subject, Message])

  useEffect(() => {
    if (localStorage.getItem('id_user')) {
      document.querySelector('.subject').value = localStorage.getItem('user')
    }
  }, [])

  const users = import.meta.env.VITE_USERS

  const sendEmail = async () => {
    setCommited(false)

    return await fetch(`${users}/mailer`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: Email,
        subject: Subject,
        text: Message
      })
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setErrored(true)
        setCommited(true)
      }).catch(j => {
        setError(j.message)
        setErrored(true)
        setCommited(true)
      })
  }

  return (
    <div className="flex flex-col mx-auto w-[100%] lg:w-[1000px] mb-20 font-[tajawal]">

      <div className="flex justify-between px-4 py-10 flex-col md:flex-row">
        <div className="flex flex-col w-[100%] mb-20 md:mb-0 md:w-[70%]">
          <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-white">About API Rewayah :</h1>
          <p className="mt-4 font-bold text-[#ebebeb] lg:text-lg">Hello Everybody!...</p>
          <p className="mt-6 lg:text-lg first-letter:ml-10">This is an API for <span className="text-green-500">Seven Rewayah of Quran Kareem</span>, this made couse i haven't see someone create an API like this, then i am starting to think if i can make it as API for anyone can get it easly. I am named it <span className="text-red-500 font-bold italic">"Quran Rewayah 7"</span>, couse the API provide all of seven rewayah on quran rightly.</p>
          <p className="mt-6 lg:text-lg first-letter:ml-10">So, i am <a className="text-green-500" href="https://github.com/saifuddien">Arief Saifuddien</a> from Jepara, Indonesia. I am a Student for <span className="font-bold text-[#ebebeb] italic">Islamic Studies</span> at International University of Africa Sudan <a href="https://iua.edu.sd" className="text-green-500 ">(IUA)</a>. I am made it actually not alone, but with my friend <a className="text-green-500" href="https://github.com/Toyin5">Muhammad Toyin</a> from Lagos, Nigeria. He is a Student for <span className="font-bold text-[#ebebeb] italic">Computer Science</span> at <a href="https://iua.edu.sd" className="text-green-500 ">(IUA)</a> too.</p>
          <p className="mt-6 font-bold text-[#ebebeb] italic lg:text-lg">Thanks for visitting us!. Give us start, and support us for anything...</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl pr-4 mb-2 pb-3 border-b border-slate-400 text-white" >API Made With :</h1>
          <p className="mt-4 text-xl md:text-lg"><i className="mr-2 text-red-500 fab fa-html5"></i> HTML</p>
          <p className="mt-2 text-xl md:text-lg"><i className="mr-2 text-blue-800 fab fa-css3-alt"></i> CSS</p>
          <p className="mt-2 text-xl md:text-lg"><i className="mr-2 text-blue-400 fab fa-css3-alt"></i> Tailwind</p>
          <p className="mt-2 text-xl md:text-lg"><i className="mr-2 text-yellow-500 fab fa-js-square"></i> Javascript</p>
          <p className="mt-2 text-xl md:text-lg"><i className="mr-2 text-green-500 fab fa-node-js"></i> Node JS</p>
          <p className="mt-2 text-xl md:text-lg"><i className="mr-2 text-white fab fa-node-js"></i> Express JS</p>
          <p className="mt-2 text-xl md:text-lg"><i className="mr-2 text-blue-500 fab fa-react"></i> React JS</p>
        </div>
      </div>

      <div className="px-4 my-20">
        <h1 className="font-semibold md:text-center text-2xl mb-5 pb-5 border-b border-slate-400 text-white">API Members :</h1>
        <div className="flex justify-between pt-10 md:px-4 items-center flex-col lg:flex-row md:flex-col">
          <div className="flex items-center my-8 text-xs sm:text-base">
            <img src="/images/arief.jpg" className="border-2 border-[#ebebeb] w-40 h-40 rounded-full mr-4 md:mr-10 lg:mr-4" alt="Arief Photo" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400 mb-2">Arief Saifuddien <a className="font-thin" target="_blank" href="https://github.com/saifuddien"><i className="mr-2 fab fa-github"></i></a></h1>
              <p className="text-white"><i className="mr-2 mt-2 fas  fa-briefcase"></i> API Founder</p>
              <p className="font-thin text-white"><i className="fas fa-swatchbook mr-2 mt-2"></i> Islamic Studies</p>
              <p className="font-thin text-white"><i className="fas fa-hotel mr-2 mt-2"></i> International University of Africa</p>
              <p className="font-thin text-white"><i className="mr-2 mt-2  fas fa-location-dot"></i> Jepara, Indonesia</p>
            </div>
          </div>
          <div className="flex items-center mt-8 text-xs sm:text-base">
            <img src="/images/toyin.jpg" className="border-2 border-[#ebebeb] w-40 h-40 rounded-full mr-4 md:mr-10 lg:mr-4" alt="Toyin Photo" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400 mb-2">Muhammad Toyin <a className="font-thin" target="_blank" href="https://github.com/Toyin5"><i className="fab fa-github"></i></a></h1>
              <p className="text-white"><i className="mr-2 mt-2 fas  fa-briefcase"></i> API Co Founder</p>
              <p className="font-thin text-white"><i className="fas fa-swatchbook mr-2 mt-2"></i> Computer Science</p>
              <p className="font-thin text-white"><i className="fas fa-hotel mr-2 mt-2"></i> International University of Africa</p>
              <p className="font-thin text-white"><i className="mr-2  mt-2 fas fa-location-dot"></i> Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mt-20">
        <h1 className="font-semibold md:text-center text-2xl mb-5 pb-5 border-b border-slate-400 text-white">Contact Us :</h1>

        <div className="flex justify-between w-[100%] py-10 px-5 flex-col md:flex-row items-center">
          <form className="md:w-[60%] sm:mx-20 md:mx-0 mb-20 md:mb-0">
            {
              (Errored == true) && <div className="text-xl w-[100%] bg-slate-500 py-2 px-3 font-bold mb-4 rounded-xl text-white flex justify-between items-center">
                <div>{Error}</div>
                <button onClick={() => setErrored(false)} className="text-black hover:text-red-500 text-2xl font-bold">&times;</button>
              </div>
            }
            <input required type="email" placeholder="Input Your Email..." onChange={(e) => setEmail(e.target.value)} className="email mt-2 bg-transparent text-white py-2 pl-3 rounded-full text-md  border outline-none border-slate-400 w-[100%]" />
            <input required type="text" placeholder="Input Your Subject/Name..." onChange={(e) => setSubject(e.target.value)} className="subject mt-4 bg-transparent text-white py-2 pl-3 rounded-full text-md  border outline-none border-slate-400 w-[100%]" />
            <textarea required placeholder="Input Your Message..." onChange={(e) => setMessage(e.target.value)} className="message mt-8 bg-transparent text-white py-2 pl-3 rounded-xl text-lg  border outline-none border-slate-400 w-[100%]" />
            {
              (Commited == false) ? <button disabled className="cursor-not-allowed mt-4 py-2 pl-3 rounded-full text-lg bg-[#3c217c] font-bold w-[100%]" >Send An Email</button> : <p className="cursor-pointer text-center mt-4 bg-[#3700b3] text-white py-2 pl-3 rounded-full text-lg hover:bg-[#3c217c] font-bold w-[100%]" onClick={() => sendEmail()}>Send An Email</p>
            }
          </form>

          <div className="flex w-max flex-col justify-around items-center bg-slate-800 opacity-70 rounded-lg px-12 md:px-8 lg:px-12 py-8 md:ml-5">
            <div className="text-center mb-6">
              <h1 className="text-xl font-bold text-[#ebebeb] ">Arief Saifuddien</h1>
              <p className="mt-6 text-2xl">
                <a target="_blank" href="http://wa.me/+249121208279"><i className="fab text-green-500 fa-whatsapp mx-2"></i></a>
                <a target="_blank" href="https://facebook.com/saifuddien01"><i className="fab text-blue-700 fa-facebook mx-2"></i></a>
                <a target="_blank" href="https://twitter.com/saifuddien_"><i className="fab text-blue-500 fa-twitter mx-2"></i></a>
                <a target="_blank" href="https://instagram.com/saifuddien_"><i className="fab text-pink-500 fa-instagram mx-2"></i></a>
                <a target="_blank" href="mailto:ariefsaifuddien01@gmail.com"><i className="fab text-red-500 fas fa-envelope mx-2"></i></a>
                <a target="_blank" href="https://github.com/saifuddien"><i className="fab text-white fab fa-github mx-2"></i></a>
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-xl font-bold text-[#ebebeb] ">Muhammad Toyin</h1>
              <p className="mt-6 text-2xl w-full">
                <a target="_blank" href="http://wa.me/+249996543850"><i className="fab text-green-500 fa-whatsapp mx-2"></i></a>

                <a target="_blank" href="https://twitter.com/eng_toyin"><i className="fab text-blue-500 fa-twitter mx-2"></i></a>
                <a target="_blank" href="mailto:toyinmuhammed50@gmail.com"><i className="fab text-red-500 fas fa-envelope mx-2"></i></a>
                <a target="_blank" href="https://github.com/Toyin5"><i className="fab text-white fab fa-github mx-2"></i></a>
              </p>
            </div>
          </div>
        </div>
        <hr className="md:hidden" />
      </div>
    </div>
  );
}

export default About;