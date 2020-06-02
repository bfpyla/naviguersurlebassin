import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MareesPage } from './marees.page';

describe('MareesPage', () => {
  let component: MareesPage;
  let fixture: ComponentFixture<MareesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MareesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MareesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
