// console.log("my files is work")

function total() {
    var billAmt = document.querySelector("#bill-ammount");
    var PerAmt = document.querySelector("#percentage-ammount");
    billAmt = +billAmt.value;
    PerAmt = +PerAmt.value;

    var TotalValue = Math.round(billAmt * PerAmt) / 100;

    document.querySelector("#tip-ammount").value = TotalValue;
    var TotalAmt = billAmt + TotalValue;
    document.querySelector("#total-ammount").value = TotalAmt;
    clear();

}
function clear() {

    document.querySelector("#bill-ammount").value = ""
    document.querySelector("#percentage-ammount").value = ""
}

function blank(ele){
    if(ele.value === ""){
        document.querySelector("#" + ele.name).innerHTML = "Plzz Fill" + ele.name
    }
    else{
        document.querySelector("#" + ele.name).innerHTML = ""
    }
}




