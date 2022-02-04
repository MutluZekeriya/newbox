import React from 'react';
import StrecFilm from '../img/strec-film.png'

const ProductStrencFilm = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={StrecFilm} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Streç Film</h2>
                    <p>                        
                        Taşıma ve depolama esnasında paletli ürünlerin korunması için kullanılan bir malzemedir. 
                        17 ve 23 micron standart kalınlıklarda çeşitlerimiz vardır. Şeffaf, mavi, beyaz ve siyah renkleri mevcuttur. 
                        Ürün hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductStrencFilm;