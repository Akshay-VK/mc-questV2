import { base_item } from "../items/base_item";

export class Inventory{
    constructor(size){
        this.inv = new Array<base_item>(size);
    }
}