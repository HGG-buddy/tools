
 
        
        $(".formtrigger").keyup(function() {
            var workIncome = parseInt($("#workIncome").val());
            var otherIncome = parseInt($("#otherIncome").val() || 0);
            var income =  workIncome + otherIncome;
            var calculate;
            var year = $("#year").val().trim();
            console.log(workIncome);
            console.log(otherIncome);
            console.log("total income = " + income);
            // var workIncome = parseInt(document.querySelector("#workIncome").value||0);
            // var otherIncome = parseInt(document.querySelector("#otherIncome").value||0);
            // var income = workIncome + otherIncome;
            // var calculate;
            
            // var year = parseInt(document.querySelector("#year").value);
            
            if(year == 2020){
                if (income < 18200) {
                    calculate = income * 0;
                } else if (income < 37000) {
                    calculate = (income - 18200) * 0.19;
                } else if (income < 90000) {
                    calculate = ((income - 37000) * 0.325)+3572;
                } else if (income < 180000) {
                    calculate = ((income - 90000) * 0.37)+20797;
                } else calculate = ((income - 180000) * 0.45)+54097;
            } else if (year == 2019) {
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
            

            $(".net-pay-week").text(((calculate / 52).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".net-pay-fortnight").text(((calculate / 26).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".net-pay-month").text(((calculate / 12).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".net-pay-annual").text(((calculate).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
 
            $(".tax-inc-week").text(((income / 52).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".tax-inc-fortnight").text(((income / 26).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".tax-inc-month").text(((income / 12).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".tax-inc-annual").text(income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            var taxAmount = income - calculate

            $(".tax-week").text(((taxAmount / 52).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".tax-fortnight").text(((taxAmount / 26).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".tax-month").text(((taxAmount / 12).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".tax-annual").text(taxAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));



        });