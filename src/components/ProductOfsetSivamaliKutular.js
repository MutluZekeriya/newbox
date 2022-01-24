import React from 'react';
import OfsetSivamaliKutular from '../img/ofset-sivamali-kutular.png'

const ProductOfsetSivamaliKutular = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={OfsetSivamaliKutular} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h2> Ofset Sıvamalı Kutular </h2>
                        <p>
                            İstenilen ölçülerde, firmanızın ürünlerine özel baskı yapılarak ürettiğimiz kutulardır. 
                        </p>
                        <ul>
                            <h4> Ofset Sıvamalı Kutu Çeşitlerimiz </h4>
                            <li> Ofset kutu </li>
                            <li> Ofset koli </li>
                            <li> Ofset baskılı kutu </li>
                            <li> Sıvamalı kutu </li>
                            <li> Selefonlu ambalaj  </li>
                            <li> Endüstriyel tasarım vb. Şeklindedir </li>
                        </ul>
                        <p>
                            Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz..
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductOfsetSivamaliKutular;