import React, { useEffect } from "react";
import quraa from './quraa.json'

function InputField() {

  const get = async () => {
    return await fetch('http://localhost:3300/api/quran_rewayah/surah')
      .then(r => r.json())
      .then(j => console.log(j))
  }

  useEffect(() => {
    get()
  }, [])

  const addInput = (a) => {
    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = `Qiraah of ${a}...`
    input.className = `mt-2 bg-transparent py-2 px-3 rounded-lg text-lg  border outline-none border-slate-400 Qiraah-${a}`

    document.querySelector(`.${a}`).append(input)
  }

  return (
    <div className="flex flex-col mx-auto mt-10 mb-16 w-[700px]">
      <div className="flex justify-between items-center">
        <div className="flex">
          <input type="number" max="286" min="1" placeholder="Number of Ayah" className="mr-2 bg-transparent py-2 px-3 rounded-lg text-lg  border outline-none border-slate-400" />
          <input type="number" max="144" min="1" placeholder="Number of Surah" className="ml-2 bg-transparent py-2 px-3 rounded-lg text-lg  border outline-none border-slate-400" />
        </div>
        <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg text-lg" >Save Ayah</button>
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
                    <button onClick={() => addInput(qura)} className="rounded-lg font-bold hover:bg-red-700 bg-red-500 w-12 text-center">+</button>
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
                    <button onClick={() => addInput(qura)} className="rounded-lg font-bold hover:bg-red-700 bg-red-500 w-12 text-center">+</button>
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