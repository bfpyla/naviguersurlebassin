import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SosSosPage } from './sos-sos.page';

describe('SosSosPage', () => {
  let component: SosSosPage;
  let fixture: ComponentFixture<SosSosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosSosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SosSosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
