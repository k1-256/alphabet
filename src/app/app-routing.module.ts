import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ChallengeComponent } from './challenge/challenge.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'challenge',
    children: [
      {
        path: '',
        component: ChallengeComponent
      },
      {
        path: ':letter',
        component: ChallengeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
