import {getDreamRocket} from "../Discord/utilities"


export async function removeLevelRoles(){
    const DRResult=await getDreamRocket()
    /*
    if(DRResult.err){
        console.error("cant remove roles, because we cant find DreamRocket")
        return
    }
    */

    const DR=DRResult
    //const DR=DRResult.unwrap()
    DR.roles.cache.forEach(async (role)=>{
        if(role.name.startsWith("Level")){
            role.delete().catch(()=>console.error(`could not delete role ${role.name}`))
        }
    })
}