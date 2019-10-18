
// Add button for trigger
// use step logic

// keyup not triggered from appended rows
// how to find the 1st and 2nd lowest income in object?
// What is infinity function?

var num = 1;


$(document).ready(function () {
    $(".form-control").keyup(processForm);
    processForm();
});

function processForm() {

    var businessIncome = parseInt($("#business-income").val().trim() || 0);
    var busIncomeRemain = businessIncome;
    var entityList = [];

    function Constructor() {
        this.name = "";
        this.income = 0;
        this.allocate = 0;
    };

    for (i = 0; i <= num; i++) {
        var addEntity = new Constructor();
        addEntity.name = $("#name" + i).attr('id');
        addEntity.income = parseInt($("#current-income" + i).val().trim() || 0);
        entityList.push(addEntity);
    }

    console.log("ENTITY LIST: ", entityList)

    var incomeList = [];


    // Income from objects
    // entityList.forEach(function(element){
    //     incomeList.push({id: element.name, income: element.income});
    // });

    // console.log("INCOME LIST", incomeList);

    var minIncome = 9999999999999999;
    var minIncomeIndex;
    for (i = 0; i < entityList.length; i++) {
        if(entityList[i].income < minIncome){
            minIncome = entityList[i].income;
            minIncomeIndex = i;
        }
    }

    console.log(minIncomeIndex);





   // var min = Math.min.apply(null, entityList.income);
   // var secondMin = Math.min.apply(null, incomeList.filter( n => n != min));

    // https://www.youtube.com/watch?v=lQtDH0kW6II
    // https://www.w3schools.com/js/js_function_apply.asp
    // https://stackoverflow.com/questions/47316492/possible-to-use-math-min-to-get-second-smallest-number-from-array

    //console.log(incomeList);
    //console.log(min);
   // console.log(secondMin);


//---------------------------------

    
    // TODO: iterate all the people and sort using https://underscorejs.org/ 
        // if (income1 > income2 && businessIncome > 0) {

        //     allocator1()
        //     equaliser()
        // } else if (income1 < income2 && businessIncome > 0) {

        //     allocator2()
        //     equaliser()
        // } else {
        //     equaliser();
        //     console.log("They match");
        // }

        // function allocator1() {
        //     var checker = income1 - income2;
        //     if (checker < busIncomeRemain) {
        //         allocate2 += checker;
        //         busIncomeRemain -= checker;
        //     } else {
        //         allocate2 += busIncomeRemain
        //         busIncomeRemain -= allocate2;
        //     }
        // }

        // function allocator2() {
        //     var checker = income2 - income1;
        //     if (checker < busIncomeRemain) {
        //         allocate1 += checker;
        //         busIncomeRemain -= checker;
        //     } else {
        //         allocate1 += busIncomeRemain
        //         busIncomeRemain -= allocate1;
        //     }
        // }

        // function equaliser() {
        //     allocate1 += busIncomeRemain / 2;
        //     allocate2 += busIncomeRemain / 2;
        //     console.log("1 allocated " + allocate1 + " Total income: " + (income1 + allocate1));
        //     console.log("2 allocated " + allocate2 + " Total income: " + (income2 + allocate2));

        //     $("#allocate1").attr("value", allocate1);
        //     $("#allocate2").attr("value", allocate2);
        // };


};

    // Trigger on input


$("#add-button").on("click", function () {

    num++;
    $(".form-control").off("keyup");

    $("#append").append(
        ` <div class="form-row">
                        <div class="form-group col-lg-2">
                            <input type="text" class="form-control" id="${"name" + num}" placeholder="Name">
                        </div>
                        <div class="form-group col-lg-2">
                            <input type="number" class="form-control" id="${"current-income" + num}"
                                placeholder="Current Income">
                        </div>
                        <div class="form-group col-lg-2">
                            <input type="number" class="form-control" id="${"max-income" + num}" placeholder="Max Income">
                        </div>
                        <div class="form-group col-lg-2">
                            <input type="number" class="form-control" id="${"allocate" + num}" placeholder="$"  value="" readonly>
                        </div>
                    </div>
            </div> `
    );
     
    $(".form-control").keyup(processForm);
   // processForm();

});

$("#remove-button").on("click", function () {
    $('.form-row').last().remove();
    num--;
    processForm();
});