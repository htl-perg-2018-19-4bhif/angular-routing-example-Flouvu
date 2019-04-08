import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsListComponent } from './pokemon-details-list.component';

describe('PokemonDetailsListComponent', () => {
  let component: PokemonDetailsListComponent;
  let fixture: ComponentFixture<PokemonDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
