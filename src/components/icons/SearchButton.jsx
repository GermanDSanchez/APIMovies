export default function SearchButton (props) { 
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      className="search-icon"
      data-name="Search"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm.362 4.85a8 8 0 1 1 1.006-1.729l8.634 5.014-1.004 1.73-8.636-5.014Z"
        clipRule="evenodd"
      />
    </svg>
  )}