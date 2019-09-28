
// issue - foreign resident dont update on tick if no keyup


console.log(foreignRes);
var foreignRes;
var workIncome;
var otherIncome;
var income;
var calculate;
var year;
var netIncome;

// not reducing the scope via tick


// use onload and trigger inside the function  https://learn.jquery.com/using-jquery-core/document-ready/

$(document).ready(function() {
    processForm()

$(".formtrigger").keyup(processForm);
// don't use  (processForm());
$("#foreign-resident, #help-loan").change(function() {
    foreignRes = $("#foreign-resident").val();
    
        console.log(foreignRes)
    });



});



function processForm () {

        
            workIncome = parseInt($("#workIncome").val() || 0);
            otherIncome = parseInt($("#otherIncome").val() || 0);
            income =  workIncome + otherIncome;
            year = $("#year").val().trim();
         
            console.log(workIncome);
            console.log(otherIncome);
            console.log("total income = " + income);

            if (foreignRes == "foreign-resident") {

                if(income <= 90000) {
                    calculate = (income * 0.325)
                } else if (income <= 180000) {
                    calculate = ((income - 90000) * 0.37) + 29250
                } else if (income > 180000) {
                    calculate = ((income - 180000) * 0.45) + 62550
                };

                netIncome = income - calculate;
                displayfun (netIncome)

            } else {
            
            if(year == "2019-2020"){
                if (income < 18200) {
                    calculate = income * 0;
                } else if (income < 37000) {
                    calculate = (income - 18200) * 0.19;
                } else if (income < 90000) {
                    calculate = ((income - 37000) * 0.325)+3572;
                } else if (income < 180000) {
                    calculate = ((income - 90000) * 0.37)+20797;
                } else calculate = ((income - 180000) * 0.45)+54097;
            } else if (year == "2018-2019") {
                if (income < 18200) {
                    calculate = income * 0;
                } else if (income < 37000) {
                    calculate = (income - 18200) * 0.19;
                } else if (income < 90000) {
                    calculate = ((income - 37000) * 0.325)+3572;
                } else if (income < 180000) {
                    calculate = ((income - 90000) * 0.37)+20797;
                } else calculate = ((income - 180000) * 0.45)+54097;
            } else if (year == 2018);
        };
            netIncome = income - calculate;
            displayfun (netIncome)
        };

function displayfun (netIncome) {
        $(".net-pay-week").text(((netIncome / 52).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".net-pay-fortnight").text(((netIncome / 26).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".net-pay-month").text(((netIncome / 12).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".net-pay-annual").text(((netIncome).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

        $(".tax-inc-week").text(((income / 52).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".tax-inc-fortnight").text(((income / 26).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".tax-inc-month").text(((income / 12).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".tax-inc-annual").text(income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

       

        $(".tax-week").text(((calculate / 52).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".tax-fortnight").text(((calculate / 26).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".tax-month").text(((calculate / 12).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $(".tax-annual").text(calculate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

};
