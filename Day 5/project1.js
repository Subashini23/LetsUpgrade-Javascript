let inArray = [
    {
        name : "Suba",
        age : 22,
        city : "Chennai",
        salary : 40000,
    },
    {
        name : "Krish",
        age : 25,
        city : "Bangalore",
        salary : 30000,
    },
    {
        name : "Harini",
        age : 23,
        city : "Trichy",
        salary : 35000,
    },
    {
        name : "Dev",
        age : 25,
        city : "Chennai",
        salary : 320000,
    },
    {
        name : "Kiru",
        age : 24,
        city : "Mumbai",
        salary : 250000,
    },
];
function display(inArray=""){
    let tdata = "";
    let sno = 1;
inArray.forEach(function(user){
     let row = `<tr>
     <td>${sno}</td>
     <td>${user.name}</td>
     <td>${user.age}</td>
     <td>${user.city}</td>
     <td>${user.salary}</td>
     <td><button onclick="deleteUser(${sno}-1)">Delete</button></td>
     </tr>`
     sno++;
     tdata+=row;
    
});
document.getElementsByClassName("tablebody")[0].innerHTML=tdata;
}
display(inArray);

function search(){
        let sname = document.getElementsByClassName("searchName")[0].value;
        let scity = document.getElementsByClassName("searchCity")[0].value;
        let data = inArray.filter(function(user)
        {
            return(user.name.toUpperCase().indexOf(sname.toUpperCase()) !=-1 && user.city.toUpperCase().indexOf(scity.toUpperCase()) !=-1);
        });
    display(data);
    }
    function deleteUser(index)
    {
        inArray.splice(index,1);
        display(inArray);
    }