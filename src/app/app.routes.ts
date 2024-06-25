import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DistrictlistComponent } from './page/districtlist/districtlist.component';
import { EachDistrictComponent } from './page/each-district/each-district.component';
import { AuthComponent } from './page/auth/auth.component';
import { NotfoundComponent } from './page/notfound/notfound.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"district-list",component:DistrictlistComponent
    },
    {
        path:"districts/:id",component:EachDistrictComponent
    }, 
    {
        path:"auth",component:AuthComponent
    },
    {
        path:"**",component:NotfoundComponent
    }
];
