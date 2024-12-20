import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkspaceModule } from './workspace/workspace.module';
import { WorkspaceComponent } from './workspace/workspace/workspace.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'workspace/:id',
    component: WorkspaceComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    WorkspaceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
