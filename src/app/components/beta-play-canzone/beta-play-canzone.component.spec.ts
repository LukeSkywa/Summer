import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaPlayCanzoneComponent } from './beta-play-canzone.component';

describe('BetaPlayCanzoneComponent', () => {
  let component: BetaPlayCanzoneComponent;
  let fixture: ComponentFixture<BetaPlayCanzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaPlayCanzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaPlayCanzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
