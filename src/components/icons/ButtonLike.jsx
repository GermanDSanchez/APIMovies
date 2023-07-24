import { useState } from "react"
import { useLocalStorage } from "../../useLocalStorage"

export function ButtonLike (props) {

  const [buttonHover, setButtonHover] = useState(false)

  const [buttonClick, setButtonClick] = useLocalStorage("buttonClick", false);

    return (
      <button onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} onClick={() => buttonClick ? setButtonClick(false) : setButtonClick(true)} className="rounded-full bg-button text-white border-2 border-borderbutton p-1 h-9 scale-90 hover:border-white">
        {buttonHover && <div className={`absolute -top-9 p-0.5 px-1 -left-[2rem] w-24 text-base font-semibold inline-block whitespace-nowrap bg-white text-black rounded-md`}>{buttonClick ? 'Votado' : 'Me gusta'}</div>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          className="Hawkins-Icon Hawkins-Icon-Standard"
          data-name="RateUp"
          {...props}
          >
          <path
            fill="#fff"
            fillRule="evenodd"
            d={buttonClick ? "m13.407 6.256-.094-.752A2.859 2.859 0 0 0 10.476 3a.476.476 0 0 0-.476.476v3.237a1 1 0 0 1-.152.53l-1.94 3.105a2 2 0 0 1-1.147.863l-2.036.582a1 1 0 0 0-.725.961v5.562c0 .378.306.684.684.684 1.19 0 2.36.31 3.393.901L8.25 20a7.59 7.59 0 0 0 3.766 1H16.5a1.5 1.5 0 0 0 1.118-2.5H18a1.5 1.5 0 0 0 .787-2.777 1.5 1.5 0 0 0-.287-2.973h-.17A1.499 1.499 0 0 0 17.5 10h-4.375l.282-2.256a5.998 5.998 0 0 0 0-1.488Z" : 
            "M10.696 8.773A2 2 0 0 0 11 7.713V4h.838c.877 0 1.59.553 1.77 1.311C13.822 6.228 14 7.227 14 8c0 .585-.102 1.192-.246 1.75L13.432 11H17.5a1.5 1.5 0 0 1 1.476 1.77l-.08.445.28.354c.203.256.324.578.324.931 0 .353-.12.675-.324.93l-.28.355.08.445a1.496 1.496 0 0 1-.577 1.47L18 18v.5a1.5 1.5 0 0 1-1.5 1.5h-3.877a9.002 9.002 0 0 1-2.846-.462l-1.493-.497A10.531 10.531 0 0 0 5 18.5v-4.747l2.036-.581a3 3 0 0 0 1.72-1.295l1.94-3.105ZM10.5 2A1.5 1.5 0 0 0 9 3.5v4.213l-1.94 3.105a1 1 0 0 1-.574.432l-2.035.581A2 2 0 0 0 3 13.754v4.793c0 1.078.874 1.953 1.953 1.953.917 0 1.828.148 2.698.438l1.493.498a11 11 0 0 0 3.479.564H16.5a3.5 3.5 0 0 0 3.467-3.017 3.491 3.491 0 0 0 1.028-2.671c.32-.529.505-1.15.505-1.812 0-.662-.185-1.283-.505-1.812A3.5 3.5 0 0 0 17.5 9h-1.566c.041-.325.066-.66.066-1 0-1.011-.221-2.194-.446-3.148C15.14 3.097 13.543 2 11.838 2H10.5Z"}
            clipRule="evenodd"
          />
        </svg>
      </button>
      
)}