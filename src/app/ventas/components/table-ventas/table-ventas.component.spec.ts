import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVentasComponent } from './table-ventas.component';

describe('TableVentasComponent', () => {
  let component: TableVentasComponent;
  let fixture: ComponentFixture<TableVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableVentasComponent]
    });
    fixture = TestBed.createComponent(TableVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
