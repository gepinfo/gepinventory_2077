import * as mongoose from 'mongoose';
import itemModel from '../models/daomodels/item';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class itemDao {
    private item = itemModel;
    constructor() { }
    
    public async GpDelete(itemId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpDelete');

    

    
    
    
    this.item.findByIdAndRemove(itemId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpUpdate');

    

    
    
    
    itemData.last_modified_date_at = new Date(),
                                                   this.item.findOneAndUpdate({ _id: itemData._id }, itemData).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpUpdate');

         let newresult = result.toObject();  
                                                     delete newresult._id;
                                                     result.last_modified_date_at = "";
                                                    let temp = new itemModel(newresult);
                                                    temp.save();

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(itemId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpGetNounById');

    

    
    
    
    this.item.aggregate(([{"gephistoryid":itemId}, { "$sort": { "last_modified_date_at": -1 }}, { $limit : 1 }])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpGetNounById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpGetAllValues');

    

    
    
    
    this.item.aggregate(([
                        { "$sort": { "last_modified_date_at": 1 } },{ "$group": { "_id": "$gephistoryid",  "item": { "$last": "$$ROOT" }  }}    
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpGetAllValues');

        let lastupdated:any = [];
                         result.forEach(item=> lastupdated.push(item.item))
                         result=lastupdated 

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpCreate');

    let gepCallGuid = `${generate(dictionary.numbers, 50)}`;
                    ticketsData.gephistoryid = gepCallGuid;
                    let temp = new itemModel(itemData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(itemData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into itemDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.item.aggregate(([
                        { $match: { $and: [{ created_by: itemData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from itemDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}