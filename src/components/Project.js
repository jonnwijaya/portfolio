import React from 'react'

function Project(props) {
    return (

        <div className="col-span-12 my-1 hover: rounded-lg md:col-span-4 md:m-5 md:min-w-min">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 text-center">{props.name}</h5>

            <a href={props.url} rel="noreferrer" target="_blank" className="">
                <img className="rounded-t-lg transition duration-300 hover:opacity-70" src={props.img} alt="" />
            </a>
            <div className="p-3">
            </div>
        </div>
    )
}

export default Project