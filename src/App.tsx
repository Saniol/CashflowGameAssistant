import React from 'react';

import {NativeRouter, Switch, Route, Redirect} from 'react-router-native';
import Dashboard from './profile/Dashboard';
import OtherOperations from './profile/OtherOperations';
import Balance from './balance/View';
import Income from './income/View';
import Transactions from './transactions/List';
import AppContainer from './layout/Container';

const App: React.FC = () => (
    <NativeRouter>
        <AppContainer>
            <Switch>
                <Route path="/home" component={Dashboard} />
                <Route path="/other" component={OtherOperations} />
                <Route path="/balance" component={Balance} />
                <Route path="/income" component={Income} />
                <Route path="/transactions" component={Transactions} />
                <Redirect to="/home" />
            </Switch>
        </AppContainer>
    </NativeRouter>
);

export default App;
