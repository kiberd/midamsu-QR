import React, { useState } from "react";
import { Switch } from '@headlessui/react'

function App() {

  const [isCn, setIsCn] = useState(true);
  const [src, setSrc] = useState("/img_cn.jpg");

  const handleClick = () => {
    setIsCn(!isCn);
    isCn ? setSrc("/img_jp.jpg") : setSrc("/img_cn.jpg");
  }

  return (
    <>
      <div className="flex-col justify-center items-center w-full">

        <div className="flex items-center mt-4 ml-[10vw] font-bold" onClick={handleClick}>

          <Switch
            checked={isCn}
            onChange={setIsCn}
            className={`${isCn ? 'bg-teal-900' : 'bg-teal-900'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${isCn ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <button className="ml-2">
            {
              isCn ? "일본어" : "중국어"
            }
          </button>

        </div>
        <div className="flex justify-center items-center"> 

          <img src={process.env.PUBLIC_URL + src} />
        </div>
      </div>
    </>
  );
}

export default App;
