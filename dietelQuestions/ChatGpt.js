function MyClass() {
    var privateVar = "I am a private variable";

    function privateMethod() {
        console.log("I am a private method");
    }

    this.publicMethod = function() {
        console.log("I am a public method");
        console.log(privateVar);
        privateMethod();
    }
}

var myInstance = new MyClass();
myInstance.publicMethod();