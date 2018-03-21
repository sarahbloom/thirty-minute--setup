let myApp = angular.module('myApp', []);

myApp.controller('WelcomeController', function(){
    console.log("controller is working");
    let self = this;
    self.greeting = "hi!!!";
    self.leave = "good bye!";
})
