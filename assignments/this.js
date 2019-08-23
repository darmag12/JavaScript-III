/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*    //Window Binding
* 1. If none of the 3 principals apply then the 'this' keyword will defult to the window object, unless you are on strict mode then it's just going to be undefined.
     //Implicit Binding
* 2. Implicit binding is when 'this' is referenced on the left of the dot in a function invocation.
      //New Binding
* 3. When a function is invoked with the new keyword the 'this' keyword inside that function is bound to the new object being constructed  which is 'this = {}'
     //Explicit Binding
* 4. Explicit binding is the use of .call, .apply and .bind to reference 'this' when invoking a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let name = {
food: 'taco',
meth: function taco (){

    function inner (){
    console.log(`Did you eat my ${this.food}?`)
    }
    inner()
}
}

name.meth();
// nobody has seen your taco sir (:
 


// Principle 2

// code example for Implicit Binding
let me = {
    name: 'Daryl',
    age: 21,
    sayName: function(){
        console.log(this.name);

    }
};
me.sayName();

// Principle 3

// code example for New Binding
let Xbox = function(display, storage, color){
    this.display = display;
    this.storage = storage;
    this.color = color;
}
let oneS = new Xbox ('4k', '500GB', 'white');
console.log(oneS);

// Principle 4

// code example for Explicit Binding
let student = {
    name: 'Bruce Lee',
    gpa: 4.5
}
 
function saysHello (){
    console.log(`Hello, my name is ${this.name} and I know kungfu!`)
}
saysHello.call(student);