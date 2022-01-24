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
import ProductBalonluNylonTorba from '../components/ProductBalonluNylonTorba';
import ProductBaskiliCanta from '../components/ProductBaskiliCanta';
import ProductStrencFilm from '../components/ProductStrencFilm';
import ProductKoliBandi from '../components/ProductKoliBandi';
import ProductCuval from '../components/ProductCuval';
import ProductKoliler from '../components/ProductKoliler';
import ProductDoypak from '../components/ProductDoypak';
import ProductHisirPoset from '../components/ProductHisirPoset';
import ProductKesimliKilitliKutu from '../components/ProductKesimliKilitliKutu';
import ProductKilitliPoset from '../components/ProductKilitliPoset';
import ProductOfsetSivamaliKutular from '../components/ProductOfsetSivamaliKutular';
import ProductYumusakSapliPoset from '../components/ProductYumusakSapliPoset';
import ProductKartonBardak from '../components/ProductKartonBardak';
import ProductKeseKagidi from '../components/ProductKeseKagidi';
import ProductAtletPoset from '../components/ProductAtletPoset';





const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route component={HomePage} path="/" exact/>
                <Route component={ProductPage} path="/urunler" exact/>
                <Route component={ProductKoliler} path="/koli"/>
                <Route component={ProductRuloKarton} path="/rulo-karton"/>
                <Route component={ProductBalonluNylon} path="/balonlu-naylon"/>
                <Route component={ProductBalonluNylonTorba} path="/balonlu-patpat-naylon-torba"/>
                <Route component={ProductBaskiliCanta} path="/kraft-canta"/>
                <Route component={ProductStrencFilm} path="/strec-film"/>
                <Route component={ProductKoliBandi} path="/koli-bandi"/>
                <Route component={ProductCuval} path="/cuval"/>
                <Route component={ProductDoypak} path="/doypak"/> 
                <Route component={ProductHisirPoset} path="/hisir-posetler"/>
                <Route component={ProductKesimliKilitliKutu} path="/kesimli-kilitli-kutular"/>
                <Route component={ProductKilitliPoset} path="/kilitli-poset"/>
                <Route component={ProductOfsetSivamaliKutular} path="/ofset-sivamali-kutular"/>
                <Route component={ProductYumusakSapliPoset} path="/yumusak-sapli-posetler"/>
                <Route component={ProductKartonBardak} path="/karton-bardak"/>
                <Route component={ProductKeseKagidi} path="/kese-kagidi"/>
                <Route component={ProductAtletPoset} path="/atlet-poset"/>

                <Route component={AboutPage} path="/hakkimizda" />
                <Route component={ContactPage} path="/iletisim"/>
                
                <Route component={NotFoundPage} path=""/>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>


        
    )
}

export default AppRouter;
