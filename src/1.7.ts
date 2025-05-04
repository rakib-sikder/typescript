const frnd: string[]=["Rakib","Sikder","Rafiq","Sikder"];
const frnd2: string[]=["Rakib","Sikder","Rafiq","Sikder"];\
frnd.push(...frnd2)

const frnd3={
    firstfriend:"Rakib",
    secondfriend:"Sikder",
    thirdfriend:"Rafiq"
}

const frnd4={
    firstfriend:"Rakib",
    secondfriend:"Sikder",
    thirdfriend:"Rafiq"}

    const allfrnd={
        ...frnd3,
        ...frnd4
    } 


    const greetings=(...names:string[])=>{
        names.forEach((element: string): string => 
            `Hello ${element}` );
    }

    greetings("Rakib","Sikder","Rafiq")