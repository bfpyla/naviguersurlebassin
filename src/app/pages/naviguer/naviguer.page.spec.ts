import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaviguerPage } from './naviguer.page';

describe('NaviguerPage', () => {
  let component: NaviguerPage;
  let fixture: ComponentFixture<NaviguerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviguerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaviguerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
