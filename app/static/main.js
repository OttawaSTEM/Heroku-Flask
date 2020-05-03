window.onload = function () {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(draw_chart);

    function load_data() {  // HTTP synchronous reques  t
        var request = new XMLHttpRequest();
        request.open('GET', 'static/covid-19.json', false);  // `false` makes the request synchronous
        request.send(null);
        
        if (request.status === 200) {
            return JSON.parse(request.responseText);
        }
    }
    
    function draw_chart() {
        var data = load_data();
        var start_date = new Date(2020, 2, 11);
        var end_date = new Date(2020, data['observe'][data['observe'].length-8][0]-1, data['observe'][data['observe'].length-8][1]);
        var current_date = new Date(end_date);

        if (data) {
            var data_table = new google.visualization.DataTable();
            data_table.addColumn('date', 'date');
            data_table.addColumn('number', 'Number of Positive');
            data_table.addColumn('number', 'Predict Line');
            
            function update_data(current_date) {
                data_table.removeRows(0, data_table.getNumberOfRows());

                var delta_days = (end_date - current_date)/3600/24/1000;
                var last_row_num = data['observe'].length - delta_days;
                for (let i = 0; i < last_row_num; i++) {
                    data_table.addRows([
                        [new Date(2020, data['observe'][i][0]-1, data['observe'][i][1]), 
                         data['observe'][i][2], 
                         data[(current_date.getMonth()+1).toString() + '-' + current_date.getDate().toString()][i]]
                    ])
                }
                for (let i = 1; i <= 7; i++) {
                    data_table.setValue(last_row_num-i, 1, null)
                }
            }

            document.getElementById('current_date').innerText = current_date.getFullYear().toString() + '-' + (current_date.getMonth()+1).toString() + '-' + current_date.getDate().toString();
            update_data(current_date);

            var options = {
                title: 'COVID-19 in Canada (7 Day Forecast)',
                // width: 900,
                height: 500,
                animation:{
                    duration: 1000,
                    easing: 'out'
                },
                series: {
                    0: {type: 'scatter'},
                    1: {type: 'line'}
                },
                hAxis: {
                    title: 'Date',
                    format: 'Y-M-d',
                    slantedText: true,
                    slantedTextAngle: 45
                },
                vAxis: {
                    title: 'Total Number of Positive', 
                    viewWindow: {
                        min: 0
                    }
                },
                legend: {
                    position: 'in',
                }
            };

            var chart = new google.visualization.ComboChart(document.getElementById('chart_covid_19'));
            var button_back = document.getElementById('button_back');
            var button_next = document.getElementById('button_next');

            function update_chart() {
                // Disabling the button while the chart is drawing.
                button_back.disabled = true;
                button_next.disabled = true;
                google.visualization.events.addListener(chart, 'ready',
                    function() {
                        button_back.disabled = false;
                        button_next.disabled = false;
                    });
                chart.draw(data_table, options);
            }
            
            button_back.onclick = function() {
                if (current_date > start_date) {
                    current_date.setDate(current_date.getDate() - 1);
                    document.getElementById('current_date').innerText = current_date.getFullYear().toString() + '-' + (current_date.getMonth()+1).toString() + '-' + current_date.getDate().toString();
                    update_data(current_date);
                    update_chart();
                }
            }
            
            button_next.onclick = function() {
                if (current_date < end_date) {
                    current_date.setDate(current_date.getDate() + 1);
                    document.getElementById('current_date').innerText = current_date.getFullYear().toString() + '-' + (current_date.getMonth()+1).toString() + '-' + current_date.getDate().toString();
                    update_data(current_date);
                    update_chart();
                }
            }

            function resize () {
                update_chart();
            }
            window.onload = resize;
            window.onresize = resize;

            update_chart();
        }

    }
}