import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavireSortiesPage } from './navire-sorties.page';

describe('NavireSortiesPage', () => {
  let component: NavireSortiesPage;
  let fixture: ComponentFixture<NavireSortiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavireSortiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavireSortiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
