import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactiveGuardService } from './employees/create-employee-can-deactive-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPiPe } from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found.component'
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion.component';

const appRoutes : Routes = [
  { path : 'list', 
    component : ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  { 
    path : 'edit/:id', 
    component : CreateEmployeeComponent,
    canDeactivate : [CreateEmployeeCanDeactiveGuardService] 
  },
  { path : 'employees/:id', component : EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService] 
  },
  { path : '', redirectTo: '/list', pathMatch: 'full' },
  { path : 'notFound', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPiPe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactiveGuardService, EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
