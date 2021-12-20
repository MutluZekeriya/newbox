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
                    <p>Streç Film istenilen boyutlarda ve istediğiniz kalitede sizlere sunmaktayız. 
                        Ürünlerimiz geri dönüşüme uygun olan malzemelerden üretilmiştir.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductStrencFilm;