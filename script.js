
var workIncome;
var otherIncome;
var income;
var calculate;
var year;
var netIncome;

var foreignRes = false;
var helpLoan = false;
var helpRepay = 0;

$(document).ready(function () {
    processForm()

    $(".formtrigger").keyup(processForm);
    // don't use  (processForm());

    $(".checkbox").change(function () {
        var optionStatus = $(this).attr("option");
        optionStatus == "false"? $(this).attr("option","true"): $(this).attr("option","false")
        processForm()
    });
});

function processForm() {
    workIncome = parseInt($("#workIncome").val() || 0);
    otherIncome = parseInt($("#otherIncome").val() || 0);
    income = workIncome + otherIncome;
    year = $("#year").val().trim();

    var foreignOption = $("#foreign-resident").attr("option");
    var helpLoanOption = $("#help-loan").attr("option");

    if (foreignOption == "true") {

        foreignCal()

    } else if (helpLoanOption == "true") {
        
        helpCal()

    } else {

        normalCal()
    };
};
function normalCal() {

    if (year == "2019-2020") {
        if (income < 18200) {
            calculate = income * 0;
        } else if (income < 37000) {
            calculate = (income - 18200) * 0.19;
        } else if (income < 90000) {
            calculate = ((income - 37000) * 0.325) + 3572;
        } else if (income < 180000) {
            calculate = ((income - 90000) * 0.37) + 20797;
        } else calculate = ((income - 180000) * 0.45) + 54097;
    } else if (year == "2018-2019") {
        if (income < 18200) {
            calculate = income * 0;
        } else if (income < 37000) {
            calculate = (income - 18200) * 0.19;
        } else if (income < 90000) {
            calculate = ((income - 37000) * 0.325) + 3572;
        } else if (income < 180000) {
            calculate = ((income - 90000) * 0.37) + 20797;
        } else calculate = ((income - 180000) * 0.45) + 54097;
    } else if (year == 2018);

    netIncome = income - calculate;
    displayfun(netIncome)

};

function foreignCal() {
    if (income <= 90000) {
        calculate = (income * 0.325)
    } else if (income <= 180000) {
        calculate = ((income - 90000) * 0.37) + 29250
    } else if (income > 180000) {
        calculate = ((income - 180000) * 0.45) + 62550
    };
    netIncome = income - calculate;
    displayfun(netIncome)
};

function helpCal() {
    if (income <= 45881) {
        helpRepay = 0
    } else if (income <= 52973) {
        helpRepay = income * 0.01
    } else if (income > 56151) {
        helpRepay = income * 0.02
    } else if (income > 59521) {
        helpRepay = income * 0.025
    } else if (income > 63092) {
        helpRepay = income * 0.03
    } else if (income > 66877) {
        helpRepay = income * 0.035
    } else if (income > 70890) {
        helpRepay = income * 0.040
    } else if (income > 75144) {
        helpRepay = income * 0.045
    } else if (income > 79652) {
        helpRepay = income * 0.05
    } else if (income > 84432) {
        helpRepay = income * 0.055
    } else if (income > 89498) {
        helpRepay = income * 0.06
    } else if (income > 94868) {
        helpRepay = income * 0.065
    } else if (income > 100560) {
        helpRepay = income * 0.07
    } else if (income > 106593) {
        helpRepay = income * 0.075
    } else if (income > 112989) {
        helpRepay = income * 0.08
    } else if (income > 119769) {
        helpRepay = income * 0.085
    } else if (income > 126955) {
        helpRepay = income * 0.09
    } else if (income > 134572) {
        helpRepay = income * 0.095
    } else {
        helpRepay = income * 0.010
    }
    normalCal()
};

function displayfun(netIncome) {

    var helpLoanOption = $("#help-loan").attr("option");
    if (helpLoanOption == "true") {
        netIncome -= helpRepay;
    };
    
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

    var effectiveTaxRate = ((calculate/income).toFixed(2))*100;
    $("#effectiveTax").text(`Your effective tax rate is ${effectiveTaxRate} %`);

};
