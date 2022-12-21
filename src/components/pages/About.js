import React from 'react'

function About() {
    return (
        <div>
            <div className="grid grid-cols-12" id='aboutme'>
                <br></br>
                <img className="max-w-full h-auto rounded-full" src='https://i.pinimg.com/originals/d3/1f/69/d31f69bdc8ea5669300cfd208498175c.jpg'></img>
                <p
                    className="my-4 mx-1 px-2 text-lg col-span-12 md:col-start-3 md:col-end-11">
                    Hi there! My name is Jonathan and I am a budding programmer. I have always been interested in technology and how it can be used to make our lives easier and more efficient. I decided to pursue a career in coding because I wanted to be able to build and create my own software and websites.

                    I have been studying how to code for the past 5 months, and it has been a challenging but rewarding journey so far. I have learned a variety of programming languages, including HTML, CSS, and JavaScript, and I am constantly working to improve my skills and expand my knowledge.

                    One of the things I love most about coding is the sense of accomplishment I feel when I am able to solve a problem or build something new. I am excited to see where my coding journey will take me and to continue learning and growing as a developer. I am determined to succeed and make a positive impact in the tech industry.
                </p>
                <br></br>
            </div>
        </div>
    )
}

export default About