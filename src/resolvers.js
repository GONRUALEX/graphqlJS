import { tasks } from "./sample";
import User from "./models/Users";

export const resolvers = {
    Query: {

        he:()=>{
            return "jhdskfhs";
        },
        greet:(root, {name}, ctx)=>{
            console.log(ctx)
            return `hELLO ${name}`;
        },
        tasks:()=>{
            return tasks;
        },
        Users:async()=>{
            return  await User.find();

        }
    },

    Mutation:{
        createTask:(_, {input})=>{
            console.log(input);
            input._id =tasks.length;     
            tasks.push(input);
            return input;
        },

         createUser:async(_,{input})=> {
            const newUser = new User(input);
            await newUser.save();
            console.log(newUser);
            return newUser;
        },
        deleteUser:async(_,{_id})=>{
           return  await User.findByIdAndDelete(_id);
        },
        updateUser:async(_,{_id, input})=>{
           return await User.findByIdAndUpdate(_id,input,{new:true});
        }
    }
};