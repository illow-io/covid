import React, { Suspense } from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import withTracker from "./withTracker";

import Discover from './screens/Discover';
import Enrich from './screens/Enrich';
import Home from './screens/Home';
import Score from './screens/Score';
import SignIn from './screens/SignIn';
import Upload from './screens/Upload';
import Privacy from './screens/Privacy';

import Loader from './components/Loader/Loader';

function App() {
    const screens = [
        { path: "/privacy", component: Privacy },
        { path: "/discover", component: Discover },
        { path: "/sign-in", component: SignIn },
        { path: "/upload", component: Upload },
        { path: "/enrich", component: Enrich },
        { path: "/score", component: Score },
        { path: "/", component: Home },
    ];

    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Switch>
                    {screens.map(screen => <Route key={screen.path} path={screen.path} component={withTracker(screen.component)} />)}
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
