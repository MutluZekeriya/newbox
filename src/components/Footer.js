import React from 'react';
import About from './About';

const Footer = () => {
    return (
        <footer>
            <About />
            <div className="container-fluid py-4 text-center footer">
                <div className="container">
                    <div className="row g-0">
                        <small> &copy; NexBox A.Ş. Tüm Hakları Saklıdır. İzinsiz ürün resimleri ve site içerikleri kullanılamaz.</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
