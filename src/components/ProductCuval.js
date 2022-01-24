import React from 'react';
import Cuval from '../img/Cuval-2.png'

const ProductCuval = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={Cuval} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h2> Çuval </h2>
                        <p>
                            Çuvallar tarım, inşaat, tesktil, gıda, vb. sektörlerinde kullanılır.
                            Ürünlerimiz geri dönüşüme uygun malzemelerden üretilmektedir.
                        </p>
                        <ul>
                            <h4>Çuval Çeşitlerimiz</h4>
                            <li> Standart çuval </li>
                            <li> Un cuvalı </li>
                            <li> Moloz cuvalı </li>
                            <li> Kum çuvalı </li>
                            <li> Jüt çuvalı </li>
                            <li> Tekstil çuvalı </li>
                            <li> Şeker çuvalı </li>
                            <li> Yem çuvalı </li>
                            <li> Diğer çuval ölçüleri ve çeşitlerimiz bulunmaktadır. </li>
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

export default ProductCuval;
