var student = [];
function submit(){


    var nameofstudentarray = [];
    for (j = 1; j<=4;j++){
        var name = document.getElementById("s"+j).value;
        console.log(name);
        student.push(name);
    }
    console.log(student)
    document.getElementById("display").innerHTML=student;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
for (i=0; i<student.length;i++){
    nameofstudentarray.push("<h4>name - "+student[i]+"</h4>")
}
document.getElementById("display_without_commas").innerHTML=nameofstudentarray;
var removecommas = nameofstudentarray.join(" ");
document.getElementById("display_without_commas").innerHTML=removecommas;
}
function sort1(){
    student.sort();
    document.getElementById("display").innerHTML=student;
    var nameofstudentarray = [];
    for (i=0; i<student.length;i++){
        nameofstudentarray.push("<h4>name - "+student[i]+"</h4>")
    }
    document.getElementById("display_without_commas").innerHTML=nameofstudentarray;
    var removecommas = nameofstudentarray.join(" ");
    document.getElementById("display_without_commas").innerHTML=removecommas;
}

