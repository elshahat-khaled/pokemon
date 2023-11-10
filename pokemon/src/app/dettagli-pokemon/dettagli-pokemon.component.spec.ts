import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPokemonComponent } from './dettagli-pokemon.component';

describe('DettagliPokemonComponent', () => {
  let component: DettagliPokemonComponent;
  let fixture: ComponentFixture<DettagliPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliPokemonComponent]
    });
    fixture = TestBed.createComponent(DettagliPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
