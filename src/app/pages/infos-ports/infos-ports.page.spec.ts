import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosPortsPage } from './infos-ports.page';

describe('InfosPortsPage', () => {
  let component: InfosPortsPage;
  let fixture: ComponentFixture<InfosPortsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPortsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosPortsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
