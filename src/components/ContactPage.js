import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <section id="contact">
            <div className="container-fluid bg-light">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6 pt-2">
                            <h1 className="lead display-6 page-title">İletişim</h1>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 pt-3">
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb justify-content-end page-title-link">
                                    <li className="breadcrumb-item"><Link to="/newbox"> Newbox </Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">İletişim</li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container p-0">
                <div className="row g-0">
                    <iframe title="NewBox Ambalaj Şirketi adresidir." src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.526433616419!2d28.812936514784397!3d41.03561552569221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4ff17b24509%3A0xcb074975a00a330d!2zMTUgVGVtbXV6LCAxNDgxLiBTay4gTm86NzIsIDM0MjEyIEJhxJ9jxLFsYXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1630668204540!5m2!1str!2str" width="800" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="row g-0 py-5">
                    <div className="col-lg-6 col-md-12">
                    <div className="card p-0 border-0 mb-5" style={{width:'100%'}}>
                            <div className="card-body">
                                <h5 className="card-title">İletişim Bilgileri</h5>
                                <div className="title-bottom-line"></div>
                                <p className="card-text"> <span>Adres :  </span> &nbsp;&nbsp; 15 Temmuz Mah. 1481 Sokak No:72 Bağcılar / İstanbul </p>
                                <p className="card-text"> <span>Telefon :  </span> &nbsp;&nbsp; 0212 212 00 00 </p>
                                <p className="card-text"> <span>Email :  </span> &nbsp;&nbsp; info@newbox.com </p>
                                <p className="card-text"> <span>Twitter :  </span> &nbsp;&nbsp; @newbox </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 px-3">
                        <h5>Bizimle Temasa Geçin</h5>
                        <div className="title-bottom-line"></div>
                        <form className="row" action="https://formspree.io/info@newbox.com" method="POST">
                            <div className="col-6">
                                <div className="input-group">
                                    <div className="input-group-text rounded-0 bg-warning border-warning">
                                        <i className="bi bi-person-fill"></i>
                                    </div>
                                    <input type="text" placeholder="NAME *" required
                                        className="form-control rounded-0 border-warning bg-transparent" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group">
                                    <div className="input-group-text rounded-0 bg-warning border-warning">
                                        <i className="bi bi-at"></i>
                                    </div>
                                    <input type="email" placeholder="EMAIL *" required
                                        className="form-control rounded-0 border-warning bg-transparent" />
                                </div>
                            </div>
                            <div className="col-12 py-4">
                                <div className="input-group">
                                    <div className="input-group-text rounded-0 bg-warning border-warning">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <textarea type="text" placeholder="MESSAGE *" rows="5" required
                                        className="form-control rounded-0 border-warning bg-transparent"></textarea>
                                </div>
                            </div>
                            <div className="col-7 py-2">
                                <div className="input-group justify-content-start">
                                    <input type="checkbox" className="btn-check" id="btncheck1" required/>
                                    <label className="btn btn-outline-warning py-2 w-100" for="btncheck1">Robot Olmadığınızı Doğrulayın</label>
                                </div>
                            </div>
                            <div className="col-5 py-2 px-2 justify-content-center">
                                <button type="submit" className="btn btn-outline-warning rounded-0 text-uppercase w-100 py-2"> send
                                    MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage;
