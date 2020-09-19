window.onload = function(){
let inArray=[];
//console.log(localStorage.getItem("Busstop"));
if(localStorage.getItem("Busstop")==null)
{
    localStorage.setItem("Busstop",JSON.stringify(inArray));
}

};

function display(initialArray = undefined){
    let tdata = "";
    let sno = 1;
    let Busstop;
    if(initialArray==undefined)
    {
        Busstop=JSON.parse(localStorage.getItem("Busstop"));
    }
    else{
        Busstop=initialArray;
    }
Busstop.forEach(function(user){
     let row = `<tr>
     <td>${sno}</td>
     <td>${user.name}</td>
     <td>${user.source}</td>
     <td>${user.destination}</td>
     <td>${user.number}</td>
     <td>${user.passenger}</td>
     <td><button onclick="deleteUser(${sno}-1)">Delete</button></td>
     </tr>`
     sno++;
     tdata+=row;
    
});
document.getElementsByClassName("tablebody")[0].innerHTML=tdata;
}
display();
function submitData(e)
{
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number= document.getElementById("number").value;
    let passenger = document.getElementById("passenger").value;
    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.passenger=passenger;
    let Busstop = JSON.parse(localStorage.getItem("Busstop"));
    Busstop.push(bus)
    localStorage.setItem("Busstop",JSON.stringify(Busstop));
    let Buss=JSON.parse(localStorage.getItem("Busstop"));
    display(Buss);
    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("passenger").value="";
}
function search(){
        let ssource = document.getElementsByClassName("searchSource")[0].value;
        let sdest = document.getElementsByClassName("searchDestination")[0].value;
        let Busstop = JSON.parse(localStorage.getItem("Busstop"));
        let data = Busstop.filter(function(user)
        {
            return(user.source.toUpperCase().indexOf(ssource.toUpperCase()) !=-1 && user.destination.toUpperCase().indexOf(sdest.toUpperCase()) !=-1);
        });
    display(data);
    }
function deleteUser(index)
    {
        let Busstop = JSON.parse(localStorage.getItem("Busstop"));
        Busstop.splice(index,1);
        localStorage.setItem("Busstop",JSON.stringify(Busstop))
        display(Busstop);
    }
    