import React from 'react';
import KoliBandi from '../img/koli-bandi.png'

const ProductKoliBandi = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <img className="img-fluid" src={KoliBandi} alt="ürün1" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h2> Koli Bandı </h2>
                        <p>
                            Hotmelt, akrilik ve solvent (doğal kauçuk) bant çeşitlerimiz bulunmaktadır. Koli kapatma ve paketleme amaçlı kullanılmaktadır.
                            Sıcak ve soğuk depolama koşullarına uygun, el ile kopan ya da filmik yüzeye yapışabilen versiyonları vardır. Bant çeşitlerimiz
                            baskılı ya da baskısız şekilde üretilir. Renk çeşitlerimiz şeffaf, kahve ve diğer renklerimiz bulumaktadır...
                            Beş renk baskı yapılabilir..
                        </p>
                        <ul>
                            <h4> Koli Bandı Çeşitlerimiz </h4>
                            <li> Kraft Bantlar  </li>
                            <li> Hotmelt Bantlar </li>
                            <li> Akrilik Bantlar </li>
                            <li> Kargo Bantları </li>
                            <li> Solvent Bantlar </li>
                            <li> Baskısız Renkli Bantlar </li>
                            <li> Maskeleme Bantları </li>
                            <li> Çift Taraflı Bantlar </li>
                            <li> Değişik amaçlı bant çeşitlerimiz bulunmaktır. </li>
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

export default ProductKoliBandi;