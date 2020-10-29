import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LembretesListaComponent } from './lembretes-lista.component';

describe('LembretesListaComponent', () => {
  let component: LembretesListaComponent;
  let fixture: ComponentFixture<LembretesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LembretesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LembretesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
