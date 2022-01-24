import React from 'react';
import YumusakSapliPoset from '../img/yumusak-sapli-posetler.png'

const ProductYumusakSapliPoset = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={YumusakSapliPoset} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Yumuşak Saplı Poşet</h2>
                    <p>                        
                    Yumuşak saplı poşetler istenilen ebatlarda ve renklerde üretilir. Baskılı veya baskısız üretimi yapılmaktadır. 
                    Sıfır atık ve geri dönüşüm özelliği taşımaktadır. Ürün hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductYumusakSapliPoset;