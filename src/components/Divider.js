import React from 'react';
import { Link } from 'react-router-dom';

const Divider = () => {
    return (
        <div id="divider" className="container-fluid py-4 bg-warning">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-9 col-sm-8">
                        <p className="mt-2">NewBox Firması olarak kutu, ambalaj ve paketleme malzemelerini yıllardır kaliteli ve uygun fiyalarla sizlere sunmaktan memnuniyet duymaktayız... </p>
                    </div>
                    <div className="col-md-3 col-sm-4 align-self-center">
                        <Link id="btn-divider" className="btn btn-light" to="/iletisim"> Fiyat Teklifi Al</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divider;
