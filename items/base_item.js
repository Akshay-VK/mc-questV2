export class base_item{
    constructor(durability){
        this.durability=durability;
        this.broken=false;
    }
    reduceDurability(amt){
        this.durability -= amt;
        if(this.durability<=0){
            this.durability=0;
            this.broken=true;
        }
    }
}