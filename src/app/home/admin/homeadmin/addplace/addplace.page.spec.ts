import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddplacePage } from './addplace.page';

describe('AddplacePage', () => {
  let component: AddplacePage;
  let fixture: ComponentFixture<AddplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
