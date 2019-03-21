appid = "";

$('#dsmenu').children().first().click(function dsFile() {
        $(".corpoDsfile").show();
        $(".corpoReport").hide();
        $(".corpoMonitor76S").hide();
        $(".corpoMonitorEKS").hide();
        $(".corpoEKSFC").hide();
        $(".corpoPPV").hide();
        $(".corpoEksLogs").hide();
        return appid = "dsfile1";
});


$('#dsmenu').children().last().click(function dsFile() {
        $(".corpoDsfile").show();
        $(".corpoReport").hide();
        $(".corpoMonitor76S").hide();
        $(".corpoMonitorEKS").hide();
        $(".corpoEKSFC").hide();
        $(".corpoPPV").hide();
        $(".corpoEksLogs").hide();
        return appid = "dsfile2";

});


    function runOrder(appid) {
        $("#error").hide() // hide the error from any previous execution
        var queryData = $("#orderkey").val().trim().split(" ");
        var command = queryData.join(" ");

        // call remote host
        $("#LoadingImage").show();
        $.ajax({
            type: "GET",
            dataType: 'text',
            url: "http://tvmkb150.test.sprint.com:15050/index/" + appid + "/" + command,
            success: function (data) {
                $("#history").html($("#resultds").html() + $("#history").html())
                $("#resultds").html("\n" + data)
                $("#orderkey").val('')
                $("#LoadingImage").hide()
                $("#h4cont").show();
            },
            error: function (error) {
                $("#error").html('Error querying remote URL');
                $("#error").show();
                $("#LoadingImage").hide();
            }
        })
    }


function copyFromClipBoard() {
    $("#orderkey").val($("#orderkey").val() + $("#clipboard").val());
    // clean the clipboard
    $("#clipboard").val('')
}

var addEvent = document.addEventListener ? function (target, type, action) {
    if (target) {
        target.addEventListener(type, action, false);
    }
} : function (target, type, action) {
    if (target) {
        target.attachEvent('on' + type, action, false);
    }
}

addEvent(document.getElementById('orderkey'), 'keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 38) {
        upHist()
    }
    if (key === 40) {
        downHist()
    }
    if (key === 13) {
        runThis()
    }
    if (key === 17) {
        copyFromClipBoard()
    }
})
