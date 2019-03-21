var queries = new Array()
var queries_idx = 0

// function to copy to "clipboard" anything selected in the result area
$(document).ready(function () {
    $('#result').mouseup(function (e) {
        text = window.getSelection().toString()
        $('#clipboard').val(text)
    })
})

function runThis() {
    $("#error").hide() // hide the error from any previous execution

    // get application
    var queryData = $("#query").val().trim().split(" ")
    var appid = queryData.shift()
    var command = queryData.join(" ")

    // validate application
    if (!appid.match(/(eks|76s|wsdl|turnOff|turnOn|76slogs|ekslogs|76srtb1|76srtb2)/)) {
        $("#error").html('Invalid application ' + appid)
        $("#error").show()
        return 1
    }

    // add command to history
    queries.push($("#query").val())
    queries = jQuery.unique(queries)
    queries_idx = queries.length - 1

    // call remote host
    $("#LoadingImage").show();
    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://tvmkb150.test.sprint.com:15050/report/" + appid + "/" + command,
        success: function (data) {
            $("#history").html($("#result").html() + $("#history").html())
            $("#result").html("command> " + $("#query").val() + "\n" + data)
            $("#query").val('')
            $("#LoadingImage").hide();
        },
        error: function (error) {
            $("#error").html('Error querying remote URL')
            $("#error").show()
            $("#LoadingImage").hide();
        }
    })
}

function upHist() {
    var query = document.getElementById('query')
    $("#query").val(queries[queries_idx])
    queries_idx -= 1
    if (queries_idx < 0) {
        queries_idx = 0
    }
}
function downHist() {
    if (queries_idx == 0) {
        queries_idx++
    }
    $("#query").val(queries[queries_idx]);
    queries_idx += 1
    if (queries_idx = queries.length) {
        queries_idx = queries.length - 1
    }
}
function copyFromClipBoard() {
    $("#query").val($("#query").val() + $("#clipboard").val());
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

addEvent(document.getElementById('query'), 'keydown', function (e) {
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


$("#reportButton").click(reportMenu);

function reportMenu() {
    $(".corpoReport").toggle();
    $(".corpoMonitor76S").hide();
    $(".corpoMonitorEKS").hide();
    $(".corpoDsfile").hide();
    $(".corpoEKSFC").hide();
    $(".corpoPPV").hide();
    $(".corpoEksLogs").hide();
}