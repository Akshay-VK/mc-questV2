import { SlashCommandBuilder } from '@discordjs/builders';

export const data = new SlashCommandBuilder().setName('ping').setDescription('replies with pong!.');
export async function execute(interaction) {
    await interaction.reply('pong');
}