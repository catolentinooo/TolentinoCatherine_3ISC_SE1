let myself ={
    firstName: 'Mary Catherine Angela',
    lastName: 'Tolentino',
    age: 20,
    subject: 'ICS 2609',

    introduce(){
        return "Hello, I am" + ' ' + this.firstName + ' ' + this.lastName
    },

    enrolled(){
        return "I am enrolled in" + ' ' + this.subject
    }
};

console.log(myself.introduce());
console.log(myself.enrolled())