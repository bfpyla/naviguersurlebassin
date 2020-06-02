import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EchelledebeaufortComponent } from './echelledebeaufort.component';

describe('EchelledebeaufortComponent', () => {
  let component: EchelledebeaufortComponent;
  let fixture: ComponentFixture<EchelledebeaufortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchelledebeaufortComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EchelledebeaufortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
