import * as fs from 'fs';

import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';
dotenv.config();


const commands = [];
const files = fs.readdirSync('./commands').filter(v => v.endsWith('.js'));
for(const file of files){
	//const cmd = require(`./commands/${file}`);
	const cmd =  await import(`./commands/${file}`);
	commands.push(cmd.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Successfully registered application commands.");
  } catch (error) {
    console.error(error);
  }
})();