import { useState } from 'react'

export default function Button() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className=''>
        <button 
            className={`w-28 h-14 rounded-l-lg m-0.5 ${activeButton === 'admin' ? 'bg-[#314B4C] text-[#A4FCFD]' : 'bg-[#303A3A] text-[#40B2B2]'}`}
            onClick={() => {handleButtonClick('admin')}}
            >Admin</button>
        <button 
            className={`w-28 h-14 rounded-r-lg ${activeButton === 'operator' ? 'bg-[#314B4C] text-[#A4FCFD]' : 'bg-[#303A3A] text-[#40B2B2]'}`}
            onClick={() => {handleButtonClick('operator')}}
            >Operator</button>
        </div>
    )
}
