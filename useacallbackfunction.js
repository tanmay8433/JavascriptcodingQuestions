function greet(name,callback){
callback(`hello ${name}`)
}

greet("tanmay",message=>console.log(message))