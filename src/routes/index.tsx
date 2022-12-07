import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
import {commonRoutes} from './common.routes';
import SplashScreen from "../components/SplashScreen";

export interface RouteType {
    path: string;
    component: any;
}

export const routes: RouteType[] = [
    ...commonRoutes,
];

export const renderRoutes = () =>
    routes
        .map(({
                  component: Component,
                  path
              }) => (
            <Route
                path={path}
                key={path}
                element={
                    <Suspense fallback={<SplashScreen />}>
                        <Component/>
                    </Suspense>
                }/>
        ));

