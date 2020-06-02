import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosBeaufortPage } from './infos-beaufort.page';

describe('InfosBeaufortPage', () => {
  let component: InfosBeaufortPage;
  let fixture: ComponentFixture<InfosBeaufortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosBeaufortPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosBeaufortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
