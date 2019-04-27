import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwagComponent } from './swag/swag.component';
import { SwagDetailComponent } from './swag-detail/swag-detail.component';
import { StateChangesComponent } from './state-changes/state-changes.component';
import { SnapshotChangesComponent } from './snapshot-changes/snapshot-changes.component';

const routes: Routes = [{
  path: 'swag',
  component: SwagComponent
},
{
  path: 'swag/:id',
  component: SwagDetailComponent
},
{
  path: 'state-changes',
  component: StateChangesComponent
},
{
  path: 'snapshot-changes',
  component: SnapshotChangesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
