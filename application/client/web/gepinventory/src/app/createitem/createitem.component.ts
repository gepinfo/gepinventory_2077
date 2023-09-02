import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateitemService } from './createitem.service';





@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.scss'],
})

export class CreateitemComponent implements OnInit {
    public item:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        item-uuid: '',
        type: '',
        name: '',
        description: '',
        attachments: '',
        price: '',
        price-currency-type: '',
        cost: '',
        cost-currency-type: '',
        tags: '',
        ismatrix: '',
        matrix-id: '',
        warehouse: '',
        warehouse-loc: '',
        manufacturer: '',
        manufacture-country: '',
        lot-or-batch-num: '',
        external-reference-one: '',
        gephistoryid: '',
    }




    constructor (
        private createitemService: CreateitemService,
    ) { }

    ngOnInit() {
        this.item.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.createitemService.GpCreate(this.item).subscribe((data:any) => {
            this.item.item-uuid = ''
 	 	this.item.type = ''
 	 	this.item.name = ''
 	 	this.item.description = ''
 	 	this.item.attachments = ''
 	 	this.item.price = ''
 	 	this.item.price-currency-type = ''
 	 	this.item.cost = ''
 	 	this.item.cost-currency-type = ''
 	 	this.item.tags = ''
 	 	this.item.ismatrix = ''
 	 	this.item.matrix-id = ''
 	 	this.item.warehouse = ''
 	 	this.item.warehouse-loc = ''
 	 	this.item.manufacturer = ''
 	 	this.item.manufacture-country = ''
 	 	this.item.lot-or-batch-num = ''
 	 	this.item.external-reference-one = ''
 	 	this.item.gephistoryid = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}