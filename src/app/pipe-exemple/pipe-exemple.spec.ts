import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExemple } from './pipe-exemple';

describe('PipeExemple', () => {
  let component: PipeExemple;
  let fixture: ComponentFixture<PipeExemple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeExemple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeExemple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
