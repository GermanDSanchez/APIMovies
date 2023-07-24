import { useState } from "react"

export function ButtonMoreInfo (props) {

    const [buttonHover, setButtonHover] = useState(false)
    
    return (
        <button
         onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} className="rounded-full bg-button text-white border-2 border-borderbutton p-1 h-9 scale-90 hover:border-white">
        {buttonHover && <div className={`absolute -top-9 p-0.5 px-1 -left-8 text-base font-semibold inline-block whitespace-nowrap bg-white text-black rounded-md`}>Descripcion</div>}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                width={24}
                viewBox="0 0 512 512"
                {...props}
                fill="white"
            >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
        </button>
)}