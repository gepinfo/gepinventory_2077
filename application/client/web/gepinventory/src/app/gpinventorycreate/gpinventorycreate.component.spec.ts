import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpinventorycreateComponent } from './gpinventorycreate.component';

describe('GpinventorycreateComponent', () => {
  let component: GpinventorycreateComponent;
  let fixture: ComponentFixture<GpinventorycreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpinventorycreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpinventorycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});