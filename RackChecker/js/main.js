$("#multiple").click(function () {
  changeids();
  rackname = $(this).val();
  stb = parseInt($("#multiple option:selected").attr("nb"));
  createandcall(rackname[0], stb);

});

function createandcall(rackname, stb) {

  $('#maintable').append('<table class="table"><tbody><tr style="text-align:center"><td><h2>' + rackname + '</h2><table class="table"><tbody style="text-align:left"><tr id="STBL"></tr><tr id="STBL1"></tr><tr id="STBL2"></tr><tr id="STBL3"></tr></tbody></table></td></tr></tbody></table>');
  for (i = 1; i < stb + 1; i++) {
    createtable(i);
    callstb(rackname, i);
  }
  return;
}

function getter(rackname, i) {
  response = '\#stb' + i;

  $.ajax({
    type: "GET",
    dataType: 'text',
    url: "http://172.25.11.43:3000/getter/" + rackname + ' ' + i,
    success: function (data) {
      response = '\#stb' + i;
      $(response).append(data);
    },
    error: function (error) {

      $(response).append('Error to stop the Tests');
    }
  });
}

function createtable(i) {

  if (i < 5) {
    idpre = 'stb' + i;
    idtd = 'tdstb' + i;
    $('#STBL').append('<td class="" id=' + idtd + '><h4>' + 'STB' + i + '</h4><pre id=' + idpre + '></pre></td>');
  }
  if (i > 4 && i < 9) {
    idpre = 'stb' + i;
    idtd = 'tdstb' + i;
    $('#STBL1').append('<td class="" id=' + idtd + '><h4>' + 'STB' + i + '</h4><pre id=' + idpre + '></pre></td>');
  }
  if (i > 8 && i < 13) {
    idpre = 'stb' + i;
    idtd = 'tdstb' + i;
    $('#STBL2').append('<td class="" id=' + idtd + '><h4>' + 'STB' + i + '</h4><pre id=' + idpre + '></pre></td>');
  }
  if (i > 12 && i < 17) {
    idpre = 'stb' + i;
    idtd = 'tdstb' + i;
    $('#STBL3').append('<td class="" id=' + idtd + '><h4>' + 'STB' + i + '</h4><pre id=' + idpre + '></pre></td>');
  }
}

function changeids() {
  $('#STBL').attr('id', 'STBL_RETURNED');
  $('#STBL1').attr('id', 'STBL2_RETURNED');
  $('#STBL2').attr('id', 'STBL3_RETURNED');
  $('#STBL3').attr('id', 'STBL4_RETURNED');
  for (i = 1; i < 17; i++) {
    preid = 'stb' + i;
    idtd = 'tdstb' + i;
    $('#' + preid).attr('id', preid + '_modified');
    $('#' + idtd).attr('id', idtd + '_modified');
  }
}

function callstb(rackname, i) {
  $.ajax({
    type: "GET",
    dataType: 'text',
    url: "http://172.25.11.43:3000/index/" + rackname + ' ' + i,
    success: function (data) {
      response = '\#stb' + i;
      idtd = '\#tdstb' + i;


      $(response).text(data.replace(/\[32m/gi, '').replace(/\[0\;33m/gi, '').replace(/\[0m/gi, '').replace(/\[33m/gi, '').replace(/\[37m/gi, '').replace(/\[31m/gi, ''));
      pre = $(response).text().toString();
      if (pre.indexOf('OK') != -1) {
        $(idtd).attr('class', 'success');
      }
      else if (pre.indexOf('Warning') != -1) {
        $(idtd).attr('class', 'warning');
      }
      else if (pre.indexOf('Fail') != -1 || pre.indexOf('ERROR') != -1) {
        $(idtd).attr('class', 'danger');
        $(idtd).append(`<button type="button" id="rungetter" value=` + i + ` onClick="getter(rackname=\'` + rackname + `\',` + i + `)">Stop Tests</button>`)
      }
    },
    error: function (error) {
      $("#error").html('Error trying to get the STBs report');
      $("#error").show();
    }
  })
}
