function para1(){
var input = [];
for(var i = 1; i<=6; i++){
    input.push(document.getElementById("par_line_" + i).value);
}
document.getElementById("showpara1").innerHTML = input.join(". ");
}

function para2(){
    var input = [];
    for(var i = 1; i<=6; i++){
        input.push(document.getElementById("par2_line_" + i).value);
    }
    document.getElementById("showpara2").innerHTML = input.join(". ");
    }
    



