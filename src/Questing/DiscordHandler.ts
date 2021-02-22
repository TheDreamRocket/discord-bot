import {Message} from "discord.js"
import {Result,Ok,Err} from "ts-results"

import {Quest} from "./Quest"

//import {CreateQuestWorkflow, CreateQuestCMD} from "./CreateQuestWorkflow"


//!createQuest {""} {number} {number}
export async function CreateQuestHandler(msg:Message){
    //TODO authorization
    const cmdString=msg.content

    //extract name
    //const name
    const firstQuoteSymbol=cmdString.indexOf("\"",0)
    if(firstQuoteSymbol == -1){
        //return Err(new Error("cant find first quote"))
        console.error("cant find first quote")
        msg.reply("cant find first quote")
        return
    }
    const secondQuoteSymbol=cmdString.indexOf("\"",firstQuoteSymbol)
    if(secondQuoteSymbol == -1){
        //return Err(new Error("cant find first quote"))
        console.error("cant find second quote")
        msg.reply("cant find second quote")
        return
    }

    const name=cmdString.substring(firstQuoteSymbol+1, secondQuoteSymbol)
    console.debug("name: ",name)

    const restArgs=cmdString.substr(secondQuoteSymbol+1).split(" ")
    console.debug("args: ", restArgs)
    if(restArgs.length == 2){
        console.error("there should be three arguments")
        msg.reply("therer should be three arguments")
        return
    }

    const xp=Number(restArgs[0])
    if(isNaN(xp)){
        console.error("xp should be number")
        msg.reply("xp should be number")
        return
    }

    const learningSourceID=Number(restArgs[1])
    if(isNaN(learningSourceID)){
        console.error("learningSourceID should be number")
        msg.reply("learningSourceID  should be number")
        return
    }

    /*
    const cmd:CreateQuestCMD={
        name,xp,learningSourceID
    }

    const result=CreateQuestWorkflow(cmd)
    */

    //TODO figure out how to handle reject
    const result=await Quest.create(name,xp,learningSourceID)
    if(result.err){
        console.error("could not create quest")
        msg.reply("could not create quest")
        return
    }

    const quest=result.unwrap()
    if(await quest.save()){
        msg.reply("created quest")
    }else{
        msg.reply("failed to save quest")
    }
}