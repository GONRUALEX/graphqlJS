import mongoose  from "mongoose";

export async function connect(){
try{
    await mongoose.connect('mongodb://localhost/mongodbgraphql',{
    useNewUrlParser:true
});

console.log("conectado a la bd");4
}catch(err){
    console.log("error al conectar",err);
}
}

