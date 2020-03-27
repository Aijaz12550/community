import React, {useState} from "react";
import Link from "next/link";
import "../../styles/landingpage/index.scss";

export const Header = () => {
    const [isShow, setShow] = useState(false)
    const [menuclass, setMenulass] = useState('close-small-menu')
  return (
    <div className="header-container">
      <div className="lg">
        <p className='hdng'>WeNeibours</p>
        <p className='hdng'>whyWeNeibours</p>
        <p className='hdng'>Contact Us</p>
        <Link href="/signIn">
          <p className='hdng'>SignIn</p>
        </Link>
        
        <Link href='/invitationCode'>
        <button className='get-btn'>
            Get Started
        </button>
        </Link>
      </div>

     { menuclass === 'close-small-menu' ?<div onClick={()=>setMenulass('sm')} className="toggle-container">
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </div> 
:
      <div onClick={()=>setMenulass('close-small-menu')} className='close'>
          <p className='cross'>X</p>
      </div>}

      <div className={menuclass}>
      <p className='sm-headings' >WeNeibours</p>
        <p className='sm-headings'>whyWeNeibours</p>
        <p className='sm-headings'>Contact Us</p>
        <Link href="/signIn">
          <p className='sm-headings'>SignIn</p>
        </Link>
        <Link href='/invitationCode'>
        <button className='get-btn'>
            Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};
