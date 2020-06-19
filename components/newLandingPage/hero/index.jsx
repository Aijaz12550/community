import React from 'react'
import "../../../styles/newLandingPage/hero.scss"
import Link from 'next/link'

export const Hero = () => {
    return(
        <div className='hero-part1-container'>
            <span className='main-heading'>
            WeNeighbors Makes all your communication easy and simple 
            </span>

            <span className='sub-heading-1'>
            with your community residents or homeowners
            </span>

            <span className='sub-heading-2' >
            Keep communications organized in WeNeighbors, the smart alternative to email
            </span>

                <Link href='/invitationCode' >
            <div className='landing-page-btn'>
                Get Started &nbsp; &nbsp; &gt;
            </div>
                </Link>
        </div>
    )
}