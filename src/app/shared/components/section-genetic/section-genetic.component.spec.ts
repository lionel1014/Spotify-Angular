import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGeneticComponent } from './section-genetic.component';

describe('SectionGeneticComponent', () => {
  let component: SectionGeneticComponent;
  let fixture: ComponentFixture<SectionGeneticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGeneticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGeneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
