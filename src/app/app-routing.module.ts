import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HOME, REGISTER} from '@shared/constants';

const routes: Routes = [
    {
        path: `${REGISTER}`,
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: `${HOME}`,
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
