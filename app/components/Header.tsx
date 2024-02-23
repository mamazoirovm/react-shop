import Link from 'next/link'
import React from 'react'
import Products from './Products'


const Header = () => {
  return (
    <div>
   <nav className="[position:initial]  z-[100] xl:relative py-4 px-1 md:px-14 lg:px-30 w-full border-b border-grayshade-300 bg-lightColor-100 dark:bg-grayshade-500">
  <div className="ham-container z-[99] xl:hidden w-10 h-10 absolute left-2 top-2 cursor-pointer label bad p-1 flex justify-around items-center flex-col">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className="text-purpleshade-300 text-2xl font-bold"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
    </svg>
  </div>
  <img
    className="absolute top-0 left-0 max-h-[67px] lg:max-h-[81px] w-full h-full object-cover"
    src="https://react-shop-front-siza.liara.run/assets/AbstractDesign-2cGD1W79.svg"
    alt="bg-header"
  />
  <div className="w-full flex items-center justify-end min-[490px]:justify-around">
    <a
      className="lg:text-5xl md:text-4xl sm:text-xl font-extrabold xl:mr-8 z-20"
      href="/"
    >
      <h1>React Shop</h1>
    </a>
    <div className="z-[97] hidden: xl:block bg-lightColor-100 dark:bg-grayshade-500 xl:border-2 border-grayshade-50 dark:border-grayshade-300 xl:rounded-full xl:px-8 flex flex-col items-center justify-center h-screen top-0 left-0 fixed xl:h-min xl:[position:initial]">
      
    </div>
    <div className="flex items-center justify-between text-md xl:text-xl">
      <div className="flex items-center font-semibold z-20">
        
        
      </div>
      <div className=" justify-start items-center z-[98] xl:flex hidden">
        <div className="relative text-xl xl:text-2xl bad">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 256 256"
            className="text-sky-500 cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
              opacity="0.2"
            />
            <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z" />
          </svg>
          <ul className="hidden z-50 w-max absolute top-12 -right-12 bg-white dark:bg-grayshade-500 border border-grayshade-300 p-5 rounded-xl">
            <li className="false cursor-pointer my-2 w-full flex items-center justify-start">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="mr-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z"
                  opacity="0.2"
                />
                <path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z" />
              </svg>
              <span>dark</span>
            </li>
            <li className="false cursor-pointer my-2 w-full flex items-center justify-start">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="mr-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                />
                <circle
                  cx={256}
                  cy={256}
                  r={80}
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                />
              </svg>
              <span>light</span>
            </li>
            <li className="text-sky-500 cursor-pointer my-2 w-full flex items-center justify-start">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                className="mr-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                  opacity="0.2"
                />
                <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z" />
              </svg>
              <span>system</span>
            </li>
          </ul>
        </div>
        <a
          className="text-xl xl:text-2xl bad ml-1 xl:ml-4"
          href="https://github.com/mamazoirovm/react-shop"
          target="_blank"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 496 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</nav>
<Products/>


    </div>
  )
}

export default Header
