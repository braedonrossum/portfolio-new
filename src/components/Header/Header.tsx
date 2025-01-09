import "./Header.scss";
import logoBlack from "../../assets/braedon-logo-black.svg";
import logoWhite from "../../assets/braedon-logo-white.svg";
import sunIcon from "../../assets/sun-icon.svg"
import moonIcon from "../../assets/moon-icon.svg"
import { Link } from "react-router-dom";
interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className="header">
            <Link to="/">
            <img
                className="header-logo"
                src={darkMode ? logoWhite : logoBlack}
                alt="braedon logo"
            />
            </Link>
            <nav className="header-nav">
                <ul className="header-nav__list">
                    <a href="https://drive.google.com/file/d/1HcsUuUylDSw941ba7hWhh2HWGf8kAJ6h/view?usp=sharing">
                    <button className="resume-button">resume</button>
                    </a>
                    <li className="header-nav__list-item">
                        <p>home</p>
                    </li>
                    <li className="header-nav__list-item">
                        <p>about</p>
                    </li>
                    <li className="header-nav__list-item">
                        <p>projects</p>
                    </li>
            <button className="header__darkmode-button" onClick={toggleDarkMode}><img className="darkmode-img" src={ darkMode ? moonIcon : sunIcon } alt="" /></button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
