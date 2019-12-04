function myFunction() {
    var name = document.querySelector(".name").value;
    var surname = document.querySelector(".surname").value;
    var age = document.querySelector(".age").value;
    var radios = document.getElementsByName('gender');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.querySelector(".formularResult").innerHTML = "Subsemnatul" + " " + name + " " + surname + " " + ", cu vasta cuprinsa intre anii" + " " + age + " " + "de sex" + " " + radios[i].value;
        }
    }
    // console.log(genre);
    // document.querySelector(".formularResult").innerHTML = "Subsemnatul" + " " + name + " " + surname + " " + ", cu vasta cuprinsa intre anii" + " " + age + " " + "de sex" + " " + gender;
}

//
// function getValues() {
//     var age = document.querySelector(".name").value;
//     var weight = document.querySelector(".surname").value;
//     var final = calculateOperations(age,weight);
//     document.querySelector(".formularResult").innerHTML = final;
// }
//
// function calculateOperations(age,weight) {
//     var finalAge = age / 2;
//     var finalWeight = finalAge * weight / 4;
//     return finalWeight;
// }