import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.instagram.com/d_huy02/'>
                    <InstagramIcon />
                </a>
                <a href='https://www.facebook.com/Duc.Huy2102'>
                    <FacebookIcon />
                </a>
                <a href='https://github.com/DucHuy2102'>
                    <GitHubIcon />
                </a>
                <a href=''>
                    <LinkedInIcon />
                </a>
            </div>
            <p>&copy; 2023 duchuytv2102gmail.com</p>
        </div>
    );
}

export default Footer;
