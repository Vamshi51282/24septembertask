var a={
    name:"vamshi",
     age:22,
    job:"Govt",
    salary:45000
}
 a.area="Warangal"
 console.log(Object.entries(a));
Object.freeze(a)
 Object.seal(a)
 a.job="vamshi"
 console.log(a);
 Object.isFrozen(a)
 Object.isExtensible(a)
console.log(Object.isExtensible(a));

// TASK !
var car={
    name:"ERTIGA",
    model:"aa",
    year:"2024"
}
Object.freeze(car)
car.price=300000,
car.name="Breeza"
console.log(car); 

// 2
var user={
    name:"vamshi",
    age:22,
    email:"singireddy@gamil.com"

}
Object.isFrozen(user)
console.log(Object.isFrozen(user)); 

// 3
var product={
    name:"laptop",
    catagory:"System",
    price:40000
}
Object.seal(product)
product.price=50
console.log(product);
console.log(Object.isSealed(product)); 

// 4
var laptop={
    brand:"HP",
    model:"i7 13th generation",
    price:65000
}
console.log(Object.keys(laptop)); 

// 5
var house={
    Location:"hyderabad",
    size:"double bed room",
    price:5000000
}
console.log(Object.values(house)); 



// Multiple Methods Questions:
// 6
var smartphone={
    phone:"iqoo z7 pro 5g",
    storage:"256gb",
    price:25000
}
Object.seal(smartphone)
smartphone.price=270000
console.log(smartphone); 
console.log(Object.isSealed(smartphone)); 

// 7
var book={
    title:"the monkey boy",
    author:"akashpatil",
    publishedyear:2004
}
Object.freeze(book)
book.publishedyear=2005 // not changed 
console.log(Object.isFrozen(book)); //true 

// 8
var person={
    fname:"akash",
    lname:"patil",
    age:22,
    job:"softwer",
    location:"hyderbad"
}
console.log(Object.keys(person)); //o/p - keys: ['fname', 'lname', 'age', 'job', 'location']
console.log(Object.values(person)); // o/p - values : ['akash', 'patil', 22, 'softwer', 'hyderbad']

// 9
var course={
    title:"java full stack",
    instructur:"vamshi",
    duration:"6months"
}
console.log(Object.entries(course));
delete course.duration
console.log(course); // here duration is deleted

// 10
var employee={
    name:"vamshi",
    position:"softwer empoloyee",
    salary:400000
}
Object.seal(employee)
employee.salary=50000
console.log(Object.keys(employee));
console.log(Object.values(employee));