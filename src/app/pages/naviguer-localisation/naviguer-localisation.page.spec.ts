import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaviguerLocalisationPage } from './naviguer-localisation.page';

describe('NaviguerLocalisationPage', () => {
  let component: NaviguerLocalisationPage;
  let fixture: ComponentFixture<NaviguerLocalisationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviguerLocalisationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaviguerLocalisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
