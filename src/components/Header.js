import React from 'react'

const click = "block py-2 pl-3 pr-4 text-white bg-gray-400 rounded "
const notclicked = "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300"

function Header({ currentPage, handlePageChange }) {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-800">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#about" className="flex items-center">
                    <span
                        className="self-center text-2xl text-sky-50 font-semibold whitespace-nowrap"
                        onClick={() => handlePageChange('About')}
                    >
                        Jonathan Wijaya
                    </span>
                </a>

                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg bg-skye-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <a
                                href="#about"
                                className={currentPage === 'About' ? click : notclicked}
                                onClick={() => handlePageChange('About')}
                            >About Me</a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className={currentPage === 'Portfolio' ? click : notclicked}
                                onClick={() => handlePageChange('Portfolio')}
                            >Portfolio</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={currentPage === 'Contact' ? click : notclicked}
                                onClick={() => handlePageChange('Contact')}
                            >Contact</a>
                        </li>
                        <li>
                            <a
                                href="#resume"
                                className={currentPage === 'Resume' ? click : notclicked}
                                onClick={() => handlePageChange('Resume')}
                            >Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header