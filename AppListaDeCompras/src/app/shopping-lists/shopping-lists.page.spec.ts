import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingListsPage } from './shopping-lists.page';

describe('Tab1Page', () => {
  let component: ShoppingListsPage;
  let fixture: ComponentFixture<ShoppingListsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
