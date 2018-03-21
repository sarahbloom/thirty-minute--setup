let myApp = angular.module('myApp', []);

myApp.controller('WelcomeController', function(){
    console.log("controller is working");
    let self = this;
    self.greeting = "hi!!!";
    self.leave = "good bye!";
    self.math = 2 * 8;
    self.test = willThisWork(self.math)
})

function willThisWork(digit){
    if (digit == 16){
        return 'yes'
    }
    else{
        return 'no' 
    }
}