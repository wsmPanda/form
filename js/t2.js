(function(){
$(document).ready(function () {

    $('#demo').daterangepicker({
        "timePicker": true,
        "startDate": "04/14/2016",
        "endDate": "04/20/2016"
    }, function(start, end, label) {
        console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });
});
})()