import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent,canActivate:[authGuard],
    },
    {
        path : 'about',
        component : AboutComponent,canActivate:[authGuard],
    },
    {
        path : 'customer',
        component : CustomerComponent,canActivate:[authGuard],
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
