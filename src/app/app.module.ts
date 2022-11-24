import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from './test/test.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { TablesComponent } from './pages/tables/tables.component';
import { PartiesComponent } from './pages/parties/parties.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { ResultsComponent } from './pages/results/results.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/tables', component: TablesComponent},
  {path: 'admin/parties', component: PartiesComponent},
  {path: 'admin/candidates', component: CandidatesComponent},
  {path: 'admin/results', component: ResultsComponent},
  {path: 'admin/reports', component: ReportsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    UsersComponent,
    TablesComponent,
    PartiesComponent,
    CandidatesComponent,
    ResultsComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
