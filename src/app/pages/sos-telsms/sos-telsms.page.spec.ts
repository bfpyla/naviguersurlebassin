import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SosTelsmsPage } from './sos-telsms.page';

describe('SosTelsmsPage', () => {
  let component: SosTelsmsPage;
  let fixture: ComponentFixture<SosTelsmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosTelsmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SosTelsmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
