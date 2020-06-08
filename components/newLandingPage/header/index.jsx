import React from 'react'
import { Image} from 'react-bootstrap'
import '../../../styles/newLandingPage/header.scss'

export const Header = () => {
    return(
        <div className='header-container'>
            <div className='logo-container'>
               <Image src='/assets/mockup/logoAndTitle.png'  />
            </div>

            <div className='btn-container'>
                <button>
                    whyWeNeighbourse ?
                </button>

                <button>
                    contact us
                </button>

                <button>
                    Sign In
                </button>
            </div>
        </div>
    )
}