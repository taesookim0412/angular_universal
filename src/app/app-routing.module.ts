import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ssrComponent} from "./ssr.component";

const routes: Routes = [
  {path: 'ssr', component: ssrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
