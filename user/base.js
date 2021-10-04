export class base{
    constructor(width, height){
        this.width=width;
        this.height=height;
        this.base = new Array<Array>(height);
        for(var i = 0;i<height;i++){
            this.base[i] = new Array(width);
        }
    }
}