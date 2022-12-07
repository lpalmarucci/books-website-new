import {lazy} from 'react';
import {RouteType} from "./index";

export enum RoutePaths{
    HOME='/home',
    SEARCH="/search",
    SAVED="/saved"
}

export const commonRoutes: RouteType[] = [
    {
        component: lazy(() => import('../pages/home/home.page')),
        path: RoutePaths.HOME,
    },
    {
        component: lazy(() => import('../pages/search/search.page')),
        path: RoutePaths.SEARCH,
    },
    {
        component: lazy(() => import('../pages/404/404.page')),
        path: '*'
    }
];
