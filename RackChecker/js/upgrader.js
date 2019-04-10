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
    stbimage = []
    stbimage.push($("#releaseout").text().toString().split("\n"));

    var checkboxValues = [];
    $('input:checked').map(function () {
        checkboxValues.push($(this).attr('id'));
    });
    command = rackname + ' ' + checkboxValues + ' -v ' + version + ' -i /data/home/moo/introproSRC/builds/' + stbimage[0][5];
    upgradestb(rackname, command);

});

$("#upgradenightly").click(function () {
    rackname = $("#multiple option:selected").val();
    version = ($("#nightlyin").val().split("/")[3]);
    stbimage = []
    stbimage.push($("#nightlyout").text().toString().split("\n"));

    var checkboxValues = [];
    $('input:checked').map(function () {
        checkboxValues.push($(this).attr('id'));
    });
    command = rackname + ' ' + checkboxValues + ' -v ' + version + ' -i /data/home/moo/introproSRC/builds/' + stbimage[0][5];
    upgradestb(rackname, command);
});

// function to add the checkboxes on page
function checkbox(stb, release) {

    $("#releaseout").text(" ");
    $("#nightlyout").text(" ");
    $("#checkboxrelease").remove();
    $("#checkboxnightly").remove();
    if (release == true) {
        $("#release").append('<td id="checkboxrelease"><br>Select the STBs to be upgrade:<br>')
        $("#releaseout").append('<img src="images/loading.gif" style="width:50px;height:50px" id="loading">')
        for (i = 1; i < stb + 1; i++) {
            $("#checkboxrelease").append('<input type="checkbox" id=' + i + '>' + i)

        }
        $("#upgraderelease").show()

    }
    else {
        $("#nightly").append('<td id="checkboxnightly"><br>Select the STBs to be upgrade:<br>')
        $("#nightlyout").append('<img src="images/loading.gif" style="width:50px;height:50px" id="loading">')
        for (i = 1; i < stb + 1; i++) {
            $("#checkboxnightly").append('<input type="checkbox" id=' + i + '>' + i)

        }
        $("#upgradenightly").show()
    }

}

// Function to download the builds to the racks
function downloadbuild(rackname, path, release) {

    if (release == true) {
        command = rackname + ' -r ' + path;
    }
    else {
        command = rackname + " " + path;
    }

    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://172.25.11.43:3000/downloadbuild/" + command,
        success: function (data) {
            if (release == true) {
                $("#releaseout").append("<b>Build downloaded to rack " + rackname + "<br></b>")
                $("#releaseout").append(data);
                $("#loading").hide()
            }
            else {
                $("#nightlyout").append("<b>Build downloaded to rack" + rackname + "<br></b>")
                $("#nightlyout").append(data);
                $("#loading").hide()

            }

        },
        error: function (error) {

            if (release == true) {
                $("#releaseout").append("<b>Error to download build to rack " + rackname + "<br></b>");
            }
            else
                $("#nightlyout").append("<b>Error to download build to rack " + rackname + "<br></b>")
        }
    });
}

// Function to call upgrage.sh on racks
function upgradestb(rackname, command) {

    $.ajax({
        type: "GET",
        dataType: 'text',
        url: "http://172.25.11.43:3000/upgradestb/" + command,
        success: function (data) {
            if (release == true) {
                $("#releaseout").append(data);
                $("#releaseout").append("<b>Rack " + rackname + " upgraded <br>Don't forget to change the name of the tests and perform z_reboot manually</b><br>")
                $("#loading").hide()
            }
            else {
                $("#nightlyout").append(data);
                $("#nightlyout").append("<b>Rack " + rackname + " upgraded <br>Don't forget to change the name of the tests and perform z_reboot manually</b><br>")
                $("#loading").hide()

            }

        },
        error: function (error) {

            if (release == true) {
                $("#releaseout").append("<b>Error to upgrade new build on rack " + rackname + "<br></b>");
            }
            else
                $("#nightlyout").append("<b>Error to upgrade new build on rack " + rackname + "<br></b>")
        }
    });
}
