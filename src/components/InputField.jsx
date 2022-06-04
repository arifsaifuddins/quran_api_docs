import React, { useEffect, useState } from "react";
import quraa from './quraa.json'

function InputField() {

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
    } else {
      setBazzi([])
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
    } else {
      setHisham([])
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
    } else {
      setHafs([])
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
    } else {
      setSusi([])
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
    } else {
      setKhalaf([])
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
    } else {
      setWarsh([])
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
    } else {
      setLaith([])
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
    } else {
      setQunbul([])
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
    } else {
      setIbnDzakwan([])
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
    } else {
      setShubah([])
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
    } else {
      setDuriAbuAmr([])
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
    } else {
      setKhallad([])
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
    } else {
      setQolun([])
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
    } else {
      setDuriKisai([])
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

  const updateAyah = async () => {

    setSable(true)

    await fetch(`http://localhost:3300/api/quran_rewayah/ayah/${Ayah}?surah=${Surah}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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

    await fetch(`http://localhost:3300/api/quran_rewayah/ayah/${Ayah}?surah=${Surah}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(j => {
        setError(j.message)
        setErrored(true)
      })
  }

  const addAyah = async () => {

    setSable(true)

    await fetch(`http://localhost:3300/api/quran_rewayah/ayah/${Ayah}?surah=${Surah}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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

  const addInput = (a) => {

    const div = document.createElement('div')
    const input = document.createElement('input')
    const close = document.createElement('div')

    close.className = 'absolute top-2 bottom-3 right-2 cursor-pointer hover:text-[#cf6679] text-[#cf4444] font-bold text-4xl'
    close.onclick = e => e.target.parentElement.remove()

    div.className = 'relative'

    input.type = 'text'
    input.placeholder = `Qiraah of ${a}...`
    input.className = `mt-2 bg-transparent text-white py-2 pl-3 pr-9 w-[100%] rounded-lg text-lg  border outline-none border-slate-400 Qiraah-${a}`

    close.innerHTML = '&times;'
    div.append(input)
    div.append(close)
    document.querySelector(`.${a}`).append(div)
  }

  return (
    <div className="flex flex-col mx-auto mb-56 w-[700px]">
      {
        (Errored == true) && <div className="text-xl bg-slate-500 py-2 px-3 font-bold mb-4 rounded-lg text-white flex justify-between items-center">
          <div>{Error}</div>
          <button onClick={() => setErrored(false)} className="text-black hover:text-[#cf4444] text-2xl font-bold">&times;</button>
        </div>
      }
      <div className="flex justify-between items-center">
        <div className="flex">
          <input type="number" required max="286" min="1" autoFocus placeholder="No of Ayah" className="mr-2 ayah text-white w-40 bg-transparent py-2 px-3 rounded-lg text-lg  border outline-none border-slate-400" onChange={(e) => setAyah(e.target.value)} />
          <input type="number" required max="144" min="1" placeholder="No of Surah" className="surah text-white w-40 bg-transparent py-2 px-3 rounded-lg text-lg  border outline-none border-slate-400" onChange={(e) => setSurah(e.target.value)} />
        </div>
        <div className="flex">
          {
            (Commited == false) ? <button onClick={() => Commit()} disabled className="cursor-not-allowed text-slate-500 bg-[#bb86fc] font-bold py-2 px-5 rounded-lg text-lg mr-2" >Commit</button> : <button onClick={() => Commit()} className=" bg-[#9242f3] hover:bg-[#bb86fc] text-white font-bold py-2 px-5 rounded-lg text-lg mr-2" >Commit</button>
          }
          {
            (Sable == true) ? <button disabled onClick={() => addAyah()} className="bg-[#3c217c] cursor-not-allowed font-bold py-2 px-5 rounded-lg text-lg" >Add</button> : <button onClick={() => addAyah()} className=" bg-[#3700b3] hover:bg-[#3c217c] text-white font-bold py-2 px-5 rounded-lg text-lg" >Add</button>
          }
          {
            (Sable == true) ? <button disabled onClick={() => updateAyah()} className="bg-[#289389] cursor-not-allowed font-bold py-2 px-5 rounded-lg text-lg ml-2" >Update</button> : <button onClick={() => updateAyah()} className=" bg-[#03dac6] hover:bg-[#289389] text-white font-bold py-2 px-5 rounded-lg text-lg ml-2" >Update</button>
          }
          {
            (Commited == false) ? <button onClick={() => deleteAyah()} disabled className="cursor-not-allowed bg-[#cf6679]
            font-bold py-2 px-3 rounded-lg text-lg ml-2" ><i className="fa fa-trash-can"></i></button> : <button onClick={() => deleteAyah()} className=" hover:bg-[#cf6679] bg-[#cf4444] text-white font-bold py-2 px-3 rounded-lg text-lg ml-2" ><i className="fa fa-trash-can"></i></button>
          }
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between">
        <div className="flex flex-col w-80">
          {
            quraa[0].map((qura, i) => {
              return (
                <div className={`flex flex-col w-[100%] ${qura}`} key={i}>
                  <div className="flex justify-between text-white text-xl font-bold mt-3 border-b pb-3">
                    <label >{`Imam ${qura} :`}</label>
                    <button onClick={() => addInput(qura)} className="rounded-lg font-bold hover:bg-[#cf6679] bg-[#cf4444] w-12 text-center">+</button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col w-80">
          {
            quraa[1].map((qura, i) => {
              return (
                <div className={`flex flex-col w-[100%] ${qura}`} key={i}>
                  <div className="flex justify-between text-white text-xl font-bold mt-3 border-b pb-3">
                    <label >{`Imam ${qura} :`}</label>
                    <button onClick={() => addInput(qura)} className="rounded-lg font-bold hover:bg-[#cf6679] bg-[#cf4444] w-12 text-center">+</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default InputField;