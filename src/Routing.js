import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingApi from './components/listing/ListingApi'
import Home from './components/Home'
import RestaurantDetailsApi from './components/details/RestaurantDetailsApi'
import ViewOrdersApi from './components/veiworders/ViewOrdersApi'
import RegisterComp from './components/loginRegister/RegisterComp'
import LoginComp from "./components/loginRegister/LoginComp";
import Home from './components/Tune'
import RestaurantDetailsApi from './components/details/CloudAPI'
import ViewOrdersApi from './components/veiworders/VendorAPI'


const Routing = () => {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/list/:mealId" component={ListingApi} />
        <Route path="/details/:res_id" component={RestaurantDetailsApi} />
        <Route path="/viewOrder" component={ViewOrdersApi} />
        <Route path="/register" component={RegisterComp} />
        <Route path="/login" component={LoginComp} />
        <Route path="/viewStripe" component={viewStripe} />
        <Route path="/registerOrder" component={registerOrder} />
        <Route path="/logout" component={LogoutComp} />
        <Route path="/attributeComp" component={attributeComp} />
        <Route path="/list" component={list} />
        <Route path="/generate" mponent={generate} />
      </BrowserRouter>
    );
}


export default Routing;
