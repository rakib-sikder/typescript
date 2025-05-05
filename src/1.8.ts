{
    
    
    
    const user ={

    id:123,
    name:{
        fastname:"raki",
        middelname:"bull",
        lastname:"hasan"

    },
    contact:"0109201923",
    address:"bd" 
}
const {
contact,
name:{middelname},


}= user

const myfrind =["mera","maza","saka","saga"]
const[, , goodfrnd, ...rest]=myfrind


console.log(contact,goodfrnd,rest)
}