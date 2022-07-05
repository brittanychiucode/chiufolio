import React from 'react'
import Button from '@material-ui/core/Button'
import Typewriter from 'typewriter-effect';
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <section className='about'>
            <h2>Hi, My name is Brittany!</h2>
            <div className='prompt'> I am a
            <Typewriter
                options={{
                    strings: ['Front-End Developer', 'Back-End Developer', 'Full Stack Developer', 'Software Engineer'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>
            <Button variant='contained' href="https://github.com/brittanychiucode/chiufolio/raw/master/public/BChiu_Resume.pdf" target="_blank" download>Download Resume</Button>
            
            
        </section>
        <section className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Full Stack Technologies</h2>
                    <span>Angular, AngularJS, React, HTML, CSS, SpringBoot, NodeJS, MongoDB, PostGres</span>
                </li>
                <li className='item'>
                    <h2>Automation, Orchestration, and Other Services</h2>
                    <span>AWS, Jenkins, Puppet, Git</span>
                </li>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>Python, JavaScript, TypeScript, Java, C++</span>
                </li>
            </ol>
        </section>
    </div>
  )
}
