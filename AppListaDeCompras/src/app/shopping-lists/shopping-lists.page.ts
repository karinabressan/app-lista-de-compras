import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingList } from '../model/shopping-list';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: 'shopping-lists.page.html',
  styleUrls: ['shopping-lists.page.scss']
})
export class ShoppingListsPage implements OnInit{

  editMode:boolean = false;
  private shoppingListsService: ShoppingListsService;

  constructor(shoppingListsService: ShoppingListsService, private alertController: AlertController, private fb: FormBuilder) {
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
    return this.shoppingListsService.getAll();
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
  
  confirmEdit():void{
    this.editMode = false;
    this.shoppingListsService.update(this.editForm.value.shoppingLists);
  }

  delete(index: number){
    this.shoppingListsFormArray.removeAt(index);
    this.shoppingListsService.update(this.editForm.value.shoppingLists);
  }

  async add():Promise<void>{
    const alert = await this.alertController.create(
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

    await alert.present();

    const data = await alert.onDidDismiss();
    const nome = data.data.values.title;

    this.shoppingListsService.add(nome);
    
  }

}
