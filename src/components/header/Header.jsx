import React, { useState } from "react";
import { Search } from "@material-ui/icons"
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./header.css";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#logo">
                        <img src="https://xemphim.fun/static/skin/logo-full.png" alt="" className="logo" />
                    </a>
                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>

                    <li className="option">
                        <a href="#home"><Search /></a>
                    </li>
                    <li className="option">
                        <a href="#home">Phim Mới</a>
                    </li>
                    <li className="option">
                        <a href="#home">Phim Lẻ</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="#">Đăng Ký</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="" className="sign-up">
                            Đăng Nhập
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">

                <li onClick={closeMobileMenu}>
                    <a href="" className="signup-btn">
                        Đăng Nhập
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Header;
