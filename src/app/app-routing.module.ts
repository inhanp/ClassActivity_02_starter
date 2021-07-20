import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailsComponent} from './emails/emails.component';
import {WalkComponent} from './walk/walk.component';
import {RunComponent} from './run/run.component';


const routes: Routes = [
  {path: '', component: EmailsComponent},
  {path: 'walk', component: WalkComponent},
  {path: 'run', component: RunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
