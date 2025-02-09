import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerice1Component } from './exerice1.component';

describe('Exerice1Component', () => {
  let component: Exerice1Component;
  let fixture: ComponentFixture<Exerice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exerice1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exerice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
