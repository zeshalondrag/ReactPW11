import React from "react";

class Header extends React.Component {
    render() {
        return(
            <header>
            <nav class="navbar">
                <div class="navbar-items">
                    <img src='img/logo.png' alt="Not Found" class="img-logo"/>
                    <nav class="dropdown-menu">
                        <div class="dropdown">
                            <button class="dropbtn">Меню</button>
                            <div class="dropdown-content">
                                <a href="#">Home</a>
                                <a href="#">Videos</a>
                                <a href="#">Favorite Subjects</a>
                                <a href="#">About Us</a>
                            </div>
                        </div>
                    </nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Favorite Subjects</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <button class="button-reg">✏️ Register</button>
                </div>
            </nav>
            </header>
        )
    }
}

export default Header;