import { base_build } from "../builds/base_build";

export class Base{
    constructor(width,height){
        this.width=width;
        this.height=height;
        this.base = new Array(height);
        for(var i = 0;i < this.base.length;i++){
            this.base[i] = new Array<base_build>(width);
        }
    }
}