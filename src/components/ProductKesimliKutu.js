import React from 'react';
import KesimliKutu from '../img/kesimli-kutu.png'

const ProductKesimliKutu = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KesimliKutu} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                    <h2> Kesimli Kutu</h2>
                    <p>Karton kutularımız istenilen boyutlarda ve istediğiniz kalitede sizlere sunmaktayız. 
                        Ürünlerimiz geri dönüşüme uygun olan malzemelerden üretilmiştir.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductKesimliKutu;