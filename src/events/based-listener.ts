import { Subjects } from './subjects';


interface Event {
    subject: Subjects,
    data: any
}
export abstract class Listener<T extends Event> {
    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: any): void;
    private client: any;
    protected awkWait = 5 * 1000;

    constructor(client: any) {
        this.client = client;
    }

    subsciptionOption() {
        return this.client 
    }

    listen() {

    }

    parseMessage(msg: any) {
    }
}
