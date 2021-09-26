import * as fs from 'fs';

import * as http from 'http';  

import { Client, Intents, Collection } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.commands = new Collection();
const cmdFiles = fs.readdirSync('./commands').filter(v => v.endsWith('.js'));
for(const f of cmdFiles){
    const cmd = await import(`./commands/${f}`);
    client.commands.set(cmd.data.name, cmd);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	const cmd = client.commands.get(interaction.commandName);
    if(!cmd) return;

    try {
		await cmd.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

// Login to Discord with your client's token
client.login(process.env.TOKEN);