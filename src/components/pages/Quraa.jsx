import { useEffect, useState } from 'react';
import quraa from '../quraa.json'

function Quraa() {

  const [dataQuraa, setdataQuraa] = useState(null)

  const url_vite = import.meta.env.VITE_URL
  const token = import.meta.env.VITE_TOKEN
  const quraa_url = import.meta.env.VITE_QURAA

  useEffect(() => {
    getQuraa()
  }, [])

  const getQuraa = async () => {
    return await fetch(`${quraa_url}/qari`, {
      headers: {
        'auth-token': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(r => r.json())
      .then(j => {
        setdataQuraa(j.data)
      })
  }

  const downloadFile = async (e) => {
    await fetch(`${url_vite}/${e}`)
      .then(r => r.blob())
      .then(j => {

        let url = URL.createObjectURL(j)
        let a = document.createElement('a')

        a.href = url
        a.download = e.replace(/^.*[\\\/]/, '')

        document.body.appendChild(a)
        a.click()
        a.remove()

        URL.revokeObjectURL(url)
      })
  }

  return (
    <div className="flex justify-between px-4 -mt-4 mx-auto w-[100%] lg:w-[1000px] flex-col md:flex-row font-[tajawal]">
      <div className="flex flex-col md:w-[75%] h-[100vh] overflow-scroll pt-14 pb-36 lg:pr-10 md:pr-5">
        <h1 className="font-semibold text-2xl mb-2 pb-3 border-b border-slate-400 text-white ">Quraa Sab'ah 7 :</h1>

        <div className="flex flex-col">
          {
            (dataQuraa !== null) && quraa[2].map((qari, i) => {
              return (
                <>
                  <h2 id={qari.id} className="pt-20 mb-5 text-right font-bold text-xl text-red-500" key={i}> {qari.name} <div className="text-white inline mx-2">&bull;</div></h2>

                  <div className="flex flex-col mr-10 text-right pb-10">
                    <h3 className="text-lg text-white my-3">اسمه</h3>
                    <p className="mb-2">{dataQuraa[i].qari.full_name}</p>
                    <h3 className="text-lg text-white my-3">حياته</h3>
                    <p className="mb-2">{dataQuraa[i].birth} و{dataQuraa[i].death}</p>
                    <h3 className="text-lg text-white my-3">شيوخه</h3>
                    <p className="mb-2">{dataQuraa[i].his_shekh}</p>
                    <h3 className="text-lg text-white my-3">تلاميذه</h3>
                    <p className="mb-2">{dataQuraa[i].his_students}</p>
                    {
                      dataQuraa[i].usul_pdf && <> <h3 className="text-lg text-white my-3">أصوله</h3>
                        <p className="px-4 bg-purple-500 font-bold hover:bg-purple-800 cursor-pointer w-max self-end rounded-full font-sans text-white py-1 mb-2" onClick={() => downloadFile(dataQuraa[i].usul_pdf)}>Dowload Usul 4MB</p></>
                    }
                    <h3 className="text-lg text-white my-3">راوياه :<span className='text-red-500'> {dataQuraa[i].rowi[0].rowi1.name1} <span className='text-white'>و</span>{dataQuraa[i].rowi[1].rowi2.name2}</span></h3>

                    <h4 className="text-lg text-white my-3 py-2 px-4 bg-green-500 w-max self-end rounded-xl">{dataQuraa[i].rowi[0].rowi1.name1}</h4>
                    <p className="mb-2 mr-3">{dataQuraa[i].rowi[0].rowi1.full_name1}</p>
                    <h4 className="text-lg text-white my-3 mr-3">حياته</h4>
                    <p className="mb-2 mr-3">{dataQuraa[i].rowi[0].birth1} و{dataQuraa[i].rowi[0].death1}</p>
                    <h4 className="text-lg text-white my-3 mr-3">شيوخه</h4>
                    <p className="mb-2 mr-3">{dataQuraa[i].rowi[0].his_shekh1}</p>
                    <h4 className="text-lg text-white my-3 mr-3">تلاميذه</h4>
                    <p className="mb-4 mr-3">{dataQuraa[i].rowi[0].his_students1}</p>
                    {
                      dataQuraa[i].rowi[0].usul_pdf1 && <> <h3 className="text-lg text-white my-3">أصوله</h3>
                        <p className="px-4 bg-purple-500 font-bold hover:bg-purple-800 cursor-pointer w-max self-end rounded-full font-sans text-white py-1 mb-2" onClick={() => downloadFile(dataQuraa[i].rowi[0].usul_pdf1)}>Download Usul 4MB</p></>
                    }

                    <h4 className="text-lg text-white my-3 py-2 px-4 bg-green-500 w-max self-end rounded-xl">{dataQuraa[i].rowi[1].rowi2.name2}</h4>
                    <p className="mb-2 mr-3">{dataQuraa[i].rowi[1].rowi2.full_name2}</p>
                    <h4 className="text-lg text-white my-3 mr-3">حياته</h4>
                    <p className="mb-2 mr-3">{dataQuraa[i].rowi[1].birth2} و{dataQuraa[i].rowi[1].death2}</p>
                    <h4 className="text-lg text-white my-3 mr-3">شيوخه</h4>
                    <p className="mb-2 mr-3 ">{dataQuraa[i].rowi[1].his_shekh2}</p>
                    <h4 className="text-lg text-white my-3 mr-3">تلاميذه</h4>
                    <p className="mb-2 mr-3">{dataQuraa[i].rowi[1].his_students2}</p>
                    {
                      dataQuraa[i].rowi[1].usul_pdf2 && <><h3 className="text-lg text-white my-3">أصوله</h3>
                        <p className="px-4 bg-purple-500 font-bold hover:bg-purple-800 cursor-pointer w-max self-end rounded-full font-sans text-white py-1 mb-2" onClick={() => downloadFile(dataQuraa[i].rowi[1].usul_pdf2)}>Download Usul 4MB</p></>
                    }
                  </div>
                  <hr />
                </>
              )
            })
          }{(dataQuraa == null) && <div className="my-20 text-center text-2xl font-thin">Loading Data...</div>}
        </div>

      </div>
      <div className="md:flex hidden flex-col md:ml-5 pb-20 -mt-24">
        <h1 className="font-semibold text-2xl mb-2 mt-52 pr-5 py-3 border-y border-slate-400 text-green-500 ">Navigations :</h1>
        <a href="#ibnukatsir" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Ibnu Katheer</a>
        <a href="#ibnuamir" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Ibnu Amir</a>
        <a href="#asim" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Asim</a>
        <a href="#abuamr" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Abu Amr</a>
        <a href="#hamzah" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Hamzah</a>
        <a href="#nafi" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Nafi</a>
        <a href="#kisai" className=" mt-5 hover:text-white text-lg md:text-sm lg:text-lg">Imam Kisai</a>
      </div>
    </div>
  );
}

export default Quraa;