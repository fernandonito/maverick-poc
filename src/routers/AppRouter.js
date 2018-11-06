import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import PostPage from '../components/PostPage';
import GetPage from '../components/GetPage';
import GetPagination from '../components/GetPagination';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Delete from '../components/Delete';
import Edit from '../components/Edit';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/get" component={GetPage} exact={true} />
                <Route path="/get/:id" component={GetPagination} />
                <Route path="/post" component={PostPage} exact={true} />
                <Route path="/delete/:id" component={Delete} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;