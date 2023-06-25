import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { ShoppingList } from '../model/shopping-list';
import { ShoppingListItensService } from './shopping-list-itens.service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ShopItem } from '../model/shop-item';

@Component({
  selector: 'app-shopping-list-itens',
  templateUrl: 'shopping-list-itens.page.html',
  styleUrls: ['shopping-list-itens.page.scss']
})
export class ShoppingListItensPage implements OnInit {

  editMode:boolean = false;
  shoppingListItem: ShoppingList | undefined = undefined;
  private listId:number;
  private shoppingListItemService: ShoppingListItensService;
  private newItemModal: HTMLIonAlertElement;
  
  constructor(shoppingListItemService: ShoppingListItensService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private alertController: AlertController) {
    this.shoppingListItemService = shoppingListItemService;
    this.listId = +this.activatedRoute.snapshot.params['listId'];
  }

  editForm: FormGroup = this.fb.group({
    itens: this.fb.array([])
  })

  get shoppingListsFormArray(): FormArray{
    return this.editForm.controls['itens'] as FormArray;
  }

  get shoppingListsControls(): FormGroup[] {
    return this.shoppingListsFormArray.controls as FormGroup[];
  }

  async ngOnInit(): Promise<void> {
    await this.shoppingListItemService.init();
    await this.reload();
  }


  private async reload(){
    this.shoppingListItem = await this.shoppingListItemService.getShoppingList(this.listId);

  }

  async checkItem(e:any, itemIndex:number){
    if(this.shoppingListItem){
      this.shoppingListItem.itens[itemIndex].done = e.detail.checked;
      await this.shoppingListItemService.update(this.listId, this.shoppingListItem.itens);
      this.reload();
    }

  }

  async delete(index: number){
    if(this.shoppingListItem){
      const id = this.shoppingListItem.itens[index].id;
      await this.shoppingListItemService.delete(id, this.listId);
      this.shoppingListsFormArray.removeAt(index);
    }
  }

  async add(){
    this.newItemModal = await this.alertController.create(
      {
        header: 'Novo item',
        cssClass: 'secondary',
        buttons: ["OK", "Cancel"],
        inputs: [
          {
            name: 'description',
            type: 'text',
            placeholder: 'Descricao do item'
          }
        ]
      }
    );  
    await this.newItemModal.present();

    const data = await this.newItemModal.onDidDismiss();
    const descricao = data.data.values.description;
    if(!data.role){
      await this.shoppingListItemService.add(descricao, this.listId);
      await this.reload();
      if(this.editMode){
        this.edit();
      }
    }
  }

  edit(){
    this.editForm = this.fb.group({
      itens: this.fb.array([])
    })
    
    
    const lists = this.shoppingListItem?.itens;
    if(lists){
      lists.forEach(item => {
      
        const listGroup: FormGroup = this.fb.group({
          id: [item.id, Validators.required],
          description: [item.description, Validators.required],
          done: [item.done]
        })
        this.shoppingListsFormArray.push(listGroup);
        
      });
  
      this.editMode = true;
    }
    
  }

  async confirmEdit(){
    await this.shoppingListItemService.update(this.listId, this.editForm.value.itens);
    this.reload();
    this.editMode = false;
  }

}



