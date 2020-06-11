import { Command } from 'commander';
import { Message } from 'discord.js';
import { help } from '../templates/help';

export class KokksukeBot {
    private readonly program = new Command();
    private readonly message: Message;

    constructor(message: Message) {
        this.message = message;
    }

    public async start(): Promise<void> {
        const content = this.message.content;

        if (content !== '--poe')
            return;

        await this.message.channel.send(help, {code: true});
    }
}
