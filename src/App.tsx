import React from 'react';
import {Provider} from 'react-redux';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native';
import Dashboard from './profile/Dashboard';
import OtherOperations from './profile/OtherOperations';
import Balance from './balance/View';
import NewGame from './game/NewGame';
import Income from './income/View';
import Transactions from './transactions/List';
import AppContainer from './layout/Container';
import {store} from './appReducer';

const App: React.FC = () => (
    <NativeRouter>
        <Provider store={store}>
            <AppContainer>
                <Switch>
                    <Route path="/newGame" component={NewGame} />
                    <Route path="/home" component={Dashboard} />
                    <Route path="/other" component={OtherOperations} />
                    <Route path="/balance" component={Balance} />
                    <Route path="/income" component={Income} />
                    <Route path="/transactions" component={Transactions} />
                    <Redirect to="/home" />
                </Switch>
            </AppContainer>
        </Provider>
    </NativeRouter>
);

export default App;
