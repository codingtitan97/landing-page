import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import close from "../../assets/close.svg"
import menu from "../../assets/menu.svg"
const Navbar = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    // const ToggleItem = ({ toggle, setToggle }) => (
    //     <><img src={toggle ? close : menu} alt="close" onClick={setToggle(!toggle)} />   </>
    // );


    return (
        <div className='navbar_container'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>

            {windowSize.innerWidth > 700 ? <ul className='nav_items-desktop'>
                <li>
                    Home
                </li>
                <li>
                    Feature
                </li>
                <li>
                    Product
                </li>
                <li>
                    Client
                </li>
            </ul> :
                <div >
                    <img className='navbar_toggle-button' src={toggle ? close : menu} alt="togglebutton" onClick={() => setToggle(!toggle)} />

                    {toggle && <ul className='nav_items-mobile'>
                        <li>
                            Home
                        </li>
                        <li>
                            Feature
                        </li>
                        <li>
                            Product
                        </li>
                        <li>
                            Client
                        </li>
                    </ul>}

                </div>}
        </div>
    )
}

export default Navbar




function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}