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
import Cuval from '../img/Cuval-2.png';
import Doypak from '../img/doypak-kilitli-torba.png'
import HısırPosetler from '../img/hisir-posetler.png'
import KilitliPoset from '../img/kilitli-poset.png'
import OfsetSivamaliKutular from '../img/ofset-sivamali-kutular.png'
import YumusakSapliPoset from '../img/yumusak-sapli-posetler.png'
import KartonBardak from '../img/karton-bardak.png'
import KeseKagidi from '../img/kese-kagidi.png'
import HisirAtletPoset from '../img/hisir-atlet-poset.png'

const Products = () => {
    return (
        <div id="products" className="container pt-5">
            <h2 className="display-4 text-uppercase mb-4">ÜRÜNLERİMİZ</h2>
            <div className="title-bottom-line justify-content-center"></div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={KartonKutu} className="card-img-top product-img img-fluid" alt="Koli" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Koli </h5>
                            <Link className="btn btn-warning" to="/koli">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={RuloKarton} className="card-img-top product-img img-fluid" alt="Rulo Karton" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Rulo Karton </h5>
                            <Link className="btn btn-warning" to="/rulo-karton">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={BalonluNaylon} className="card-img-top product-img img-fluid" alt="Balonlu Naylon" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Balonlu Naylon </h5>
                            <Link className="btn btn-warning" to="/balonlu-naylon">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={BalonluNaylonTorba} className="card-img-top product-img img-fluid" alt="Balonlu Patpat ( Naylon ) Torba" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Balonlu Patpat ( Naylon ) Torba </h5>
                            <Link className="btn btn-warning" to="/balonlu-patpat-naylon-torba">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={BaskiliCanta} className="card-img-top product-img img-fluid" alt="Kraft Çanta" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Kraft Çanta </h5>
                            <Link className="btn btn-warning" to="/kraft-canta">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={StrecFilm} className="card-img-top product-img img-fluid" alt="Streç Film" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Streç Film </h5>
                            <Link className="btn btn-warning" to="/strec-film">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={KoliBandi} className="card-img-top product-img img-fluid" alt="Koli Bandı" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Koli Bandı </h5>
                            <Link className="btn btn-warning" to="/koli-bandi">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={Cuval} className="card-img-top product-img img-fluid" alt="Çuval" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Çuval</h5>
                            <Link className="btn btn-warning" to="/cuval">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={Doypak} className="card-img-top product-img img-fluid" alt="Doypak" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Doypak </h5>
                            <Link className="btn btn-warning" to="/doypak">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={HısırPosetler} className="card-img-top product-img img-fluid" alt="Hışır Poşetler" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Hışır Poşetler </h5>
                            <Link className="btn btn-warning" to="/hisir-posetler">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={KesimliKutu} className="card-img-top product-img img-fluid" alt="Kesimli ve Kilitli Kutular" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Kesimli ve Kilitli Kutular  </h5>
                            <Link className="btn btn-warning" to="/kesimli-kilitli-kutular">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={KilitliPoset} className="card-img-top product-img img-fluid" alt="Kilitli Poşet" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Kilitli Poşet  </h5>
                            <Link className="btn btn-warning" to="/kilitli-poset">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={OfsetSivamaliKutular} className="card-img-top product-img img-fluid" alt="Kilitli Poşet" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Ofset Sıvamalı Kutular  </h5>
                            <Link className="btn btn-warning" to="/ofset-sivamali-kutular">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={YumusakSapliPoset} className="card-img-top product-img img-fluid" alt="Kilitli Poşet" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Yumuşak Saplı Poşetler  </h5>
                            <Link className="btn btn-warning" to="/yumusak-sapli-posetler">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={KartonBardak} className="card-img-top product-img img-fluid" alt="Kilitli Poşet" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Karton Bardak </h5>
                            <Link className="btn btn-warning" to="/karton-bardak">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={KeseKagidi} className="card-img-top product-img img-fluid" alt="Kilitli Poşet" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Kese Kağıdı </h5>
                            <Link className="btn btn-warning" to="/kese-kagidi">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>  
                <div className="col-sm-12 col-md-6 col-lg-4 p-0 products-item">
                    <div className="card mb-5 border-0">
                        <img src={HisirAtletPoset} className="card-img-top product-img img-fluid" alt="Kilitli Poşet" />
                        <div className="card-body">
                            <h5 className="card-title text-center"> Hışır Atlet Poşet </h5>
                            <Link className="btn btn-warning" to="/atlet-poset">Ürün Detayı</Link>
                        </div>
                    </div>
                </div>              
                

            </div>
        </div>
    )
}

export default Products;
