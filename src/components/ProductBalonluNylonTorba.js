import React from 'react';
import BalonluNaylonTorba from '../img/balonlu-naylon-torba.png'

const ProductBalonluNylonTorba = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={BalonluNaylonTorba} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h2> Balonlu Patpat ( Naylon ) Torba </h2>
                        <p> Rulo halinde üretilir ve daha sonra kesimi yapılır. Ürünlerin  korumasında kullanılır.
                            Korga firmaları, e-ticaret firmaları, sağlık sektörü ve daha farklı bir çok sektörde ambalaj maalzemesi
                            olarak kullanılır.
                            Her türlü ölçüde üretimi yapılmaktadır. 
                            Daha fazla bilgi almak bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBalonluNylonTorba;