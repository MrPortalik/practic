import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header>
        <div className="container">
             <div className="linkContainer">
                <a href="" className="logo" tabIndex={"0"}></a>
               <nav>
                    <ul>
                        <li>
                            <a href="">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Solutions
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Configure
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="menuContainer">
                <input type="checkbox" name="themeChanger" className="toggler menuToggler _off" tabIndex={"0"}/>

                <a href="tel:555818282" className="contacts">
                    <Image src="/images/headphones.svg" 
                    alt="headphones" 
                    width={15} 
                    height={15}
                    className='img'/>
                    555&nbsp;818&nbsp;282
                </a>

                <button className="requestBtn formBtn" tabIndex={"0"}>
                        <span>request a quote</span>
                        <Image 
                        src="/images/arrow.svg" 
                        alt="Arrow"
                        width={15} 
                        height={15}
                        className='img'/>
                </button>

                <div className="menuColumn _off">
                    <button className="burger clickable" tabIndex={"0"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="list">
                        <ul>
                            <li>
                                <a href="">Products</a>
                            </li>
                            <li>
                                <a href="">Solutions</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Configure</a>
                            </li>
                            <li>
                                <a href="">Contacts</a>
                            </li>
                            <li>
                                <a className="formBtn" tabIndex={"0"}>Request a quote</a>
                            </li>
                            <li className="togglerParent">
                                <input type="checkbox" name="themeChanger" className="toggler _off" tabIndex={"0"}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
