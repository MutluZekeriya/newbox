import React from 'react';
import { Link } from 'react-router-dom';
import KartonKutu from '../img/karton-kutu.png';
import RuloKarton from '../img/rulo-karton.png';
import BalonluNaylon from '../img/balonlu-naylon.png';
import KesimliKutu from '../img/kesimli-kutu.png';
import BalonluNaylonTorba from '../img/balonlu-naylon-torba.png';
import BaskiliCanta from '../img/baskili-canta.png';
import StrecFilm from '../img/strec-film.png';
import KoliBandi from '../img/koli-bandi.png';

import Product2 from '../img/karton-kutu.png';

const Products = () => {
    return (
        <div id="products" className="container pt-5">
            <h2 className="display-4 text-uppercase mb-4">ÜRÜNLERİMİZ</h2>
            <div className="title-bottom-line justify-content-center"></div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={KartonKutu} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Karton Kutu</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product1#product-details">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={RuloKarton} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Rulo Karton</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product2">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={BalonluNaylon} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Balonlu Naylon</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product3">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={KesimliKutu} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Kesimli Kutu </h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product4">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={BalonluNaylonTorba} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Balonlu Naylon Torba</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product5">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={BaskiliCanta} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Baskılı Çanta</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product6">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={StrecFilm} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Streç Film</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız... </p>
                            <Link className="btn btn-warning w-100" to="/product/product7">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={KoliBandi} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Koli Bandı </h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product8">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0">
                    <div className="card mb-5 border-0">
                        <img src={Product2} className="card-img-top product-img img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Ürün 9</h5>
                            <p className="card-text">Ürünümüzü kalitesi ve sağlamlığı ile sizlere sunmaktayız...</p>
                            <Link className="btn btn-warning w-100" to="/product/product9">Ürünü Detayı</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;
