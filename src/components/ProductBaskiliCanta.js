import React from 'react';
import BaskiliCanta from '../img/baskili-canta.png'

const ProductBaskiliCanta = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={BaskiliCanta} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Kraft Çanta </h2>
                    <p>
                    Kraft ve karton çantaları ihtiyacınıza göre düz ve burgu saplı, baskılı ya da baskısız, her renkte üretilir. 
                    İstediğiniz ebatlarda üretimi yapılmaktadır.
                    Kraft ve karton çantalar hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBaskiliCanta;