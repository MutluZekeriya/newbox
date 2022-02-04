import React from 'react';
import BalonluNaylon from '../img/balonlu-naylon.png'

const ProductBalonluNylon = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={BalonluNaylon} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Balonlu Naylon</h2>
                    <p>
                        Ürünleri darbe çizilme, çarpma, tozlanma, nemlenme, sürtünme ve ezilmelerden koruyan malzemedir. 
                        Balonlu Naylon ürünümüzün 100cm, 120cm ve 150cm ebatlarımız bulunmaktadır. Değişik gramlarda üretilmektedir.
                        Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz..
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBalonluNylon;