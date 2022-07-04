import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

export default function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My name is Brittany!</h2>
            <div className='prompt'><p> A developer!</p></div>
            <GitHubIcon />
            <EmailIcon />
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span></span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span></span>
                </li>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span></span>
                </li>
            </ol>
        </div>
    </div>
  )
}
