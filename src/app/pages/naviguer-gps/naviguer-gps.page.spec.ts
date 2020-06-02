import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaviguerGpsPage } from './naviguer-gps.page';

describe('NaviguerGpsPage', () => {
  let component: NaviguerGpsPage;
  let fixture: ComponentFixture<NaviguerGpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviguerGpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaviguerGpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
