
 
        
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
            
            var netIncome = income - calculate

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



        });