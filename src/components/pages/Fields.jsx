import React, { useEffect, useState } from "react";
import quraa from '../quraa.json'

const Fields = () => {

  const [Sable, setSable] = useState(true)
  const [Commited, setCommited] = useState(false)
  const [Errored, setErrored] = useState(false)
  const [Error, setError] = useState(null)
  const [Ayah, setAyah] = useState(null)
  const [Surah, setSurah] = useState(null)

  const [Bazzi, setBazzi] = useState([])
  const [Hisham, setHisham] = useState([])
  const [Hafs, setHafs] = useState([])
  const [Susi, setSusi] = useState([])
  const [Khalaf, setKhalaf] = useState([])
  const [Warsh, setWarsh] = useState([])
  const [Laith, setLaith] = useState([])
  const [Qunbul, setQunbul] = useState([])
  const [IbnDzakwan, setIbnDzakwan] = useState([])
  const [Shubah, setShubah] = useState([])
  const [DuriAbuAmr, setDuriAbuAmr] = useState([])
  const [Khallad, setKhallad] = useState([])
  const [Qolun, setQolun] = useState([])
  const [DuriKisai, setDuriKisai] = useState([])

  useEffect(() => {

    if (document.querySelector('.ayah').value != '' && document.querySelector('.surah').value != '') {
      setCommited(true)
    } else {
      setCommited(false)
    }
  }, [Ayah, Surah])

  const Commit = () => {

    if (document.querySelector('.Qiraah-Bazzi')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Bazzi')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setBazzi(Qiraah)
    }

    if (document.querySelector('.Qiraah-Hisham')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Hisham')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setHisham(Qiraah)
    }

    if (document.querySelector('.Qiraah-Hafs')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Hafs')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setHafs(Qiraah)
    }

    if (document.querySelector('.Qiraah-Susi')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Susi')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setSusi(Qiraah)
    }

    if (document.querySelector('.Qiraah-Khalaf')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Khalaf')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setKhalaf(Qiraah)
    }

    if (document.querySelector('.Qiraah-Warsh')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Warsh')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setWarsh(Qiraah)
    }

    if (document.querySelector('.Qiraah-Laith')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Laith')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setLaith(Qiraah)
    }

    if (document.querySelector('.Qiraah-Qunbul')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Qunbul')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setQunbul(Qiraah)
    }

    if (document.querySelector('.Qiraah-IbnDzakwan')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-IbnDzakwan')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setIbnDzakwan(Qiraah)
    }

    if (document.querySelector('.Qiraah-Shubah')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Shubah')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setShubah(Qiraah)
    }

    if (document.querySelector('.Qiraah-DuriAbuAmr')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-DuriAbuAmr')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setDuriAbuAmr(Qiraah)
    }

    if (document.querySelector('.Qiraah-Khallad')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Khallad')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setKhallad(Qiraah)
    }

    if (document.querySelector('.Qiraah-Qolun')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-Qolun')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setQolun(Qiraah)
    }

    if (document.querySelector('.Qiraah-DuriKisai')) {
      let Qiraah = []
      document.querySelectorAll('.Qiraah-DuriKisai')
        .forEach(data => {
          if (data.value != '') {
            Qiraah.push(data.value)
          }
        })
      setDuriKisai(Qiraah)
    }

    setSable(false)
    setError('Data Commited!')
    setErrored(true)
  }

  const rewayah = {
    rewayah:
      [
        {
          qori: "عبد الله بن كثير الداري المكي",
          rowi: [
            {
              name: "قنبل",
              qiraah: Qunbul
            },
            {
              name: "البزي",
              qiraah: Bazzi
            }
          ]
        },
        {
          qori: "عبد الله بن عامر اليحصبي الشامي",
          rowi: [
            {
              name: "هشام",
              qiraah: Hisham
            },
            {
              name: "ابن ذكوان",
              qiraah: IbnDzakwan
            }
          ]
        },
        {
          qori: "عاصم بن أبي النَّجود الأسدي الكوفي",
          rowi: [
            {
              name: "شعبة",
              qiraah: Shubah
            },
            {
              name: "حفص",
              qiraah: Hafs
            }
          ]
        },
        {
          qori: "أبو عمرو بن العلاء البصري",
          rowi: [
            {
              name: "السوسي",
              qiraah: Susi
            },
            {
              name: "الدوري",
              qiraah: DuriAbuAmr
            }
          ]
        },
        {
          qori: "حمزة بن حبيب الزيات الكوفي",
          rowi: [
            {
              name: "خلف",
              qiraah: Khalaf
            },
            {
              name: "خلاد",
              qiraah: Khallad
            }
          ]
        },
        {
          qori: "نافع بن عبد الرحمن بن أبي نعيم المدني",
          rowi: [
            {
              name: "ورش",
              qiraah: Warsh
            },
            {
              name: "قالون",
              qiraah: Qolun
            }
          ]
        },
        {
          qori: "أبو الحسن علي بن حمزة الكسائي النحوي الكوفي",
          rowi: [
            {
              name: "ليث",
              qiraah: Laith
            },
            {
              name: "الدوري",
              qiraah: DuriKisai
            }
          ]
        }
      ]
  }

  const api = import.meta.env.VITE_QURAN
  const token = import.meta.env.VITE_TOKEN

  const addAyah = async () => {

    setSable(true)

    await fetch(`${api}/ayah/${Ayah}?surah=${Surah}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': token
      },
      method: 'POST',
      body: JSON.stringify(rewayah)
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setErrored(true)
      })
  }

  const updateAyah = async () => {

    setSable(true)

    await fetch(`${api}/ayah/${Ayah}?surah=${Surah}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': token
      },
      method: 'PUT',
      body: JSON.stringify(rewayah)
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setErrored(true)
      })
  }

  const deleteAyah = async () => {

    setCommited(false)

    await fetch(`${api}/ayah/${Ayah}?surah=${Surah}`, {
      method: 'DELETE',
      headers: {
        'auth-token': token
      }
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setErrored(true)
        setCommited(true)
      })
  }

  const addInput = (a) => {

    const div = document.createElement('div')
    const input = document.createElement('input')
    const close = document.createElement('p')

    close.innerHTML = '&times;'
    close.className = 'absolute right-3 top-3 cursor-pointer hover:text-red-700 text-red-500 font-bold text-3xl'
    close.onclick = e => e.target.parentElement.remove()

    input.type = 'text'
    input.placeholder = `Qiraah of ${a}...`
    input.className = `mt-2 bg-transparent text-white py-2 pl-3 pr-9 w-[100%] rounded-xl text-lg  border outline-none border-slate-400 Qiraah-${a}`

    div.append(input)
    div.append(close)
    div.className = 'relative'

    document.querySelector(`.${a}`).append(div)
  }

  return (
    <div className="flex flex-col px-4 font-[arial]">
      <div className="flex items-center justify-around mx-auto my-14">
        <img src="./icon/quran.png" alt="icon" className="w-12 sm:w-16 lg:w-24" />
        <h1 className="font-[tajawal] lg:text-6xl md:text-5xl text-4xl ml-4 font-bold">Quran <span className="text-red-500">Admin</span></h1>
      </div>

      <div className="flex flex-col mx-auto mt-8 mb-32 lg:w-[900px] w-full lg:px-0 sm:px-20 md:px-28">
        {
          (Errored == true) && <div className="text-xl bg-slate-500 py-2 px-3 lg:mx-4 font-bold mb-4 rounded-xl text-white flex justify-between items-center">
            <div>{Error}</div>
            <button onClick={() => setErrored(false)} className="text-black hover:text-red-500 text-2xl font-bold">&times;</button>
          </div>
        }
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex lg:ml-4 lg:mb-0 mb-4">
            <input type="number" max="286" min="1" required autoFocus placeholder="No of Ayah" className="mr-2 ayah text-white w-48 bg-transparent py-2 px-3 rounded-xl text-lg  border outline-none border-slate-400" onChange={(e) => setAyah(e.target.value)} />
            <input type="number" max="144" min="1" required placeholder="No of Surah" className="surah text-white w-48 bg-transparent py-2 px-3 rounded-xl text-lg  border outline-none border-slate-400" onChange={(e) => setSurah(e.target.value)} />
          </div>
          <div className="flex lg:mr-4">
            {
              (Commited == false) ? <button disabled className="cursor-not-allowed text-slate-500 bg-[#bb86fc] font-bold py-2 px-4 rounded-xl text-lg mr-2" >Commit</button> : <button onClick={() => Commit()} className=" bg-[#9242f3] hover:bg-[#bb86fc] text-white font-bold py-2 px-4 rounded-xl text-lg mr-2" >Commit</button>
            }
            {
              (Sable == true) ? <button disabled className="bg-[#3c217c] cursor-not-allowed font-bold py-2 px-3 rounded-xl text-lg" >Add <span className="sm:inline hidden">Ayah</span></button> : <button onClick={() => addAyah()} className=" bg-[#3700b3] hover:bg-[#3c217c] text-white font-bold py-2 px-3 rounded-xl text-lg" >Add <span className="sm:inline hidden">Ayah</span></button>
            }
            {
              (Sable == true) ? <button disabled className="bg-green-700 cursor-not-allowed text-slate-300 font-bold py-2 px-3 rounded-xl text-lg ml-2" >Update <span className="sm:inline hidden">Ayah</span></button> : <button onClick={() => updateAyah()} className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-xl text-lg ml-2" >Update <span className="sm:inline hidden">Ayah</span></button>
            }
            {
              (Commited == false) ? <button disabled className="cursor-not-allowed bg-red-700
            font-bold py-2 px-3 rounded-xl text-lg ml-2" ><i className="fa fa-trash-can"></i></button> : <button onClick={() => deleteAyah()} className=" hover:bg-red-700 bg-red-500 text-white font-bold py-2 px-3 rounded-xl text-lg ml-2" ><i className="fa fa-trash-can"></i></button>
            }
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex flex-col lg:w-96 lg:ml-4 w-[100%]">
            {
              quraa[0].map((qari, i) => {
                return (
                  <div className={`flex flex-col w-[100%] ${qari}`} key={i}>
                    <div className="flex justify-between text-white text-xl font-bold mt-3 border-b pb-3">
                      <label className="font-[tajawal]">&bull; {`Imam ${qari} :`}</label>
                      <button onClick={() => addInput(qari)} className="rounded-full font-bold hover:bg-red-700 bg-red-500 w-12 text-center">+</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="flex flex-col lg:w-96 lg:mr-4 w-[100%]">
            {
              quraa[1].map((qari, i) => {
                return (
                  <div className={`flex flex-col w-[100%] ${qari}`} key={i}>
                    <div className="flex justify-between text-white text-xl font-bold mt-3 border-b pb-3">
                      <label className="font-[tajawal]">&bull; {`Imam ${qari} :`}</label>
                      <button onClick={() => addInput(qari)} className="rounded-full font-bold hover:bg-red-700 bg-red-500 w-12 text-center">+</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fields;