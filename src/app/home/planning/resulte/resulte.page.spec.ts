import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultePage } from './resulte.page';

describe('ResultePage', () => {
  let component: ResultePage;
  let fixture: ComponentFixture<ResultePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
