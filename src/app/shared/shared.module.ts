import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PresetFilterComponent } from './components/preset-filter/preset-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MenusModule } from '@progress/kendo-angular-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { LayoutModule } from "@progress/kendo-angular-layout";

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        NgbModule,
        MenusModule,
        LayoutModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MainMenuComponent,
        SideMenuComponent,
        PresetFilterComponent,
        NgbModule,
        MenusModule,
        BrowserAnimationsModule,
        NavigationModule,
        DateInputsModule,
        InputsModule,
        LabelModule,
        GridModule,
        ChartsModule,
        InputsModule,
        PDFModule,
        ExcelModule,
        LayoutModule
    ],
    declarations: [
        MainMenuComponent,
        SideMenuComponent,
        PresetFilterComponent,
    ],
    providers: [],
})
export class SharedModule { }
