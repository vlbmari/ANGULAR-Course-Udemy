import {NgModule} from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports:[
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule
    ],
})
export class AngularMaterialModule{}