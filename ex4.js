function addDiv() {
    var output = '';
    // processing
    var count = 0;
    while(count <= 4)
    {
        var divOdd = '<div style="background-color:blue" class="mt-2 w-25">Odd devision</div>';
        var divEven = '<div style="background-color:red" class="mt-2 w-25">Even division</div>';
        output += divOdd + divEven;
        count ++;
    }
    document.getElementById('divResult4').innerHTML = output;
}