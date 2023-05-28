import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingListItensPage } from './shopping-list-itens.page';

describe('ShoppingListItensPage', () => {
  let component: ShoppingListItensPage;
  let fixture: ComponentFixture<ShoppingListItensPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingListItensPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
