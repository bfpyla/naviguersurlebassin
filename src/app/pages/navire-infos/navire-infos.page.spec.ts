import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavireInfosPage } from './navire-infos.page';

describe('NavireInfosPage', () => {
  let component: NavireInfosPage;
  let fixture: ComponentFixture<NavireInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavireInfosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavireInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
