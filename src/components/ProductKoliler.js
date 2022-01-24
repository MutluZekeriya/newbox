import React from 'react';
import KartonKutu from '../img/karton-kutu.png'

const ProductKoliler = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KartonKutu} alt="Koli" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2 id="karton"> Koli </h2>
                    <p>
                    koli kağıtlarının kalitesi kraft, testliner ve saman şeklindedir. kolilerimiz geri dönüşümlü kağıttan üretilmektedir. 
                    İstediğiniz kalitede üretim yapılmaktadır. Kolilerimiz ihraçat için ve iç piyasada kullanılan  değişik gramajlarda üretilir. 
                    İstenilen öşçülerde, Baskılı veya baskısız olarak üretilir. Tekstil kolisi, taşıma kolisi, arşiv kolisi ve 
                    kesimli koli gibi standart ölçüleri olan koliler üretimektedir. 
                    </p>
                    <ul>
                            <h4> Koli Çeşitlerimiz </h4>
                            <li> Tekstil kolisi  </li>
                            <li> Taşıma kolisi </li>
                            <li> Arşiv kolisi </li>
                            <li> Kesimli koli </li>
                            <li> Kargo kolisi </li>
                            <li> Eğitim seti kolileri </li>
                            <li> Tripleks koliler </li>
                            <li> Pizza kutusu </li>
                            <li> Kilitli kutu </li>
                            <li> Kolilerde diğer ölçüler ve çeşitlerimiz bulunmaktadır. </li>
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

export default ProductKoliler;
