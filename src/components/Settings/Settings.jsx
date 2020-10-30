import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CallHistoryContainer } from '../CallHistory/CallHistoryContainer';
import { GroupsContainer } from '../Groups/GoupsContainer';
import { DriversContainer } from '../Drivers/DriversContainer';
import { DispatchersContainer } from '../Dispatchers/DispatchersContainer';
import { ChoosingContainer } from '../Choosing/ChoosingContainer';

const Settings = () => (
    <>
        <Switch>
            <Route path={['/settings/main', '/settings/main/page/:n?']} exact component={CallHistoryContainer}/>
            <Route path='/settings/groups' exact component={GroupsContainer}/>
            <Route path='/settings/choosing/:groupName' exact component={ChoosingContainer}/>
            <Route path='/settings/drivers/:page?/:n?' exact component={DriversContainer}/>
            <Route path='/settings/dispatchers' exact component={DispatchersContainer}/>
        </Switch>
    </>
);

export default Settings;
