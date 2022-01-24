import React from 'react';
import KilitliPoset from '../img/kilitli-poset.png'

const ProductKilitliPoset = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KilitliPoset} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Kilitli Poşet </h2>
                    <p>
                        Küçük ürünleri koyabileceğiniz kilitli poşettir. Baskılı ve baskısız istenilen ebatlarda üretilmektedir. 
                        Daha fazla bilgi için bizimle iletişime geçebilirsiniz.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductKilitliPoset;