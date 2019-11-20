let endpointWeather = 'get_weather';
let endpointCities = 'api/cities';

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: '/get_weather',
        dataType: 'json',
        success: function (json) {
                $('#weatherTable').DataTable({
                    data: json,
                    columns: [
                        { data: null }, // Use index // City name from api/cities
                        { data: 'date' }, // Filtrare con RegEx
                        { data: 'summary' }, 
                        { data: 'temperatureC' },
                        { data: 'temperatureF' }
                    ],
                    rowCallback: function( row, data, dataIndex ) {
                        $('td:eq(0)', row).html( dataIndex + 1 );
                        $('td:eq(1)', row).html( dateParser(data.date) );
                    }
                });
        },
        error: function (obj) {
            alert(obj.msg);
        }
    });
    // Event Listener
    $('#refreshButton').on('click', () => {
        $('#weatherTable_wrapper').remove();
        let tableElement = `
        <table id="weatherTable" class="table">
        <thead id="tableHead">
            <tr>
                <th scope="col">Forecast Number</th>
                <th scope="col">Date</th>
                <th scope="col">Summary</th>
                <th scope="col">Temperature C</th>
                <th scope="col">Temperature F</th>
            </tr>
        </thead>
            <!-- <tbody id="tableBody">
                
            </tbody> -->
        </table>
        `;
        $('.weatherWrapper').append(tableElement);
        $.ajax({
            type: "GET",
            url: '/get_weather',
            dataType: 'json',
            success: function (json) {
                    $('#weatherTable').DataTable({
                        data: json,
                        columns: [
                            { data: 'date' }, // Use index // City name from api/cities
                            { data: 'date' }, 
                            { data: 'summary' }, 
                            { data: 'temperatureC' },
                            { data: 'temperatureF' }
                        ],
                        rowCallback: function( row, data, dataIndex ) {
                            $('td:eq(0)', row).html( dataIndex + 1 );
                            $('td:eq(1)', row).html( dateParser(data.date) );
                        }
                    });
            },
            error: function (obj) {
                alert(obj.msg);
            }
        });
    })
})



function dateParser(date){
    let dateYear = date.substring(0, 4);
    let dateMonth = date.substring(5, 7);
    let dateDay = date.substring(8, 10);
    let revDate = `${dateDay}/${dateMonth}/${dateYear}`;
    return revDate;
}
// function indexParser(index){
//     if(index === 0){
//         return 'firstCity'
//     } else if (index === 1){
//         return 'secondCity'
//     } else if (index === 2){
//         return 'thirdCity'
//     } else if (index === 3){
//         return 'forthCity'
//     } else {
//         return 'fifthCity'
//     }
// }