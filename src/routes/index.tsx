import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
import {commonRoutes} from './common.routes';

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
                    <Suspense fallback={<span>Loading...</span>}>
                        <Component/>
                    </Suspense>
                }/>
        ));

