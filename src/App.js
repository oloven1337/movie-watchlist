import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Watchlist } from './pages/Watchlist/Watchlist'
import { Watched } from './pages/Watched/Watched'
import { Add } from './pages/Add/Add'

import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Watchlist/>
                </Route>
                <Route exact path="/watched">
                    <Watched/>
                </Route>
                <Route exact path="/add">
                    <Add/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

