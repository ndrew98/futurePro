// src/components/SecondaryButton.jsx
import { Link } from "react-router-dom";

function SecondaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="bg-white  px-6 py-3 rounded-full flex shadow-[5px_5px_0px_0px_rgba(28,35,35,1.00)] outline-1 tems-center outline-offset-[-1px] outline-neutral-800 text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight "
    >
      {children}
      <svg
        className="h-5 w-5 ml-2"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0.25C8.07 0.25 6.19 0.82 4.58 1.89C2.98 2.96 1.73 4.49 0.99 6.27C0.25 8.05 0.06 10.01 0.44 11.9C0.81 13.79 1.74 15.53 3.11 16.89C4.47 18.26 6.21 19.19 8.1 19.56C9.99 19.94 11.95 19.75 13.73 19.01C15.51 18.27 17.04 17.02 18.11 15.42C19.18 13.81 19.75 11.93 19.75 10C19.75 7.41 18.72 4.94 16.89 3.11C15.06 1.28 12.59 0.25 10 0.25ZM13.75 11.5C13.75 11.7 13.67 11.89 13.53 12.03C13.39 12.17 13.2 12.25 13 12.25C12.8 12.25 12.61 12.17 12.47 12.03C12.33 11.89 12.25 11.7 12.25 11.5V8.81L7.53 13.53C7.46 13.6 7.38 13.66 7.29 13.69C7.2 13.73 7.1 13.75 7 13.75C6.9 13.75 6.8 13.73 6.71 13.69C6.62 13.66 6.54 13.6 6.47 13.53C6.4 13.46 6.34 13.38 6.31 13.29C6.27 13.2 6.25 13.1 6.25 13C6.25 12.9 6.27 12.8 6.31 12.71C6.34 12.62 6.4 12.54 6.47 12.47L11.19 7.75H8.5C8.3 7.75 8.11 7.67 7.97 7.53C7.83 7.39 7.75 7.2 7.75 7C7.75 6.8 7.83 6.61 7.97 6.47C8.11 6.33 8.3 6.25 8.5 6.25H13C13.2 6.25 13.39 6.33 13.53 6.47C13.67 6.61 13.75 6.8 13.75 7V11.5Z"
          fill="#1C2323"
        />
      </svg>
    </Link>
  );
}

export default SecondaryButton;
