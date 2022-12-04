import {lazy} from 'react';
import {RouteType} from "./index";

export enum RoutePaths{
    HOME='/home'
}

export const commonRoutes: RouteType[] = [
    {
        component: lazy(() => import('../pages/home/home.page')),
        path: RoutePaths.HOME,
    },
];
