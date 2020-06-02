import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SosMailPage } from './sos-mail.page';

describe('SosMailPage', () => {
  let component: SosMailPage;
  let fixture: ComponentFixture<SosMailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosMailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SosMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
