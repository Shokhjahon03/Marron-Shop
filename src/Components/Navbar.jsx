import React from 'react'
import { NavLink } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import imgaccount from '../assets/account.svg'
import shop from '../assets/shop.svg'

const Navbar = () => {
    let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}
  return (
    <>
        
<nav id="navbar" className='z-50'>
    <div className="container flex justify-center">
        <div className="navbar w-[1170px] h-[21px] flex justify-between items-center">
            <h1 className='text-[#122947] text-[29px]'>MAROON</h1>
            <div className=' flex justify-between items-center w-[370px]'>
                <ul className='w-[255px] flex justify-between items-center'>
                    <NavLink>Каталог</NavLink>
                    <NavLink>О нас</NavLink>
                    <NavLink>Контакты</NavLink>
                </ul>
                <div className=' flex justify-between items-center w-[64px]'>
                    <button><img src={imgaccount} alt="alt" /></button>
                    <button><img src={shop} alt="alt" /></button>
                </div>
            </div>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
