import React from 'react';
import HisirAtletPoset from '../img/hisir-atlet-poset.png'

const ProductAtletPoset = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={HisirAtletPoset} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Hışır Atlet Poşet</h2>
                    <p>
                        İstenilen ebatlarda baskılı yada baskısız olarak üretilebilir. Her renk üretilebilir. 
                        Doğa da çözülebilen hammaddeden üretilmektedir. Daha fazla bilgi için bizimle iletişime geçebilirsiniz.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductAtletPoset;