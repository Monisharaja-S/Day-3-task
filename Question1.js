//How to compare two JSON have the same properties without order?
let obj1={name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
if(obj1["name"]==obj2["name"] && obj1["age"]==obj2["age"])
{
    console.log("Same properties");
}
else{
    console.log("Not same properties");
}