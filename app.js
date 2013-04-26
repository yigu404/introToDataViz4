$.getJSON('http://data.seattle.gov/api/views/3k2p-39jp/rows.json?jsonp=callback&max_rows=25', function (results) 
{
    
        $.each(result.data,function(i,value){
        console.log(results['data'][0][16]);
    
    // address
    console.log(value[16])
    // description
    console.log(value[12])
    // time
    console.log(value[15])
    //lat,long
    console.log(value[21])
    console.log(value[20])
    
    L.marker(value[16],value[16].addTo(map)
     .bindPopup('<h3>'+value[12]+'<h3/>'+value[16]+'<br>'+value[15]);
     
    L.circle([value[21],value[20]],100, {color:'#ff00'}).addmap(map);
    
    });
};)

var map = L.map('map').setView([47, -112], 13);

L.tileLayer('http://{s}.tile.cloudmade.com/61d2e95f748e4d1da82b12d461f5174e/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);
