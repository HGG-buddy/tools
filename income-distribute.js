
// Questions: Current model works only for 2 people. How to scale this (e.g. replace if statement)?

var num = 1

// Trigger on page load
$(document).ready(function () {

    // Trigger on input
    $(".form-control").keyup(processForm);

    function processForm() {

        var businessIncome = parseInt($("#business-income").val().trim() || 0);
        var busIncomeRemain = businessIncome;
        
        //TODO: grab the people row from the UI
        var entity = [
            {   name: $("#name1").val(),
                income: parseInt($("#current-income1").val().trim() || 0),
                allocate1: 0
            },            
            {   name: $("#name2").val(),
                income: parseInt($("#current-income2").val().trim() || 0),
                allocate1: 0
            },

        ]


//         var income1 = parseInt($("#current-income1").val().trim() || 0);
//         var income2 = parseInt($("#current-income2").val().trim() || 0);
//         //TODO: create an object People for each of the rows on the UI
//         //TODO: push each people on to an array

//         var allocate1 = 0;
//         var allocate2 = 0;
        
//         //TODO: iterate all the people and sort using https://underscorejs.org/ 
//         if (income1 > income2 && businessIncome > 0) {

//             allocator1() 
//             equaliser()
//         } else if (income1 < income2 && businessIncome > 0) {

//             allocator2()
//             equaliser()
//         } else {
//             equaliser();
//             console.log("They match");
//         }

//         function allocator1() {
//             var checker = income1 - income2;
//             if (checker < busIncomeRemain) {
//             allocate2 += checker;
//             busIncomeRemain -= checker;
//             } else {
//             allocate2 += busIncomeRemain
//             busIncomeRemain -= allocate2;
//             }
//         }

//         function allocator2() {
//             var checker = income2 - income1;
//             if (checker < busIncomeRemain) {
//             allocate1 += checker;
//             busIncomeRemain -= checker;
//             } else {
//             allocate1 += busIncomeRemain
//             busIncomeRemain -= allocate1;
//             }
//         }

//         function equaliser() {
//             allocate1 += busIncomeRemain / 2;
//             allocate2 += busIncomeRemain / 2;
//             console.log("1 allocated " + allocate1 + " Total income: " + (income1 + allocate1));
//             console.log("2 allocated " + allocate2 + " Total income: " + (income2 + allocate2));

//         $("#allocate1").attr("value",allocate1);
//         $("#allocate2").attr("value",allocate2);
//         };
//     };

//     $("#add-button").on("click", function () {

//         nameFun();

//         $("#append").append(
//             `<div class="form-row">
//                         <div class="form-group col-lg-2">
//                             <input type="text" class="form-control" id="${"name" + num}" placeholder="Name">
//                         </div>
//                         <div class="form-group col-lg-2">
//                             <input type="number" class="form-control" id="${"current-income" + num}" placeholder="Current Income">
//                         </div>
//                         <div class="form-group col-lg-2">
//                         <input type="number" class="form-control" id="${"max-income" + num}" placeholder="Max Income">
//                     </div>
//                         <div class="form-group col-lg-2">
//                         <input type="number" class="form-control" id="${"optimum" + num}" placeholder="$" readonly>
//                     </div>
//                     </div>
//                     </div>`
//         );
//     })

//     $("#remove-button").on("click", function () {
//         $('.form-row').last().remove();

//     });

//     function nameFun() {
//         num++;
//     }

// });

