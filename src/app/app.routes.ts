import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './Guard/auth.guard';
import { childAuthGuard } from './Guard/child-auth.guard';
import { authDeactivateGuard } from './Guard/auth-deactivate.guard';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent,
    },
    {
        path : '',
        component : HomeComponent,
    },
    {
        path : 'about',loadComponent:()=>import('./about/about.component').then(load=>load.AboutComponent)
    },
    {
        path : 'customer',
        component : CustomerComponent,canActivate:[authGuard],canActivateChild:[childAuthGuard],
        children : [
            {
                path : 'add',
                component : AddComponent,
            },
            {
                path : 'edit/:id',
                component : AddComponent,
            }
        ]
    },
    {
        path : '**',
        component : StatusComponent,
    }
];
