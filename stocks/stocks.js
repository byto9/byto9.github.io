function stockData() {
  let ticker = document.getElementById("ticker").value;
  let time = document.getElementById("time").value;
  let url = `https://api.twelvedata.com/time_series?symbol=${ticker}&interval=${time}&apikey=7227d36e03f248d28a281745ced26940`;
  console.log(url);

  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      $("#symbol").html(response.meta.symbol);
      $("#currency").html(response.meta.currency);
      $("#exchange").html(response.meta.exchange);

      $("#data0").html(response.values[0].datetime);
      $("#open0").html("$" + response.values[0].open);
      $("#high0").html("$" + response.values[0].high);
      $("#low0").html("$" + response.values[0].low);
      $("#close0").html("$" + response.values[0].close);

      $("#data1").html(response.values[1].datetime);
      $("#open1").html("$" + response.values[1].open);
      $("#high1").html("$" + response.values[1].high);
      $("#low1").html("$" + response.values[1].low);
      $("#close1").html("$" + response.values[1].close);

      $("#data2").html(response.values[2].datetime);
      $("#open2").html("$" + response.values[2].open);
      $("#high2").html("$" + response.values[2].high);
      $("#low2").html("$" + response.values[2].low);
      $("#close2").html("$" + response.values[2].close);

      $("#data3").html(response.values[3].datetime);
      $("#open3").html("$" + response.values[3].open);
      $("#high3").html("$" + response.values[3].high);
      $("#low3").html("$" + response.values[3].low);
      $("#close3").html("$" + response.values[3].close);

      $("#data4").html(response.values[4].datetime);
      $("#open4").html("$" + response.values[4].open);
      $("#high4").html("$" + response.values[4].high);
      $("#low4").html("$" + response.values[4].low);
      $("#close4").html("$" + response.values[4].close);
    },
  });
}

/*
anychart.onDocumentReady(function () {
  anychart.data.loadCsvFile(
    "https://api.twelvedata.com/stocks?format=csv&apikey=7227d36e03f248d28a281745ced26940",
    function (data) {
      var dataTable = anychart.data.table();
      dataTable.addData(data);

      var mapping = dataTable.mapAs({
        open: 1,
        high: 2,
        low: 3,
        close: 4,
      });

      var chart = anychart.stock();
      var plot = chart.plot(0);
      plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

      var series = plot.candlestick(mapping).name("Tesla");

      series.legendItem().iconType("rising-falling");

      chart.scroller().candlestick(mapping);

      chart.selectRange("2020-11-27", "2021-11-26");

      var rangePicker = anychart.ui.rangePicker();
      rangePicker.render(chart);

      var rangeSelector = anychart.ui.rangeSelector();
      rangeSelector.render(chart);

      chart.title("Tesla Inc. Stock Chart");

      chart.container("container");

      chart.draw();
    }
  );
});
*/
