import React from 'react';
import KartonBardak from '../img/karton-bardak.png'

const ProductKartonBardak = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KartonBardak} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h2> Karton Bardak </h2>
                        <p>
                            Sıcak ve soğuk içeçekler için kullanılır. Geri dönüşüme uygundur. Baskılı ve baskısız üretilmektedir. Farklı ebatları mevcuttur.
                            Her türlü renkte üretilmektedir.  Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz..
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductKartonBardak;