import { Request, Response } from 'express';
import {itemDao} from '../dao/itemDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let item = new itemDao();

export class itemService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemService.ts: GpDelete')
     let  itemId = req.params.id;
     item.GpDelete(itemId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemService.ts: GpUpdate')
     let  itemData = req.body;
     item.GpUpdate(itemData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemService.ts: GpGetNounById')
     let  itemId = req.params.id;
     item.GpGetNounById(itemId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemService.ts: GpGetAllValues')
     
     item.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemService.ts: GpCreate')
     let  itemData = req.body;
     item.GpCreate(itemData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into itemService.ts: GpGetNounCreatedBy')
     let  itemData = { created_by: req.query.createdby };
     item.GpGetNounCreatedBy(itemData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from itemService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}