import { promises as fs} from "fs";
import  crypto from 'crypto';
import { Message, MessageMutation } from './types';

const filename ="./db.json";
let data: Message[] = [];

const fileDb = {
    async init(){
        try{
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getMessages(queryDate?: string) {
        if(queryDate) {
            return  data.filter((message) => Date.parse(message.datetime) > Date.parse(queryDate));
        }

        const filteredMessage = data.sort((firstDate, secondDate) => Date.parse(secondDate.datetime) - Date.parse(firstDate.datetime));
        return filteredMessage.slice(0, 30);
    },
    async addMessages(item: MessageMutation) {
        const msq:Message = {
            id: crypto.randomUUID().toString(),
            ...item,
            datetime: new Date().toString(),
        };

        data.push(msq);
        await this.save();
        return msq;
    },
    async save() {
        await fs.writeFile(filename, JSON.stringify(data, null, 2))
    }
}

export default fileDb;