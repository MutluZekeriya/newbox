import React from 'react';
import KesimliKutu from '../img/kesimli-kutu.png'

const ProductKesimliKilitliKutu = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KesimliKutu} alt="Kesimli ve Kilitli Kutular" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Kesimli ve Kilitli Kutular</h2>
                    <p>
                        Her türlü ölçüde baskılı ve baskısız üretimi yapılmaktadır. Daha fazla bilgi almak için bizimle iletişime geçebilirsiniz..
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductKesimliKilitliKutu;