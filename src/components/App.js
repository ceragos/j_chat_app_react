import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Chat from '../pages/Chat';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Chat} />
                    {/*<Route exact path="/badges" component={Badges} />*/}
                    {/*<Route exact path="/badges/new" component={BadgeNew} />*/}
                    {/*<Route exact path="/badges/:badgeId" component={BadgeDetails} />*/}
                    {/*<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />*/}
                    {/*<Route component={NotFound} />*/}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
