<<<<<<< HEAD
import {_base}  from './base';
=======
import {Base} from './base.js'
import { Inventory } from './inventory.js';
>>>>>>> 54306afb722568ed4b301bd11a1ae001f319da90

export class user{
	constructor(interaction){
		this.level=1;
<<<<<<< HEAD
		this.base=new _base(25,25);
=======
		this.xp=0;
		this.id = interaction.user.id;
		this.username = interaction.user.username;
		this.base=new Base(25,25);
		this.inventory = new Inventory(45);
>>>>>>> 54306afb722568ed4b301bd11a1ae001f319da90
	}
}