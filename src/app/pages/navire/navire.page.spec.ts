import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavirePage } from './navire.page';

describe('NavirePage', () => {
  let component: NavirePage;
  let fixture: ComponentFixture<NavirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
