import {Message} from "discord.js"

//handlers
import {CreateQuestHandler} from "./Questing/DiscordHandler"

import {DSC} from "./DiscordSingleton"
import {getDreamRocket} from "./Discord/utilities"
//import {removeLevelRoles} from "./LevelingSystem/LevelRoles"

DSC.init()
DSC.client.on("ready",function(){
    console.log("setting up event handlers")
    initHandlers()
    console.log("im vibin")
})

function initHandlers(){
    DSC.client.on("message",ParseCommand)
}

function ParseCommand(msg:Message){
    if(msg.author.id==DSC.client.user.id) return

    const cmd=msg.content.split(" ")[0]

    switch(cmd){
        case "!createQuest":
            CreateQuestHandler(msg)
        break
        /*
        case "!handQuest":
        break
        */
        default:
            msg.reply("no such command dummy")
    }
}