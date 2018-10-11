$("#ppvButton").click(ppvMenu);

function ppvMenu() {
    $(".corpoPPV").show();
    $(".corpoReport").hide();
    $(".corpoMonitor76S").hide();
    $(".corpoMonitorEKS").hide();
    $(".corpoDsfile").hide();
    $(".corpoEKSFC").hide();
    
    // call remote host
    $("#LoadingImageEKSFC").show();
    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://tvmkb150.test.sprint.com:15050/index/PPV/",
        success: function (data) {
            $("#resultppv").html(data)
        },
        error: function (error) {
            $("#error").html('Error trying to get the EKSFullCheck Report');
            $("#error").show();
            $("#LoadingImage").hide();
        }
    })
    $("#LoadingImageEKSFC").hide();
}

