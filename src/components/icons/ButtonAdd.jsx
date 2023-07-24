import { useState } from "react"
import { useLocalStorage } from "../../useLocalStorage"

export function ButtonAdd (props) {

    const [buttonHover, setButtonHover] = useState(false)

    const [buttonClickAdd, setButtonClickAdd] = useLocalStorage('buttonClickAdd', false)

    return (
        <button 
        onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} onClick={() => buttonClickAdd ? setButtonClickAdd(false) : setButtonClickAdd(true)} className="rounded-full bg-button text-white border-2 border-borderbutton p-1 h-9 scale-90 hover:border-white">
        {buttonHover && <div className={`absolute -top-9 p-0.5 px-1 -left-[3.6rem] text-base w-36 font-semibold inline-block whitespace-nowrap bg-white text-black rounded-md`}>{buttonClickAdd ? 'Quitar de Mi lista' : 'Agregar a Mi lista'}</div>}
            {buttonClickAdd ? 
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                aria-hidden="true"
                className="ltr-0 e1mhci4z1"
                data-name="Checkmark"
                {...props}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m8.682 19.731 15-14-1.364-1.462-14.294 13.34-5.317-5.316-1.414 1.414 6 6a1 1 0 0 0 1.39.024Z"
                    clipRule="evenodd"
                  />
                </svg> 
                :
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                className="Hawkins-Icon Hawkins-Icon-Standard"
                data-name="Add"
                {...props}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                }
        </button>
)}