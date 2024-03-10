const person={
    name:"shafeeq",
}

function sayhello(message){
    console.log(message,this.name)
}

const greet = sayhello.bind(person,'hello')

greet()



