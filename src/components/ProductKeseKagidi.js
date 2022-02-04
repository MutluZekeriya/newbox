import React from 'react';
import KeseKagidi from '../img/kese-kagidi.png'

const ProductKeseKagidi = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KeseKagidi} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Kese Kağıdı</h2>
                    <p>                        
                    Kese kağıdı pastaneler, şarküteriler, fırınlar ve resturantlarda kullanılır. 
                    Farklı ebatlarda baskılı ve baskısız olarak üretilmektedir.
                    Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz...
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductKeseKagidi;