import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule, IgxGridModule, IgxTreeModule, IgxToggleModule, IgxAvatarModule, IgxChipsModule, IgxInputGroupModule, IgxDropDownModule, IgxButtonGroupModule, IgxCheckboxModule, IgxSwitchModule, IgxRadioModule, IgcFormsModule, IgxSliderModule, IgxListModule, IgxComboModule, IgxDatePickerModule, IgxSelectModule, IgxTabsModule, IgxAccordionModule, IgxCalendarModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxExpansionPanelModule,
    IgxGridModule,
    IgxTreeModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgxCheckboxModule,
    IgxSwitchModule,
    IgxRadioModule,
    IgcFormsModule,
    IgxSliderModule,
    IgxListModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxSelectModule,
    IgxTabsModule,
    IgxAccordionModule,
    IgxCalendarModule,
    FormsModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
