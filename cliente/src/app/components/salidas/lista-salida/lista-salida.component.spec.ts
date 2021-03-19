import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSalidaComponent } from './lista-salida.component';

describe('ListaSalidaComponent', () => {
  let component: ListaSalidaComponent;
  let fixture: ComponentFixture<ListaSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
