import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className="heighting">
            <div className="row offset-md-1 d-flex justify-content-center">
                <div>&copy; remonroy@gmail.com ({(new Date()).getFullYear()})</div>
            </div>
        </section>
    );
};

export default Footer;