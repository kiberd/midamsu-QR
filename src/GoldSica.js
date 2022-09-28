import React, { useState } from "react";
import { Switch } from '@headlessui/react'
import ListBox from "./ListBox";
import { useNavigate } from "react-router-dom";

const GoldSica = () => {

    const navigate = useNavigate();

    const [isCn, setIsCn] = useState(true);
    const [src, setSrc] = useState("/goldcica/img_goldcica_cn.jpg");

    const handleClick = () => {
        setIsCn(!isCn);
        isCn ? setSrc("/goldcica/img_goldcica_jp.jpg") : setSrc("/goldcica/img_goldcica_cn.jpg");
    }

    const handleIndicatorChange = (e) => {
        // console.log(e);
        navigate(`/${e.value}`);
    }

    return (
        <div className="flex-col items-center justify-center w-full">
        <div className="flex items-center mt-4 justify-around">
            <div className="w-[160px] md:w-[200px]">
                <ListBox onHandleIndicatorChange={handleIndicatorChange} page={1}/>
            </div>
            <div className="flex justify-center items-center">
                <Switch
                    checked={isCn}
                    onChange={setIsCn}
                    onClick={handleClick}
                    className={`${isCn ? 'bg-teal-900' : 'bg-teal-900'
                        } relative inline-flex h-6 w-11 items-center rounded-full ml-4`}
                >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${isCn ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>

                <span className="ml-1 w-[50px] text-center font-semibold text-sm">{isCn ? "日本語" : "中文"}</span>
            </div>
        </div>
        <div className="flex items-center justify-center mt-4">
            <img src={process.env.PUBLIC_URL + src} />
        </div>
    </div>
    );
};

export default GoldSica;