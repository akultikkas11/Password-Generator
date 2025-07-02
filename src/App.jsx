import { useState, useEffect, useRef } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordRef = useRef(null); //To show that password is being copied
  const [toolTipText, setToolTipText] = useState("Copy");

  const passwordGenerator = ()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*_-+=/?<>`~";

    for(let i=0 ; i<length ; i++) {
      let idx = Math.floor(Math.random()*str.length);
      let char = str.charAt(idx);

      pass += char;
    }
    setPassword(pass);
  }

  const copyToClipboard = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setToolTipText("Copied");

    // Revert back to initial state...
    setTimeout(()=>{
      setToolTipText("Copy")
    }, 3000);
  }

  useEffect(passwordGenerator, [length, numberAllowed, characterAllowed]);

  return (
    <div className='max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
    
      {/* For the password field and the copy button.... */}
      <div className='flex items-center justify-between mb-2 mt-2'>
        {/* a) password field */}
        <div className="w-[88%]">
          <input 
          type="text"
          className='rounded-lg w-[100%] p-1.5 outline-none text-[rgb(255,102,0)]'
          placeholder='Password'
          value={password}
          readOnly
          ref={passwordRef}
          />
        </div>

        {/* b) Copy Button */}
        <div>
          <Tooltip title={toolTipText} placement="top">
            <button
            onClick={copyToClipboard}
            className="p-1 rounded-md bg-white hover:bg-gray-500"
            >
              <ContentCopyIcon/>
            </button>
          </Tooltip>
        </div>
      </div>

      {/* For the dependencies i.e. 
        a) Length
        b) Character Allowed
        c) Number Allowed
      */}
      <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-4">

        {/* For range */}
        <div className="flex gap-x-1 items-center">
          <input 
          onChange={(e)=>setLength(Number(e.target.value))}
          type="range"
          min={0}
          max={36}
          value={length}
          className='outline-none cursor-pointer'
          />

          <p>Length: {length}</p>
        </div>

        {/* For numbers */}
        <div className="flex gap-x-1">
          <input 
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
          checked={numberAllowed}
          type="checkbox"
          id="number"
          className="outline-none cursor-pointer"
          />

          <label htmlFor="number" className="cursor-pointer">Number</label>
        </div>

          {/* For characters */}
          <div className="flex gap-x-1">
            <input 
            onChange={()=>{
              setCharacterAllowed((prev)=>!prev)
            }}
            checked={characterAllowed}
            type="checkbox"
            id="character"
            className="outline-none cursor-pointer"
            />

            <label htmlFor="character" className="cursor-pointer">Character</label>
          </div>

      </div>

    </div>

      
    
  );
}

export default App;