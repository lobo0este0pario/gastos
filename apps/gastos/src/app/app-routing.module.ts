import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'banco',loadChildren:()=>import('./components/banco/bancoc.module').then(m=>m.BancocModule)},
  {path:'cuenta',loadChildren:()=>import('./components/cuenta/cuentac.module').then(m=>m.CuentacModule)},
  {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
