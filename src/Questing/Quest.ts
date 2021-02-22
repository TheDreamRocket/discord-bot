import {Result,Ok,Err} from "ts-results"

export interface LearningSource{
    id:number
    link:string
}

export class Quest{
    private constructor(name:string,xp:number,learningSourceID:number){ }

    static async create(name:string,xp:number,learningSourceID:number)
    :Promise<Result<Quest,Error>>{
        if(xp < 1){
            return Err(new Error("xp must be above 1"))
        }

        if(learningSourceID != undefined){
            if(await this.validateLearningSourceID(learningSourceID) == false){
                return Err(new Error("learning source not found"))
            }
        }

        return Ok(new Quest(name,xp,learningSourceID))
    }

    private static async validateLearningSourceID(id:number):Promise<boolean>{
        return true
    }

    async save():Promise<boolean>{
        return true
    }
}