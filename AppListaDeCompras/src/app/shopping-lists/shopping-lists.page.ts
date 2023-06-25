import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingList } from '../model/shopping-list';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: 'shopping-lists.page.html',
  styleUrls: ['shopping-lists.page.scss']
})
export class ShoppingListsPage implements OnInit{

  editMode:boolean = false;
  
  
  
  private shoppingListsService: ShoppingListsService;

  constructor(shoppingListsService: ShoppingListsService, private fb: FormBuilder) {
    this.shoppingListsService = shoppingListsService;
  }

  editForm: FormGroup = this.fb.group({
    shoppingLists: this.fb.array([])
  })

  get shoppingListsFormArray(): FormArray{
    return this.editForm.controls['shoppingLists'] as FormArray;
  }

  get shoppingListsControls(): FormGroup[] {
    return this.shoppingListsFormArray.controls as FormGroup[];
  }

  get shoppingLists(): ShoppingList[]{
    return this.shoppingListsService.getShoppingLists();
  }
  
  ngOnInit(): void {
  }

  edit():void{
    this.editForm = this.fb.group({
      shoppingLists: this.fb.array([])
    })
    
    this.shoppingLists.forEach(list => {
      
      const listGroup: FormGroup = this.fb.group({
        id: [list.id, Validators.required],
        title: [list.title, Validators.required],
        itens: [list.itens]
      })
      this.shoppingListsFormArray.push(listGroup);
      
    });

    this.editMode = true;
}
  
  confirm():void{
    this.editMode = false;
    this.shoppingListsService.updateShoppingLists(this.editForm.value.shoppingLists);
  }

}
