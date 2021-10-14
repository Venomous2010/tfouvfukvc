
var part = "";
var NOP = "";

function add_part(){
        NOP = document.getElementById("add_participant").value;
        part = NOP + "," + part;
        console.log(part);
        document.getElementById("list hr").innerHTML = part;
}

function show_list(){
    document.getElementById("div").innerHTML = part;
}