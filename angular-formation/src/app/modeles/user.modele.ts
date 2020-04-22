export class User {
    constructor(public name:string,
                public lastName:string,
                public email:string,
                public drinkPreference:string,
                //optional
                public hoobies?:string[]){}
}