class simple{
    constructor(name){
        this.name=name
    }
    get(){
        console.log(`my name is ${this.name}`)
    }
}
let call=new simple("tanmay")
call.get()