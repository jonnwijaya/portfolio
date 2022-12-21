import React from 'react'

const resume = ".../public/resume"

function Resume() {
    return (
        <div className='grid grid-cols-12'>
            <h2 className="header text-gray-500 col-span-12 text-center lg:text-4xl md:text-3xl text-2xl font-extrabold p-5">Click the button to download my resume</h2>

            <div className='col-span-12 m-auto mt-4'>
                <a href={resume}
                    download className="">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-gray-300 hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                    >
                        Download Resume
                    </button>

                </a>
            </div>

            <div className="col-span-12 md:col-start-4 md:col-end-10 text-gray-700 mt-1 px-8 py-3">
                <h2 className="header text-gray-500 col-span-12 text-center lg:text-4xl md:text-3xl text-2xl font-extrabold p-5">Proficiencies:</h2>
                <ul className="header text-gray-500 col-span-12 text-center lg:text-3xl md:text-3xl text-2xl p-5">
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Handlebars</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bulma</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume