var person = {
    email: "chelaa@gmail.com",
    name: 'Chelaa',
    login(){
        console.log(this.email,'has logged in')
    },
    logout(){
        console.log(this.email,'has logged out')
    }
};
person.name= 'emma'
person['email'] = 'emma@gmail.com'
console.log(person.email)
person
person.login();
person.logout()

// classes in js
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score =0;
        
    }
    // methods should be placed inside a User class not constructor
    login(){
        console.log(this.email, 'just logged in')
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out')
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'score is now',this.score)
        return this; //return that particular instance(user)
    }
}
// class inheritance
class Admin extends User{ //admin only is allowed to delete
    deleteUser(user){
        users =users.filter(u =>{
            return u.email != user.email
        })
    }
}

var userOne = new User('faith@gmail.com','faith');
var userTwo = new User('moshi@gmail.com','moshi');
var admin = new Admin('admin@gmail.com','admin')

// variable for class admin
var users = [userOne, userTwo,admin];
// new keyword
// creates a new object
// set the value of 'this' to be the new empty object
// calls the constructor method
console.log(userOne);
console.log(userTwo)
userOne.login();
userTwo.logout();



// method chaining--to apply u must return this in each an every method.
userOne.login().updateScore().updateScore().logout();
// faith@gmail.com just logged in
// object.js:37 faith@gmail.com score is now 1
// object.js:37 faith@gmail.com score is now 2
// object.js:32 faith@gmail.com just logged out

// deleting a user
admin.deleteUser(userTwo)
console.log(users)



function User1(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
   
}
// create a new user
User1.prototype.login = function(){
    this.online = true;
    console.log(this.email,'has logged in');
}
User1.prototype.logout = function(){
    this.online = false;
    console.log(this.email,'has logged out');
}

// inheritance
function Admin1(...args){
    User1.apply(this, args);
    // just belong to the user only
    this.role = 'super admin'
}
//create an object
Admin1.prototype = Object.create(User1.prototype) //inherited from the user prototype

Admin1.prototype.deleteUser1= function(u){
    users1 = users.filter(user =>{
        return user.email != u.email;
    })
}

var userThree = new User1('vicky@gmail.com','vicky');
var userFour = new User1('clare@gmail.com','clare');

var admin1 = new Admin1('admin1@gmail.com','admin1')

// create an array of users where admin can delete the user
var users1 = ['userThree', 'userFour','admin']

console.log(userThree);
userFour.login()
console.log(admin1);

// admin can now login
admin1.login()

// to check all users 
users1
admin.deleteUser(users1[1])

users1
