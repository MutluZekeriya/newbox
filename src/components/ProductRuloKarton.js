import React from 'react';
import RuloKarton from '../img/rulo-karton.png';

const ProductRuloKarton = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={RuloKarton} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Rulo Karton </h2>
                    <p>Karton kutularımız istenilen boyutlarda ve istediğiniz kalitede sizlere sunmaktayız. 
                        Ürünlerimiz geri dönüşüme uygun olan malzemelerden üretilmiştir.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductRuloKarton;