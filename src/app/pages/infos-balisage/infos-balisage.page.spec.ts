import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosBalisagePage } from './infos-balisage.page';

describe('InfosBalisagePage', () => {
  let component: InfosBalisagePage;
  let fixture: ComponentFixture<InfosBalisagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosBalisagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosBalisagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
