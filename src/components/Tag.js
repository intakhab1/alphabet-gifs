import Spinner from './Spinner';
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import '../App.css'; 

const Tag = () => {

    const[tag, setTag] = useState('A');
    const{gif , loading , fetchMeme} = useGif(tag);
    const [highlightedButton, setHighlightedButton] = useState("null");
    const[sound, setSound] = useState('')

    const handleButtonClick = (buttonId) => {
      setHighlightedButton(buttonId)
      setTag(buttonId)
      fetchMeme(buttonId)
    };
    useEffect(()=>{
      setHighlightedButton("A")
    },[])

  return (

    <div className='w-1/2 bg-blue-400 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl font-bold underline uppercase'>Alphabet {tag} Gif </h1>
        { loading ? (<Spinner/>) : (<img src={gif}/>) }
        <div className='flex flex-wrap justify-center gap-x-4 m-2'>
            <button
            className={highlightedButton === "A" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("A")}
            >A</button>
            <button
            className={highlightedButton === "B" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("B")}
            >B</button>
            <button
            className={highlightedButton === "C" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("C")}
            >C</button>           
            <button
            className={highlightedButton === "D" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("D")}
            >D</button>
            <button
            className={highlightedButton === "E" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("E")}
            >E</button>            
            <button
            className={highlightedButton === "F" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("F")}
            >F</button>
            <button
            className={highlightedButton === "G" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("G")}
            >G</button>            
            <button
            className={highlightedButton === "H" ? 'highlighted' : "w-10 h-10 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"}
            onClick={() => handleButtonClick("H")}
            >H</button>
        </div>
    </div>
  )
}

export default Tag
