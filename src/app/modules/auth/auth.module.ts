import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbPopoverModule
    ],
    declarations: [LoginComponent, LoginFormComponent],
    exports: [LoginComponent]
})
export class AuthModule {
}
