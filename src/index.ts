import Discord, { TextChannel } from 'discord.js';
import { KokksukeBot } from './kokksuke';

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${ client.user?.tag }!`);
});

client.on('message', async message => {
    const bot = new KokksukeBot(message);
    await bot.start()
});


client.login(process.env.TOKEN);





