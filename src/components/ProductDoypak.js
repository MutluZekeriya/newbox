import React from 'react';
import Doypak from '../img/doypak-kilitli-torba.png'

const ProductDoypak = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={Doypak} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Doypak </h2>
                    <p>
                    dogal kraft kagıt ile üretilmiştir.  Firesiz dolum imkanına sahiptir. 
                    Yeniden kapatılabilen kilit sistemine sahiptir. Özel tsaasrım baskısı yapılabilir. 
                    İstenilen ölçülerde üretilir. 
                    </p>
                    <ul>
                            <h4>Doypak Çeşitlerimiz</h4>
                            <li> Hammadde ambalajları </li>
                            <li> Kuruyemiş ambalajları </li>
                            <li> Kahve ambalajları </li>
                            <li> Pet mama ambalajları </li>
                            <li> Baharat ambalajları </li>
                            <li> Tesktil ambalajları </li>
                            <li> Şekerleme amalajları </li>
                            <li> Bebek ürünleri ambalajları </li>
                            <li> Aromatik bitki ve çay ambalajları kullanılır. </li>
                            <li> Doypak ürünümüzde diğer ölçüler ve çeşitlerimiz bulunmaktadır. </li>
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

export default ProductDoypak;