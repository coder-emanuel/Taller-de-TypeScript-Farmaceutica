import { medications } from "../models/tableMedications";
import { injectable } from "tsyringe";


@injectable()

export class RepositoryMedications{
    async finAll(){
        return await medications.findAll()
    }

    async findById(id:number){
        try {
            return await medications.findByPk(id)
        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }
    async createdNewMedication(medication: Partial<medications>){
        try{
            return await medications.create(medication)
        }catch(error:any){
            console.log('ah ocurrido un error',error)
        }
    }
}