import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaviguerLocalisationAdminPage } from './naviguer-localisation-admin.page';

describe('NaviguerLocalisationAdminPage', () => {
  let component: NaviguerLocalisationAdminPage;
  let fixture: ComponentFixture<NaviguerLocalisationAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviguerLocalisationAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaviguerLocalisationAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
