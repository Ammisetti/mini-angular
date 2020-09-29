import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DoubtComponent } from './doubt/doubt.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {path: 'doubts', component: DoubtComponent},
  {path: 'help', component: HelpComponent},

  // { path: '',   redirectTo: '/header', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
  RouterModule.forRoot(routes),
  CommonModule,
  ]
})
export class AppRoutingModule { }

export const RoutingComponents = [DoubtComponent, HelpComponent];
