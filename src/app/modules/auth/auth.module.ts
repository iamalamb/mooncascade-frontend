import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbPopoverModule,
        FormsModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule {
}
