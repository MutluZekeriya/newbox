import React from 'react'
import { Link } from 'react-router-dom'
import Company from '../img/company.jpg'

const AboutPage = () => {
    return (
        <section id="about-page">

            <div className="container-fluid p-0">
                
                <div className="container-fluid bg-light">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-6 pt-2">
                                <h1 className="lead display-6 page-title">Hakkımızda</h1>                                
                            </div>
                            <div className="col-md-6 col-sm-6 col-6 pt-3">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb justify-content-end  page-title-link">
                                        <li className="breadcrumb-item"><Link to="/"> Newbox </Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Hakkımızda</li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                    Newbox sektöre girdiği günden bu yana müşteri memnuniyetini esas alarak ilerlemeyi hedef edinmiştir.
                                    Müşterilerinin isteklerine ve zamanlarını değer vererek onlara verdiği mutluluğu kendi mutluluğu
                                    olarak görmüştür. Bundan dolayı kaliteli ürün ve zamanında teslimatı gaye edinmiştir.
                                    
                                </p>
                                <p>
                                    Ambalaj sektöründe bulunduğumuz bu güne kadar sizlere en iyi ürünleri sunmaya çalışmaktayız. Ürünlerimizin 
                                    geri dönüşüme uygun malzemelerden üretilmesi konusunda hassasiyetimiz en üst seviyede bulunmaktadır. 
    
                                </p>
                                <p>
                                    Ambalaj sektöründe koli çeşitleri, rulo karton, ofset baskılı kutular, kesimli kutu, koli bandı,
                                    streç film, balonlu naylon, çuval, doypak, kraft  çanta,  poşet çeşitleri vb. birçok ürün
                                    çeşitleri ile sizlere hizmet etmekteyiz.
                                </p>

                                <ul>
                                    <h4>DEĞERLERİMİZ</h4>
                                    <li> Yeniliklere açık olmak,  </li>
                                    <li> Müşterinin yanında olmak,  </li>
                                    <li> Adaletli olmak, </li>
                                    <li> Farklı olmak ve farklılığı hissettirmek , </li>
                                    <li> İnanmadığımız işi yapmamak, </li>
                                    <li> Ülkemize değer katmak, </li>
                                    <li> Veriye ve analize dayalı kararlar vermek, </li>
                                    <li> Yasal mevzuatlara uygun davranmak, </li>
                                </ul>
                                <p>
                                sektörün başarısına olan bağlılığımızla; küçük, orta ve uzun hedeflerle çalışıyor ve sektörümüzde tüm işbirlikçilerimize değer veriyoruz.
                                </p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid rounded" src={Company} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;
