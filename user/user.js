import {Base} from './base.js'
import { Inventory } from './inventory.js';

export class user{
	constructor(interaction){
		this.level=1;
		this.xp=0;
		this.id = interaction.user.id;
		this.username = interaction.user.username;
		this.base=new Base(25,25);
		this.inventory = new Inventory(45);
	}
}