function compute()
{
    var result = document.getElementById("result");
    var principal = document.getElementById("principal").value;
    if (isNaN(principal) || principal < 1) {
        alert("Please enter a positive number for Principal.");
        document.getElementById("principal").focus();
        result.innerHTML = "";
    } else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
       
        var year = new Date().getFullYear() + parseInt(years);

        result.innerHTML = "If you deposit " + principal + ",<br\>at an interest rate of " + rate +
        "%<br\>You will receive an amount of " + interest + ", <br\>in the year " + year + ".<br\>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval + "% ";
}
        