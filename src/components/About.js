import React from 'react';

const About = () => {
    return (
        <section id="about" className="my-bg-dark padding-tb-50">
            <div className="container p-0">
                <div className="row g-0">
                    <div className="col-lg-6 col-md-12">
                        <div className="card p-0 bg-transparent text-white">
                            <div className="card-body">
                                <h5 className="card-title">Hakkımızda</h5>
                                <div className="title-bottom-line"></div>
                                <p className="card-text">2000 Yılında kurulan Sahra Mühendislik sektörde oldukça
                                    kaliteli bir nokta yakalamıştır. Kuruluş yıllarında yalnızca güneş enerjisi ürünleri
                                    satmak hedefi olan firmanın şimdi satış öncesi keşif, projelendirme ve satış sonrası
                                    destek hizmetlerinde de samimi bir noktaya ulaşmıştır.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card  p-0 bg-transparent text-white">
                            <div className="card-body">
                                <h5 className="card-title">İletişim Bilgileri</h5>
                                <div className="title-bottom-line"></div>
                                <p className="card-text"> <span>Adres :  </span> &nbsp;&nbsp; 15 Temmuz Mah. 1481 Sokak No:72 Bağcılar / İstanbul </p>
                                <p className="card-text"> <span>Telefon :  </span> &nbsp;&nbsp; 0212 212 00 00 </p>
                                <p className="card-text"> <span>Email :  </span> &nbsp;&nbsp; info@newbox.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
