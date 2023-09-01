
export interface item 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   item-uuid: { type: String },
   type: { type: String },
   name: { type: String },
   description: { type: String },
   attachments: { type: String },
   price: { type: Number },
   price-currency-type: { type: String },
   cost: { type: Number },
   cost-currency-type: { type: Number },
   tags: { type: String },
   ismatrix: { type: Boolean },
   matrix-id: { type: String },
   warehouse: { type: String },
   warehouse-loc: { type: String },
   manufacturer: { type: String },
   manufacture-country: { type: String },
   lot-or-batch-num: { type: String },
   external-reference-one: { type: String },
   gephistoryid: { type: String }
}



