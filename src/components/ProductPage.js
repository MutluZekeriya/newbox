import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products';

const ProductPage = () => {
    return (
        <section>
            <div className="container-fluid bg-light">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6 pt-2">
                            <h1 className="lead display-6 page-title">Ürünler</h1>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 pt-3">
                            <nav aria-label="breadcrumb align-self-center">
                                <ul class="breadcrumb justify-content-end page-title-link">
                                    <li className="breadcrumb-item"><Link to="/"> Newbox </Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Ürünler</li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
            <Products />
        </section>
    )
}

export default ProductPage;
