---
---
String.prototype.upcase = function() {return this.charAt(0).toUpperCase() + this.slice(1); }
var charts = [];
function csn(val){ // commaSeparateNumber
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}
function buildGraph(field) {
    var blue    = '#6494EB';
    var d_blue  = '#1A5ACE';
    var green   = '#42720E';
    var yellow  = '#B3CD1A';
    var red     = '#EB7763';
    var purple  = '#BA62EB';

    var graph = {
        'average':  {'color': red, 'text': 'Ave. on [[category]]: <b>[[value]]</b>', 'type': 'line', "legend": '7-Day Avg.'},
        'goal':     {'color': d_blue, 'text': 'Goal on [[category]]: <b>[[value]]</b>', 'type': 'trend', "legend": field},
        'd_goal':   {'color': green, 'text': 'EOY Goal on [[category]]: <b>[[value]]</b>', 'type': 'trend', "legend": 'EOY Goal'},
        'total':    {'color': purple, 'text': 'Actual on [[category]]: <b>[[value]]</b> (Delta: [[delta]])', 'type': 'trend', "legend": 'Actual'},
        'words':    {'color': d_blue, 'text': 'Words on [[category]]: <b>[[value]]</b>', 'type': 'column', "legend": field},
        'wph':      {'color': d_blue, 'text': 'Words per Hour on [[category]]: <b>[[value]]</b>', 'type': 'column', "legend": 'WPH'},
        'wph_ave':  {'color': green, 'text': 'Average WPH on [[category]]: <b>[[value]]</b>', 'type': 'line', "legend": '7-Day Avg. WPH'},
    }
    var alphas      = {'column': [0.6,0.4], 'line': [0.4,0.4], 'trend':  [0.8,0.0], }
    var graph_type  = {'column': 'column', 'line': 'line', 'trend': 'line', }[graph[field]['type']]
    return [{ 
            'balloonText': graph[field]['text'],
            'fillAlphas': alphas[graph[field]['type']][1],
            'id': field,
            'lineAlpha': alphas[graph[field]['type']][0],
            'lineColor': graph[field]['color'],
            'lineThickness': 2,
            'type': graph_type,
            'valueField': field,
        },
        {'title': graph[field]['legend'].upcase(), 'color': graph[field]['color']}
    ]
}
// function zoomChart() {
//     for (var i = 0; i < charts.length; i++) {
//         if(charts[i].zoomToIndexes){
//           charts[i].zoomToIndexes(40, chartData.length - 1);
//         }
//     }
// }

function wphSpeed(wph, hours, chartData) {
    if ( !$('#speedometer')[0] ) { return; }
    last = chartData[chartData.length-1];
    $('#words-written').text(csn(last["total"]));
    $('#hours-written').text(csn(hours));

    ct = "behind"
    d = Math.abs(last["delta"])
    if (last["delta"] > 0) {ct = "ahead"}
    $('#cwords').text(csn(d))
    $('#ct').text(ct)

    var warnColor = '#F33';
    var goodColor = '#0C0'
    var min = 0;
    var max = 1500;
    var redline = max * 0.34;
    var greenline = max * .67;
    var chart = AmCharts.makeChart('speedometer',{
        'type': 'gauge',
        'theme': 'none',
        'arrows': [{'value': wph }],
        'titles': [{'text': 'Average Words Per Hour', 'size': 15 } ],
        'axes': [{
            'bottomText': wph + ' wph',
            'endValue': max,
            'valueInterval': 100,
            'bands': [
                {'color': warnColor, 'endValue': redline, 'startValue': 0 },
                {'color': goodColor, 'endValue': greenline, 'startValue': redline, 'innerRadius': '95%'},
                {'color': warnColor, 'endValue': max, 'startValue': greenline }
            ]
        }]
    });
}
function makeChart(id, scrollbar, keys) {
    if ( !$('#'+id)[0] ) { return; }
    var graphs = Array();
    var legend = Array();
    for (var i = 0; i < keys.length; i++) {
        meta = buildGraph(keys[i])
        graphs[i] = meta[0];
        legend[i] = meta[1];
    }
    var title = $('#'+id+'-title').text();
    var scrollbar = { 'graph': scrollbar, 'scrollbarHeight': 40 };
    var chart = AmCharts.makeChart(id, {
        'categoryField': 'date',
        'categoryAxis': {
            'parseDates': true,
            'dashLength': 1,
            'minorGridEnabled': true,
            'minorTickInterval': 250,
            'dateFormat': 'DD',
            'labelRotation': 45,
            'minPeriod': 'DD'
        },
        'titles': [{'text': title, 'size': 15 } ],
        'chartCursor': { 'cursorPosition': 'mouse', 'pan': true, 'valueLineEnabled':true, 'valueLineBalloonEnabled':true },
        'chartScrollbar': false,
        'dataDateFormat': 'YYYY-MM-DD',
        'dataProvider': chartData,
        'exportConfig':{ 'menuTop': 0, 'menuItems': [{ 'icon': '/amcharts/images/export.png', 'format': 'png'}] },
        'graphs': graphs,
        'gridAboveGraphs': true,
        "legend": {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "useGraphSettings": false,
            "markerSize": 10,
            "data": legend,
        },
        'pathToImages': '/amcharts/images/',
        'startDuration': 1,
        'theme': 'none',
        'type': 'serial',
        'valueAxes': [{ 'gridColor':'#FFFFFF', 'gridAlpha': 0.2, 'dashLength': 0 }],      
    }); 
    // charts.push(chart);
    // chart.addListener("dataUpdated-"+id, zoomChart);
}