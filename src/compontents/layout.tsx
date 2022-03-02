import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import StartPage from './startPage';
import OmMig from './omMig';
import TidigareYrken from './tidigareYrken';
import Skolprojekt from './skolprojekt';
import Fotografier from './fotografier';
import Kontakt from './kontakt';

export default function Layout() {
    return (

                <>
              
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <StartPage />
                            </Route>

                            <Route exact path="/omMig">
                                <OmMig />
                            </Route>

                            <Route path="/tidigareYrken">
                                <TidigareYrken />
                            </Route>

                            <Route path="/kontakt">
                                <Kontakt />
                            </Route>

                            <Route path="/fotografier">
                                <Fotografier />
                            </Route>

                            <Route path="/skolprojekt">
                                <Skolprojekt />
                            </Route>

                        </Switch>

                    </Router>

                </>
    )
} 