import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";

import React from 'react';
import DenseAppBar from './navbar';
import StartPage from './startPage';
import OmMig from './omMig';
import TidigareYrken from './tidigareYrken'
import Kontakt from './kontakt'


export default function Layout() {
    return (
        <div style={backgrounC}> 
            {/* <DenseAppBar /> */}
            <Router>
                        <Switch>
                            <Route exact path="/">
                                <StartPage />
                            </Route>
                        
                            <Route exact path="/omMig">
                                <OmMig/>
                            </Route>

                            <Route path="/tidigareYrken">
                                <TidigareYrken/>
                            </Route>

                            <Route path="/kontakt">
                                <Kontakt/>
                            </Route>

                </Switch>
                        
            </Router>

        </div>
    )
}

const backgrounC: React.CSSProperties = {
    
  }