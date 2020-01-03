import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleWordComponent } from './example-word.component';

describe('ExampleWordComponent', () => {
  let component: ExampleWordComponent;
  let fixture: ComponentFixture<ExampleWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
