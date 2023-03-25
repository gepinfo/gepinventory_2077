import { Component, OnInit } from '@angular/core';
import { GpinventorycreateService } from './gpinventorycreate.service';

@Component({
  selector: 'app-gpinventorycreate',
  templateUrl: './gpinventorycreate.component.html',
  styleUrls: ['./gpinventorycreate.component.scss'],
})

export class GpinventorycreateComponent implements OnInit {
    public item:any = {
        created_date_at: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date_at: '',
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
        private gpinventorycreateService: GpinventorycreateService,
    ) { }

    ngOnInit() {
        this.item.created_by = sessionStorage.getItem('email') || ''; 
    }
}