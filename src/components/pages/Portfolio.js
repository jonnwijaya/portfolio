import React from 'react'
import Project from '../Project'

function Portfolio() {
    return (
        <div>
            <div className="grid grid-cols-12 text-center ">
                <Project
                    name='PWA Text Editor'
                    url='https://github.com/jonnwijaya/pwa-text-editor'
                    deployed='https://jate-jonn.herokuapp.com/'
                    img='https://github.com/jonnwijaya/pwa-text-editor/raw/main/Assets/00-demo.gif'
                />
                <Project
                    name='Employee Tracker'
                    url='https://github.com/jonnwijaya/employee-tracker'
                    img='https://github.com/jonnwijaya/employee-tracker/raw/main/assets/12-sql-homework-video-thumbnail.png'
                />
                <Project
                    name='Note Taker'
                    url='https://github.com/jonnwijaya/note-taker'
                    deployed='https://note-taker-jonn.herokuapp.com/'
                    img='https://github.com/jonnwijaya/note-taker/raw/main/Assets/11-express-homework-demo-02.png'
                />
                <Project
                    name='Password Generator'
                    url='https://github.com/jonnwijaya/password-generator'
                    deployed='https://jonnwijaya.github.io/password-generator/'
                    img='https://github.com/jonnwijaya/password-generator/raw/main/Assets/images/screenshot.png'
                />
                <Project
                    name='Purrfection'
                    url='https://github.com/mecuboi/purrfection'
                    deployed='https://purrfection-pet-store.herokuapp.com/'
                    img='https://github.com/mecuboi/purrfection/raw/main/public/images/demo.gif'
                />
                <Project
                    name='Music Brain'
                    url='https://github.com/Tim-KS/Music-Search-Webpage'
                    deployed='https://tim-ks.github.io/Music-Search-Webpage/'
                    img='https://github.com/Tim-KS/Music-Search-Webpage/raw/main/assets/images/landing-page.jpg'
                />
            </div>
        </div>
    )
}

export default Portfolio