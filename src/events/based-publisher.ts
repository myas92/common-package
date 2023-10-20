import { Subjects } from './subjects';

interface Event {
    subject: Subjects,
    data: any
}
export abstract class Publisher<T extends Event> {
    abstract subject: T['subject'];
    private client;

    constructor(client: any) {
        this.client = client;
    }


    publish(data: T['data']): any{
        return false
    }
}


