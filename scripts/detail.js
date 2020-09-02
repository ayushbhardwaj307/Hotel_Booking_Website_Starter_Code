function detail(){
    let number = document.getElementById('adult').value;
    let fromDate = document.getElementById('fromDate').value;
    let toDate = document.getElementById('toDate').value;

    document.getElementById('toDate').min = fromdate;
    
    var perDay = 1000;
    var hoursInOneDay = 24;
    var secondsInOneHour = 3600;
    var milliSecondsInOneSecond = 1000;

    var fromdate = new Date(fromDate);
    var todate = new Date(toDate);

    var timeDifference = todate.getTime() - fromdate.getTime();
    var days = timeDifference / (milliSecondsInOneSecond * secondsInOneHour * hoursInOneDay);
    var price = number*days*perDay;

    document.getElementById('price').value = price;
}