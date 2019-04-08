
$("#submitrelease").click(function () {
    release = true
    rackname = $("#multiple option:selected").val();
    path = $("#releasein").val();
    stb = parseInt($("#multiple option:selected").attr("nb"));
    downloadbuild(rackname, path, release);
    checkbox(stb, release);

});


$("#submitnightly").click(function () {
    release = false
    rackname = $("#multiple option:selected").val();
    path = $("#nightlyin").val();
    stb = parseInt($("#multiple option:selected").attr("nb"));
    downloadbuild(rackname, path, release);
    checkbox(stb, release);

});
$("#upgraderelease").hide();
$("#upgradenightly").hide();
$("#upgraderelease").click(function () {
    rackname = $("#multiple option:selected").val();
    version = ($("#releasein").val().split("/")[1]);
    var checkboxValues = [];
    $('input:checked').map(function () {
        checkboxValues.push($(this).attr('id'));
    });
    console.log(rackname + ' ' + checkboxValues + ' -v ' + version + ' -i ')

});

$("#upgradenightly").click(function () {
    rackname = $("#multiple option:selected").val();
    version = ($("#nightlyin").val().split("/")[1]);
    var checkboxValues = [];
    $('input:checked').map(function () {
        checkboxValues.push($(this).attr('id'));
    });
    console.log(rackname + ' ' + checkboxValues + ' -v ' + version + ' -i ')

});

function downloadbuild(rackname, path, release) {

    if (release == true) {
        command = rackname + ' -r ' + path;
    }
    else {
        command = rackname + " " + path;
    }

    console.log(command)
    $("#releaseout").append('<img src="images/loading.gif" style="width:50px;height:50px" id="loading">')
    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://172.25.11.43:3000/downloadbuild/" + command,
        success: function (data) {
            if (release == true) {
                $("#releaseout").append("<b> Build downloaded to rack " + rackname + "<br></b>")
                $("#releaseout").append(data);
                $("#loading").hide()
            }
            else {
                $("#nightlyout").append("<b> Build downloaded to rack" + rackname + "<br></b>")
                $("#nightlyout").append(data);
                $("#loading").hide()

            }

        },
        error: function (error) {

            if (release == true) {
                $("#releaseout").append("<b>Error to download build to rack " + rackname + "<br></b>");
            }
            else
                $("#nightlyout").append("<b> Error to download build to rack " + rackname + "<br></b>")
        }
    });
}

function checkbox(stb, release) {

    if (release == true) {
        $("#release").append("<br>Select the STBs to be upgrade:<br>")
        for (i = 1; i < stb + 1; i++) {
            $("#release").append('<input type="checkbox" id=' + i + '>' + i)

        }
        $("#upgraderelease").show()

    }
    else {
        $("#nightly").append("<br>Select the STBs to be upgrade:<br>")
        for (i = 1; i < stb + 1; i++) {
            $("#nightly").append('<input type="checkbox" id=' + i + '>' + i)

        }
        $("#upgradenightly").show()
    }

}
