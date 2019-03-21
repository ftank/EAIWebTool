$("#76S").click(_76SMenu);

function _76SMenu() {
    $(".corpoMonitor76S").show();
    $(".corpoMonitorEKS").hide();
    $(".corpoReport").hide();
    $(".corpoDsfile").hide();
    $(".corpoEKSFC").hide();
    $(".corpoPPV").hide();
    $(".corpoEksLogs").hide();
}

$("#EKS").click(EKSMenu);
function EKSMenu() {
    $(".corpoMonitor76S").hide();
    $(".corpoMonitorEKS").show();
    $(".corpoReport").hide();
    $(".corpoDsfile").hide();
    $(".corpoEKSFC").hide();
    $(".corpoPPV").hide();
    $(".corpoEksLogs").hide();
    app1 = "checkEnvRTB1/";
    app2 = "checkEnvRTB2/";
   checkEnv(app1)
   checkEnv(app2)
}
// function o call checkEnvRTB1
function checkEnv(app) {
    $("#error").hide() // hide the error from any previous execution
    // call remote host
    $("#LoadingImageRTB1").show();
    $("#LoadingImageRTB2").show();
    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://tvmkb150.test.sprint.com:15050/index/"+app,
        success: function (data) {
            if (app == "checkEnvRTB1/") {
                $("#EKSRTB1").html(data);
                $("#LoadingImageRTB1").hide();
            }
            if (app == "checkEnvRTB2/") {
                $("#EKSRTB2").html(data);
                $("#LoadingImageRTB2").hide();
            }
        },
        error: function (error) {
            $("#error").html('Error trying to get the checkEnv API');
            $("#error").show();
        }
    })
}