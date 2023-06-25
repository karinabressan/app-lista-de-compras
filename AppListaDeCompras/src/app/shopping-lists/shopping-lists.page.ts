import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingList } from '../model/shopping-list';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: 'shopping-lists.page.html',
  styleUrls: ['shopping-lists.page.scss']
})
export class ShoppingListsPage implements OnInit{

  editMode:boolean = false;
  allShoppingLists: ShoppingList[];
  private shoppingListsService: ShoppingListsService;
  private newItemModal:HTMLIonAlertElement;

  constructor(shoppingListsService: ShoppingListsService, private alertController: AlertController, private fb: FormBuilder, private router: Router) {
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

  async ngOnInit(): Promise<void> {
    await this.shoppingListsService.init();
    this.allShoppingLists = await this.shoppingListsService.getAll();
      
    this.newItemModal = await this.alertController.create(
      {
        header: 'Nova lista',
        cssClass: 'secondary',
        buttons: ["OK", "Cancel"],
        inputs: [
          {
            name: 'title',
            type: 'text',
            placeholder: 'Nome da nova lista'
          }
        ]
      }
    );  
  }

  navigateToListItemsPage(listId:number):void{
    this.router.navigate(['/shopping-lists', listId], );
  }

  async edit():Promise<void>{
    this.editForm = this.fb.group({
      shoppingLists: this.fb.array([])
    })
    
    
    const lists = await this.shoppingListsService.getAll();
    lists.forEach(list => {
      
      const listGroup: FormGroup = this.fb.group({
        id: [list.id, Validators.required],
        title: [list.title, Validators.required],
        itens: [list.itens]
      })
      this.shoppingListsFormArray.push(listGroup);
      
    });

    this.editMode = true;
  }
  
  async confirmEdit():Promise<void>{
    await this.shoppingListsService.update(this.editForm.value.shoppingLists);
    this.allShoppingLists = await this.shoppingListsService.getAll();
    this.editMode = false;
  }

  async delete(index: number){
    this.shoppingListsFormArray.removeAt(index);
    await this.shoppingListsService.update(this.editForm.value.shoppingLists);
    this.allShoppingLists = await this.shoppingListsService.getAll();
  }

  async add():Promise<void>{
    await this.newItemModal.present();

    const data = await this.newItemModal.onDidDismiss();
    const nome = data.data.values.title;

    await this.shoppingListsService.add(nome);
    this.allShoppingLists = await this.shoppingListsService.getAll();
    
    
  }

}
