"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const client = new discord_js_1.default.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
    console.log('> SUCE');
    if (msg.channel.name !== 'poe-bot') {
        return;
    }
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
client.login('NzIwNjc3OTU0NTQzNDE5NTc0.XuJoBQ.DSg0z7Op1IJcnKKgjxPHuft6EEo');
