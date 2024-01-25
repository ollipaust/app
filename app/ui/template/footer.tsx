import React from 'react';
import siteConfig from '~/siteConfig';

const Footer: React.FC = () => {
    return (
        <footer id="Footer" className="footer">
            <p>&copy; {siteConfig.siteYear} {siteConfig.author}. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
