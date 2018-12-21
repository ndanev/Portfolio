window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Languages"
        },
        data: [{
            type: "pie", //change type to bar, line, area, pie, column etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 100, indexLabel: "Serbian Fluent" },
                { x: 20, y: 60, indexLabel: "English Second Lang" },
                { x: 30, y: 10, indexLabel: "Other lang" }
            ]
        }]
    });
    chart.render();

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Strengths"
        },
        data: [{
            type: "pie", //change type to bar, line, area, pie, column etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { x: 10, y: 60, indexLabel: "Front End" },
                { x: 20, y: 30, indexLabel: "Back End" },
                { x: 30, y: 10, indexLabel: "Database" }
            ]
        }],
        // backgroundColor: '#acece6',
    });
    chart2.render();
    
}


// functionality for scrilling down 
$('#btn-find-out-more').on('click', () => {
    $('html, body').animate({scrollTop: 850}, '1000');
});

$("#arrow-down").on('click', () => {
    $('html, body').animate({scrollTop: 850}, '500');
});