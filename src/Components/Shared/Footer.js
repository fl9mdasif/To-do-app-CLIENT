import React from 'react';
import footer from '../../img/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className=" container mx-auto p-10">
            <div className='footer justify-between'>
                <div>
                    <span className="footer-title">Services</span>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Branding</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Design</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Marketing</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">About us</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Contact</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Jobs</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Terms of use</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Privacy policy</a>
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 -
                    <a target="blank" href="https://www.linkedin.com/in/fl9mdasif/" className=" text-blue-700 link link-hover">fl9mdasif</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;