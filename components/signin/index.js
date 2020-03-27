import React from 'react'
import { Container} from '../mainlayout'
import Link from 'next/link'
import '../../styles/signin/index.scss'

export const SignIn = (props) => {
    return(
       <Container>
           <p>
               Welcome Back!
           </p>
           <p>
               Please Sign In to access your community dashboard.
           </p>

           <button className='apple-login-btn'>
               continue with Apple
           </button>

           <button className='google-login-btn'>
               continue with Google
           </button>

           <Link href='#'>
               <a>
                   OR USE YOUR OWN EMAIL
               </a>
           </Link>

           <input className='signin-input' placeholder='Email' type='email' required/>
           <input className='signin-input' placeholder='Password' type='password' required/>

           <p>Forgot password?</p>

           <button className='signinbtn' >
               Sign In
           </button>
       </Container>
    )
}