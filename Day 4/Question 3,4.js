let details = [
    {
        name : "Geetha",
        age : 19,
        country : "India",
        hobbies : ["travelling","music"],
    },

    {
        name : "Ravi",
        age : 45,
        country : "India",
        hobbies : ["travelling","music","hearing news"],
    },

    {
        name : "Laxmi",
        age : 20,
        country : "France",
        hobbies : ["travelling","reading"],
    },

    {
        name : "Lokesh",
        age : 25,
        country : "India",
        hobbies : ["Dancing","reading"],
    },

]
console.log("OBJECTS\n")
function display()
{
    details.forEach(function(ele)
    {
        console.log(`Name is ${ele.name}. Age is ${ele.age}. Country is ${ele.country}. Hobbies is ${ele.hobbies}.`)
    })
}
display();

console.log("OBJECTS WITH AGE 30\n")

function ageDisplay()
{
    details.forEach(function(ele)
    {
        if(ele.age < 30)
        {
            console.log(`Name is ${ele.name}. Age is ${ele.age}. Country is ${ele.country}. Hobbies is ${ele.hobbies}.`);
        }
    })
}
ageDisplay();

console.log("OBJECTS WITH COUNTRY INDIA \n")
function countryDisplay()
{
    details.forEach(function(ele)
    {
        if(ele.country == "India")
        {
            console.log(`Name is ${ele.name}. Age is ${ele.age}. Country is ${ele.country}. Hobbies is ${ele.hobbies}.`);
        }
    })
}
countryDisplay();