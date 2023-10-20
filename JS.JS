function priceChange() {
    var checkBox = document.getElementById("PriceChange");
    var Basic = document.getElementById("Basic");
    var Professional = document.getElementById("Professional");
    var Master = document.getElementById("Master");

    if (checkBox.checked == true)
    {
        Basic.innerHTML  = "$199";
        Professional.innerHTML  = "$249";
        Master.innerHTML  = "$399";
    }
    else
    {
        Basic.innerHTML  = "$19.90";
        Professional.innerHTML  = "$24.90";
        Master.innerHTML  = "$39.90";
    }
}

