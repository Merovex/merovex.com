---
layout: null
---
function zoomChart() {chart.zoomToIndexes(chartData.length - 40, chartData.length -1) }
function category_axis(c) {
    var b = c.categoryAxis;
    b.labelRotation = 45;
    b.gridPosition = "start";
    b.parseDates = true;
    b.minPeriod = 'DD'
    // b.maximum = 4000;
    b.minorTickInterval = 250;
}

AmCharts.ready(function () {

    var sales_color = "#6495ed"; // Lite Blue
    sales_color = "#BFD3F7"; // Lite Blue
    var ave_color   = "#0C751B"; // Green
    var delta_color = "#000099"; // Dark Blue
    var goal_color  = "#D28E18"; // Yellow
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.theme = 'chalk';
    chart.categoryField = "date";
    chart.startDuration = 1;
    chart.addTitle("Daily Sales:  " + start + " - " + today)
    chart.pathToImages = "/amcharts/images/";
    chart.dataDateFormat = "YYYY-MM-DD";
    chart.backgroundColor = "#FFFFFF";
    chart.addListener("dataUpdated",zoomChart)

    var legend = new AmCharts.AmLegend();
    legend.switchable = true;
    legend.data = [
        {title: period + "-Day Average", color: ave_color},
        {title:"Daily Count", color: sales_color}
    ]
    chart.addLegend(legend);
    category_axis(chart);

    // value
    var ave = new AmCharts.AmGraph();
    ave.type = 'line'
    ave.valueField = 'average'
    ave.lineThickness = 2;
    ave.lineColor = ave_color;
    ave.title = 'Average'
    ave.balloonText = "<span>" + period + "-Day Ave.:<b>[[value]]</b> sales</span>";
    ave.columnWidth = 1;
    ave.fillAlphas = 0.2;

    var sales = new AmCharts.AmGraph();
    sales.type = 'column'
    sales.fillAlphas = 0.7
    sales.valueField = 'units'
    sales.lineThickness = 2;
    sales.lineColor = sales_color

    sales.bullet = 'none'
    sales.bulletSize = 8
    sales.bulletBorderColor = '#FFFFFF'
    sales.bulletBorderThickness = 2
    sales.bulletBorderAlpha = 1
    sales.balloonText = "Sales on [[category]]: <b>[[value]]</b>";

    chart.addGraph(sales);
    chart.addGraph(ave);
    // Set Y Axis
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.inside = true;
    valueAxis.tickLength = 0;
    valueAxis.axisAlpha = 0;
    valueAxis.maximum = max;
    chart.addValueAxis(valueAxis);

    var chartScrollbar = new AmCharts.ChartScrollbar();
    chartScrollbar.graph = sales;
    chartScrollbar.scrollbarHeight = 60;
    chartScrollbar.color = '#666666'
    chartScrollbar.autoGridCount = true;
    chart.addChartScrollbar(chartScrollbar);

    chart.creditsPosition = "top-right";

    // CURSOR
    var cChartCursor = new AmCharts.ChartCursor();
    cChartCursor.cursorPosition = "mouse";
    chart.addChartCursor(cChartCursor);

    chart.write("chart-daily");

    // Total Progress
    var progressChart = new AmCharts.AmSerialChart();
    progressChart.dataProvider = chartData;
    progressChart.categoryField = "date";
    progressChart.startDuration = 1;
    progressChart.addTitle("Cumulative Progress:  "+start+" - " + today)
    progressChart.pathToImages = "/amcharts/images/";
    progressChart.dataDateFormat = "YYYY-MM-DD";
    progressChart.backgroundColor = "#FFFFFF";
    progressChart.addListener("dataUpdated",zoomChart)

    var pLegend = new AmCharts.AmLegend();
    pLegend.switchable = true;
    pLegend.data = [
        {title:"Progress", color: ave_color}
    ]
    progressChart.addLegend(pLegend);

    // CURSOR
    var pChartCursor = new AmCharts.ChartCursor();
    pChartCursor.cursorPosition = "mouse";
    progressChart.addChartCursor(pChartCursor);

    var cumulative = new AmCharts.AmGraph();
    cumulative.type = 'line'
    cumulative.valueField = 'total'
    cumulative.lineThickness = 2;
    cumulative.lineColor = ave_color;
    cumulative.title = 'Average'
    cumulative.balloonText = "<span>Sales on [[category]]: <b>[[value]]</b></span>";
    cumulative.columnWidth = 1;
    progressChart.addGraph(cumulative);
    progressChart.write("chart-cumulative");
});