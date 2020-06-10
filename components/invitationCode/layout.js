import React from 'react'
import { Progress } from './progressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/userValidation/index.scss'

export const Layout = ({
    children,
    prog,
}) => {
    return(
      <div className='main-container'>

         <div className='user-validation-container'>
          <Progress val={prog} />
             <div className='layout-children-container'>
             {children}
             </div>
         </div>
        
      </div>
    )
}