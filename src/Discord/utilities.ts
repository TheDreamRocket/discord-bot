import {Guild} from "discord.js"
import {Ok,Err,Result} from "ts-results"

import {DSC} from "../DiscordSingleton"

class DidntFindGuildError extends Error{ 
    constructor(){
        super()
        this.name="DidintFindGuildError"
        this.message="did not find DreamRocket guild"
    }
}

export function getDreamRocket():Result<Guild,DidntFindGuildError>{
    const DR=DSC.client.guilds.cache.find(g=>{ 
        return g.name=="DreamRocket"
    })
    if(DR == undefined){
        return Err(new DidntFindGuildError())
    }

    return Ok(DR)
}