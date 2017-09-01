import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        NavbarComponent
    ],
    declarations: [NavbarComponent]
})
export class CoreModule {
}
