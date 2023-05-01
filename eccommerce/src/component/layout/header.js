import React from 'react';
import logo from '../../img/4c1e9d4c49f1ee74f3bb871a181fea10.png'
import { FaUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <div className='w-full h-28'>
            <div className='h-4/5 container flex justify-between'>
                
                <div className='logo h-full w-1/5'>
                    <Link to="/">
                    <img className='w-full h-full object-contain' src={logo}  />

                    </Link>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center'>
                    <ul className='flex justify-end gap-10 '>
                        <Link to='/register'>
                        <li className='flex flex-col items-center' >
                            <FaUser />
                            <p>Бүртгүүлэх</p>
                        </li>
                        </Link>
                       
                        <li className='flex flex-col items-center'>
                            <BsCart/>
                            <p>сагс</p>
                        </li>
                        <Link to="/login">
                            <li className='flex flex-col items-center' >
                                 <FaUser />
                                 <p>нэвтрэх</p>
                            </li>
                        </Link>
                        
                    </ul>
                </div>

            </div>
            <div>

            </div>
        </div>
     );
}

export default Header;