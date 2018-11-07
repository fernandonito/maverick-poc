import React from 'react';
import {BrowserRouter, Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import PostPage from '../components/PostPage';
import GetPage from '../components/GetPage';
import GetPagination from '../components/GetPagination';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Delete from '../components/Delete';
import SearchPage from '../components/SearchPage';
import Edit from '../components/Edit';
import Header from '../components/Header';
import Login from '../components/Login';
import history from '../components/history';

const isSymfony = true;

const ApiUrl = 'http://symfony.localhost/empreendimento' ;
const ApiUrlGetLista = (isSymfony === true ? ApiUrl : 'http://maverick-api.localhost/get-lista.php');
const ApiUrlPost = (isSymfony === true ? ApiUrl : 'https://jsonplaceholder.typicode.com/users');
const ApiUrlSearch = (isSymfony === true ? ApiUrl+'/search' : 'http://maverick-api.localhost/get-search.php');

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Router history={history}>
                    <Route path="/" component={Login} exact={true} />
                </Router>
                    <Route path="/dashboard" component={DashboardPage} exact={true} />
                    <Route path="/get" component={() => <GetPage apiUrl={ApiUrlGetLista} />} exact={true} />
                    <Route path="/get/:id" component={GetPagination} />
                    <Route path="/post" component={() => <PostPage apiUrl={ApiUrlPost} />} exact={true} />
                    <Route path="/delete/:id" component={Delete} />
                <Router history={history}>
                    <Route path="/edit/:id" component={Edit} />
                </Router>
                    <Route path="/search" component={() => <SearchPage apiUrl={ApiUrlSearch} />} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;