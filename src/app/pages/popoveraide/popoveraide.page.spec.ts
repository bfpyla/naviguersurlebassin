import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopoveraidePage } from './popoveraide.page';

describe('PopoveraidePage', () => {
  let component: PopoveraidePage;
  let fixture: ComponentFixture<PopoveraidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoveraidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopoveraidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
