import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>Braedon &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;