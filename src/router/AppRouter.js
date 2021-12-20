import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ProductPage from '../components/ProductPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css'

import ProductRuloKarton from '../components/ProductRuloKarton';
import ProductBalonluNylon from '../components/ProductBalonluNylon';
import ProductKesimliKutu from '../components/ProductKesimliKutu';
import ProductBalonluNylonTorba from '../components/ProductBalonluNylonTorba';
import ProductBaskiliCanta from '../components/ProductBaskiliCanta';
import ProductStrencFilm from '../components/ProductStrencFilm';
import ProductKoliBandi from '../components/ProductKoliBandi';
import ProductDetail9 from '../components/ProductDetail9';
import ProductKartonKutu from '../components/ProductKartonKutu';



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route component={HomePage} path="/" exact/>
                <Route component={ProductPage} path="/product" exact/>
                <Route component={ProductKartonKutu} path="/product/product1"/>
                <Route component={ProductRuloKarton} path="/product/product2"/>
                <Route component={ProductBalonluNylon} path="/product/product3"/>
                <Route component={ProductKesimliKutu} path="/product/product4"/>
                <Route component={ProductBalonluNylonTorba} path="/product/product5"/>
                <Route component={ProductBaskiliCanta} path="/product/product6"/>
                <Route component={ProductStrencFilm} path="/product/product7"/>
                <Route component={ProductKoliBandi} path="/product/product8"/>
                <Route component={ProductDetail9} path="/product/product9"/>
                <Route component={AboutPage} path="/about" />
                <Route component={ContactPage} path="/contact"/>
                
                <Route component={NotFoundPage} path=""/>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>

            
        
    )
}

export default AppRouter;
