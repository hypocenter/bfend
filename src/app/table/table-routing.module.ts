import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { TableComponent } from './table.component';

const routes: Route[] = [
  {
    path: 'index',
    component: TableComponent,
    data: {acl: 'table.basic.index'},
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
