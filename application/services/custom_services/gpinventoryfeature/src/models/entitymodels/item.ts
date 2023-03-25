
export interface item 
{
   created_date_at: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date },
   item-uuid: String,
   type: String,
   name: String,
   description: String,
   attachments: String,
   price: Number,
   price-currency-type: String,
   cost: Number,
   cost-currency-type: Number,
   tags: String,
   ismatrix: Boolean,
   matrix-id: String,
   warehouse: String,
   warehouse-loc: String,
   manufacturer: String,
   manufacture-country: String,
   lot-or-batch-num: String,
   external-reference-one: String,
   gephistoryid: String
}
