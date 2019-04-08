$("#multiple").click(function () {
    rackname = $(this).val();
    servers = parseInt($("#multiple option:selected").attr("nb"));
    clients = servers * parseInt($("#multiple option:selected").attr("clients"));
    checkbox(servers, clients);
    mapviwer(servers, clients);

});


function checkbox(server, clients) {

    for (i = 1; i < server + 1; i++) {
        $("#servers").append('<input type="checkbox" onclick="addtdclass(id)" id=' + i + '>' + i)

    }
    for (i = servers + 1; i < clients + servers + 1; i++) {
        $("#clients").append('<input type="checkbox" onclick="addtdclass(id)" id=' + i + '>' + i)

    }
}

function addtdclass(id){
    $("#stb"+id).attr('class', 'success');
}

function mapviwer(servers, clients) {
    count = 1
    for (i = 1; i < servers + 1; i++) {
        $("#screens").append('<tr id="server' + i + '"><td id="stb' + i + '"> STB' + i + ' </td></tr>')
    }

    for (j = servers + 1; j < clients + servers + 1; j++) {
        if (servers == 8) {
            if (count < 8) {
                $("#server1").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 7 && count < 15) {
                $("#server2").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 14 && count < 22) {
                $("#server3").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 21 && count < 29) {
                $("#server4").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 28 && count < 36) {
                $("#server5").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 35 && count < 43) {
                $("#server6").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 42 && count < 50) {
                $("#server7").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 49) {
                $("#server8").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
        }
        else {
            if (count < 4) {
                $("#server1").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 3 & count < 7) {
                $("#server2").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 6 & count < 10) {
                $("#server3").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 9 & count < 13) {
                $("#server4").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 12 & count < 16) {
                $("#server5").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 15 & count < 19) {
                $("#server6").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 18 & count < 22) {
                $("#server7").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 21 & count < 25) {
                $("#server8").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 24 & count < 28) {
                $("#server9").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 27 & count < 31) {
                $("#server10").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 30 & count < 34) {
                $("#server11").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 33 & count < 37) {
                $("#server12").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 36 & count < 40) {
                $("#server13").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 39 & count < 43) {
                $("#server14").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 42 & count < 46) {
                $("#server15").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
            else if (count > 45) {
                $("#server16").append('<td id="stb' + j + '">STB' + j + '</td>')
                count = count + 1
            }
        }
    }
}

