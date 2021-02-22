import {Client} from "discord.js"


export class DSC{
    private static _client:Client

    private constructor(){ }
    
    static async init(){
        if(this._client == undefined){
            this._client = new Client()
            this._client.login(process.env.TOKEN).catch(e=>{
                throw e
            })
        }
    }

    static get client():Client{
        //return this._client
        return this._client
    }
}