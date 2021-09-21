var name1 = "world";
name1 = "hi ho";
//function in TS
var tsFunction = function (name, surname) {
    return name + " " + surname;
};
console.log(tsFunction("dwi", "d"));
var user1 = {
    name: "monster",
    age: 2,
    getMessage: function () {
        return "a";
    }
};
var user2 = {
    name: "monster2",
    age: 22,
    getMessage: function () {
        return "a";
    }
};
//union
var union = "1";
var popularThing = ["something", "B"];
//void
var doSomething = function () {
    console.log("doSomething");
};
//DOM
var someElement = document.querySelector(".foo");
console.log("some element", someElement.value);
//Event Listener
var eventElement = document.querySelector(".fa");
eventElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
//classes in ts
var UsersNew = /** @class */ (function () {
    function UsersNew(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    UsersNew.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return UsersNew;
}());
var userCl = new UsersNew("test", "name");
console.log(userCl.getFullName);
