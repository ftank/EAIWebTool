$("#EKSFC1").click(eksfc1);
$("#EKSFC2").click(eksfc2);
$("#EKSFCORT").click(eksfcort);

function eksfc1() {
    env = "eksfc1/";
    eksfc(env);
}

function eksfc2() {
    env = "eksfc2/";
    eksfc(env);
}

function eksfcort() {
    env = "eksfcort/";
    eksfc(env);
}

function eksfc(env) {
    $(".corpoEKSFC").show();
    $(".corpoMonitor76S").hide();
    $(".corpoMonitorEKS").hide();
    $(".corpoReport").hide();
    $(".corpoDsfile").hide();
    $(".corpoPPV").hide();
    $(".corpoEksLogs").hide();
    $("#error").hide(); // hide the error from any previous execution

    // call remote host
    $("#LoadingImageEKSFC").show();
    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://tvmkb150.test.sprint.com:15050/index/" + env,
        success: function (data) {
            $("#EKSFCRESULT").html(data)
        },
        error: function (error) {
            $("#error").html('Error trying to get the EKSFullCheck Report');
            $("#error").show();
            $("#LoadingImage").hide();
        }
    })
    $("#LoadingImageEKSFC").hide();
}
