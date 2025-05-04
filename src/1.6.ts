
// Function Declaration
function fast(one:number, two:number):number{
    return one+two;

}
//arrow function
const arrowFast=(one:number, two:number):number=>one+two

//method 

const myself:{name:string;
    balance:number;
    deposit(money:number):number;
}={
    name:"Rakib",
    balance:1000,
    deposit(money){
        return this.balance+money
    },

}

