import React from 'react';
import HısırPosetler from '../img/hisir-posetler.png'

const ProductHisirPoset = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={HısırPosetler} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Hışır Poşetler </h2>
                    <p>
                        İstenilen ebatlarda ve kalınlıklarda üretilmektedir. Her renk mevcuttur. 
                        Daha fazla bilgi için bizimle iletişime geçebilirsiniz...
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductHisirPoset;