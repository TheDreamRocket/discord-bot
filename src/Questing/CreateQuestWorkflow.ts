import {Result,Ok,Err} from "ts-results"

export interface CreateQuestCMD{
    name:string
    xp:number
    learningSourceID:number | null
}

export function CreateQuestWorkflow(cmd:CreateQuestCMD):Result<null,Error>{

    //name check?

    //validate XP

    return Ok(null)
}