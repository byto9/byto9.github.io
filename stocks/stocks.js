anychart.onDocumentReady(function () {
	anychart.data.loadCsvFile(
		'https://gist.githubusercontent.com/shacheeswadia/cd509e0b0c03964ca86ae7d894137043/raw/5f336c644ad61728dbac93026f3268b86b8d0680/teslaDailyData.csv',
		function (data) {

			var dataTable = anychart.data.table();
			dataTable.addData(data);

			var mapping = dataTable.mapAs({
				open: 1,
				high: 2,
				low: 3,
				close: 4
			});

			var chart = anychart.stock();
			var plot = chart.plot(0);
			plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

			var series = plot.candlestick(mapping)
						.name ('Tesla');

			series.legendItem().iconType('rising-falling');

			chart.scroller().candlestick(mapping);

			chart.selectRange('2020-11-27', '2021-11-26');

			var rangePicker = anychart.ui.rangePicker();
			rangePicker.render(chart);

			var rangeSelector = anychart.ui.rangeSelector();
			rangeSelector.render(chart);

			chart.title('Tesla Inc. Stock Chart');

			chart.container('container');

			chart.draw();
		});
});

