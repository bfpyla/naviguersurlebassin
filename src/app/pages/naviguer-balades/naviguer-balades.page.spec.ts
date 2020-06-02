import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaviguerBaladesPage } from './naviguer-balades.page';

describe('NaviguerBaladesPage', () => {
  let component: NaviguerBaladesPage;
  let fixture: ComponentFixture<NaviguerBaladesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviguerBaladesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaviguerBaladesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
