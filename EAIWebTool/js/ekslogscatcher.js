$("#lceksrtb1").click(lcer1);
$("#lceksrtb2").click(lcer2);

function lcer1() {
    appid = "lceksrtb1"
    EKSLogsMenu();
    return appid
}

function lcer2() {
    appid = "lceksrtb2"
    EKSLogsMenu();
    return appid
}


function EKSLogsMenu() {
    $(".corpoEksLogs").show();
    $(".corpoMonitor76S").hide();
    $(".corpoMonitorEKS").hide();
    $(".corpoReport").hide();
    $(".corpoDsfile").hide();
    $(".corpoEKSFC").hide();
    $(".corpoPPV").hide();
    $(document).ready(function () {
        $('.eksbts').select2();
    });

}

function findekslog(appid) {

    btname = $("#eksselector").val();
    data = $("#data").val();
    date = $("#date").val();

    if (date) {
        $("#LoadingImage").show();
        command = (" -a " + btname + " -s " + data + " -d " + date + " -web");
        $.ajax({
            type: "GET",
            dataType: 'text',
            url: "http://tvmkb150.test.sprint.com:15050/index/" + appid + "/" + command,
            success: function (data) {
                $("#resultlc").text(data);
                $("#LoadingImage").hide();
                $("#h4lcresult").show();
            },
            error: function (error) {
                $("#error").html('Error querying remote URL');
                $("#error").show();
                $("#LoadingImage").hide();
            }
        })
    }
    else {
        $("#LoadingImagelc").show();
        command = (" -a " + btname + " -s " + data + " -web");
        $.ajax({
            type: "GET",
            dataType: 'text',
            url: "http://tvmkb150.test.sprint.com:15050/index/" + appid + "/" + command,
            success: function (data) {
                $("#resultlc").text(data);
                $("#LoadingImagelc").hide();
                $("#h4lcresult").show();
            },
            error: function (error) {
                $("#error").html('Error querying remote URL');
                $("#error").show();
                $("#LoadingImagelc").hide();
            }
        })
    }
}

function copyLogs(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}