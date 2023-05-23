import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule, IgxGridModule, IgxTreeModule, IgxToggleModule, IgxAvatarModule, IgxChipsModule, IgxInputGroupModule, IgxDropDownModule, IgxButtonGroupModule, IgxCheckboxModule, IgxSwitchModule, IgxRadioModule, IgcFormsModule, IgxSliderModule, IgxListModule, IgxComboModule, IgxDatePickerModule, IgxSelectModule, IgxTabsModule, IgxAccordionModule, IgxCalendarModule } from '@infragistics/igniteui-angular';
import { View1Component } from './view1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1Component ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxExpansionPanelModule, IgxGridModule, IgxTreeModule, IgxToggleModule, IgxAvatarModule, IgxChipsModule, IgxInputGroupModule, IgxDropDownModule, IgxButtonGroupModule, IgxCheckboxModule, IgxSwitchModule, IgxRadioModule, IgcFormsModule, IgxSliderModule, IgxListModule, IgxComboModule, IgxDatePickerModule, IgxSelectModule, IgxTabsModule, IgxAccordionModule, IgxCalendarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
