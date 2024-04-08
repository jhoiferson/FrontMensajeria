import { Routes } from '@angular/router';

import { AdminlayoutComponent } from './shared/components/layout/adminlayout/adminlayout.component';

export const routes: Routes = [
  {
    path: "",
    component: AdminlayoutComponent,
    children:[
      {
        path: "perfil",
        loadChildren:()=>import('./views/perfil/perfil.routes').then(m=>m.PERFIL_ROUTES),

      }

    ]

  }
];
