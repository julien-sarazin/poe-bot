const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.channel.name !== 'poe-bot') {
        return;
    }

    console.log(msg);
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

client.login('NzIwNjc3OTU0NTQzNDE5NTc0.XuJd-w.QZCmyKMX0vNvByO8GtIapZ33vXQ');