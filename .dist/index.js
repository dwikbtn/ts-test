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
