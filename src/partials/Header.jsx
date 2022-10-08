import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import Transition from '../utils/Transition';
import { boxStyle, boxStyleMobile } from '../utils/style';
import { Modal, Box } from '@mui/material';
import {isMobile} from 'react-device-detect';




function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Handle light modes
  const [darkMode, setDarkMode] = useState(() => {
    const dark = localStorage.getItem('dark-mode');
    if (dark === null) {
      return true;
    } else {
      return dark === 'true';
    }
  });

  const [formModalOpen, setFormModalOpen] = useState(false);

  const openFormModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFormModalOpen(true);
  }

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);  

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
              </svg> */}
{/* <svg width="300" height="70" viewBox="0 0 300 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M121.303 60.1079C134.075 60.1079 143.544 50.6381 143.544 37.804C143.544 24.9699 134.075 15.5001 121.303 15.5001C108.469 15.5001 98.999 24.9699 98.999 37.804C98.999 50.6381 108.469 60.1079 121.303 60.1079ZM121.241 52.0087C113.764 52.0087 108.407 45.9655 108.407 37.804C108.407 29.6425 113.764 23.537 121.241 23.537C128.717 23.537 134.137 29.6425 134.137 37.804C134.137 45.9655 128.717 52.0087 121.241 52.0087Z" fill="white"/>
<path d="M146.424 69.2039H155.084V56.8059C156.766 58.9241 159.819 60.1079 163.37 60.1079C172.404 60.1079 178.51 53.6908 178.51 43.9095C178.51 34.1282 172.903 27.7112 164.118 27.7112C160.068 27.7112 156.953 29.2064 155.084 31.6362V28.2096H146.424V69.2039ZM162.311 52.6317C157.639 52.6317 154.586 49.1428 154.586 43.9095C154.586 38.6139 157.639 35.125 162.311 35.125C166.859 35.125 169.974 38.6139 169.974 43.9095C169.974 49.1428 166.859 52.6317 162.311 52.6317Z" fill="white"/>
<path d="M203.16 48.9559C202.474 51.6349 200.169 53.0055 196.68 53.0055C192.319 53.0055 189.516 50.2643 188.893 45.8409H211.446C211.508 45.1555 211.57 44.221 211.57 43.0373C211.57 35.8727 207.147 27.7112 196.057 27.7112C185.404 27.7112 180.544 35.8726 180.544 43.8472C180.544 51.7595 186.027 60.1079 196.68 60.1079C204.406 60.1079 210.387 55.7468 211.633 48.9559H203.16ZM196.057 34.0659C200.232 34.0659 202.661 36.8695 202.91 40.3583H189.017C189.765 35.9973 192.132 34.0659 196.057 34.0659Z" fill="white"/>
<path d="M236.295 48.9559C235.61 51.6349 233.304 53.0055 229.816 53.0055C225.454 53.0055 222.651 50.2643 222.028 45.8409H244.581C244.643 45.1555 244.706 44.221 244.706 43.0373C244.706 35.8727 240.282 27.7112 229.193 27.7112C218.539 27.7112 213.679 35.8726 213.679 43.8472C213.679 51.7595 219.162 60.1079 229.816 60.1079C237.541 60.1079 243.522 55.7468 244.768 48.9559H236.295ZM229.193 34.0659C233.367 34.0659 235.796 36.8695 236.046 40.3583H222.152C222.9 35.9973 225.268 34.0659 229.193 34.0659Z" fill="white"/>
<path d="M283.427 60.1079C293.084 60.1079 299.999 53.2547 299.999 43.9095C299.999 34.5643 293.084 27.7112 283.427 27.7112C273.771 27.7112 266.855 34.5643 266.855 43.9095C266.855 53.2547 273.771 60.1079 283.427 60.1079ZM283.427 52.6317C278.755 52.6317 275.577 49.0805 275.577 43.9095C275.577 38.6762 278.755 35.125 283.427 35.125C288.1 35.125 291.277 38.6762 291.277 43.9095C291.277 49.0805 288.1 52.6317 283.427 52.6317Z" fill="white"/>
<path d="M264.811 27.6877C265.85 27.6877 266.755 27.8039 267.434 27.9549V35.7522C266.582 35.4978 265.322 35.3269 264.007 35.3269C258.603 35.3269 256.033 37.8117 256.033 43.9888V59.6094H247.311V28.2095H256.033L256.033 33.4505C257.437 29.574 260.552 27.6877 264.811 27.6877Z" fill="white"/>
<circle cx="29.9995" cy="38.5006" r="30.0001" transform="rotate(-180 29.9995 38.5006)" fill="#7553FF"/>
<circle cx="29.999" cy="38.5003" r="14" transform="rotate(-180 29.999 38.5003)" fill="#03000E"/>
<circle cx="58.9985" cy="30.0003" r="30.0001" transform="rotate(-180 58.9985 30.0003)" fill="#7553FF"/>
<circle cx="58.999" cy="30.0002" r="14" transform="rotate(-180 58.999 30.0002)" fill="#03000E"/>
</svg> */}


            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                {/* <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link> */}
              </li>
              {/* <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/testimonials"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Testimonials
                </Link>
              </li> */}
              {/* 1st level: hover */}
              {/* <Dropdown title="Resources">
                2nd level: hover
                <li>
                  <Link
                    to="/help"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    404
                  </Link>
                </li>
              </Dropdown> */}
            </ul>

            {/* Desktop lights switch */}
            {/* <div className="form-switch flex flex-col justify-center ml-3">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="relative" htmlFor="light-switch-desktop">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                    <circle cx="32" cy="12" r="3" />
                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div> */}

            {/* Desktop CTA on the right */}
            {/* <ul className="flex justify-end flex-wrap items-center">
              <li>
                <a onClick={openFormModal} className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                Request a Demo
                </a>
              </li>
            </ul> */}

            <Modal id="modal" open={formModalOpen} onClose={() => setFormModalOpen(false)}>
              <Box sx={ !isMobile ? boxStyle : boxStyleMobile}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDtftg198Bauew5gnIb3VTpsbo8DMUajvAI9F0717qplmwZA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </Box>
            </Modal>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Mobile lights switch */}
            {/* <div className="form-switch flex flex-col justify-center mr-6 -mt-0.5">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                className="light-switch sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="relative" htmlFor="light-switch-mobile">
                <span
                  className="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10"
                  aria-hidden="true"
                ></span>
                <svg className="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                  <g className="fill-current text-white" fillRule="nonzero" opacity=".88">
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                    <circle cx="32" cy="12" r="3" />
                    <circle fillOpacity=".4" cx="12" cy="12" r="6" />
                    <circle fillOpacity=".88" cx="12" cy="12" r="3" />
                  </g>
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div> */}

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              >
                <div className="py-6 pr-4 pl-20">
                  {/* Logo */}
                  {/* <Link to="/" className="inline-block mb-4" aria-label="Cruip">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_a">
                          <stop stopColor="#3ABAB4" offset="0%" />
                          <stop stopColor="#7F9CF5" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_b">
                          <stop stopColor="#3ABAB4" offset="0%" />
                          <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                        </linearGradient>
                      </defs>
                      <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#menulogo_a)" />
                      <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#menulogo_b)" />
                    </svg>
                  </Link> */}
                  {/* Links */}
                  <ul>
                    {/* <li>
                      <Link to="/about" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonials" className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">
                        Testimonials
                      </Link>
                    </li>
                    <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                      <span className="flex text-gray-600 dark:text-gray-400 py-2">Resources</span>
                      <ul className="pl-4">
                        <li>
                          <Link
                            to="/help"
                            className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          >
                            Help center
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/404"
                            className="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2"
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                    <a onClick={openFormModal}
                        className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                      >
                        Request a Demo
                      </a>
                    </li>
                  </ul>
                
               
              <Modal id="modal" open={formModalOpen} onClose={() => setFormModalOpen(false)}>
                <Box sx={ !isMobile ? boxStyle : boxStyleMobile}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeDtftg198Bauew5gnIb3VTpsbo8DMUajvAI9F0717qplmwZA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                  {/* <iframe className="w-full h-full" src="https://forms.gle/aCYXTHfJ94sEpDbY6" title="Interest Form"></iframe> */}
                  </Box>
              </Modal>
            </div>
              </nav>
            </Transition>


            {/* <InterestFormModal formModalOpen={formModalOpen} setFormModalOpen={setFormModalOpen} /> */}
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
