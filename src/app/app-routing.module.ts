import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ReagendamentoComponent } from './views/reagendamento/reagendamento.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
    {
      path: 'reagendamento',
      component: ReagendamentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
