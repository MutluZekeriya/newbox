import React from 'react'
import { Link } from 'react-router-dom'
import Company from '../img/company.jpg'

const AboutPage = () => {
    return (
        <section id="about-page">

            <div className="container-fluid p-0">
                
                <div className="container-fluid bg-light">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6 pt-2">
                                <h1 className="lead display-6 page-title">Hakkımızda</h1>                                
                            </div>
                            <div className="col-md-6 col-sm-6 col-6 pt-3">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb justify-content-end  page-title-link">
                                        <li className="breadcrumb-item"><Link to="/"> Newbox </Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Hakkımızda</li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1> Tarihimiz   </h1>
                            <div className="title-bottom-line"></div>
                            <p>2000 Yılında kurulan Sahra Mühendislik sektörde oldukça
                                kaliteli bir nokta yakalamıştır. Kuruluş yıllarında yalnızca
                                güneş enerjisi ürünleri satmak hedefi olan firmanın şimdi
                                satış öncesi keşif, projelendirme ve satış sonrası destek
                                hizmetlerinde de samimi bir noktaya ulaşmıştır. 2009 Yılında
                                Firmanın ürün yelpazesi oldukça gelişmiş güneş enerjisinde
                                sıcak su üretme, güneş enerjisinden elektirik enerjisi üretme,
                                alternatif enerji kaynakları ve bunun yanında mekanik tesisatlar
                                konusundada bir açılım yaparak bu güne kadar türkiyenin en iyi
                                firmalarıyla çalışarak kalitesini ispatlamıştır. Sahra
                                Mühendislik ilkeleleri kaliteli ürünler satmak ve dürüst
                                hizmet vermektir. Firmamız hakkındaki değerlendirmelerim
                                bu kadar olup sözü uzatmaya gerek yoktur. Ulaştığımız
                                bu noktayı referanslarımızda görebilirsiniz.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid rounded" src={Company} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;
