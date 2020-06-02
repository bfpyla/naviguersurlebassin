import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosPechePage } from './infos-peche.page';

describe('InfosPechePage', () => {
  let component: InfosPechePage;
  let fixture: ComponentFixture<InfosPechePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPechePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosPechePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
