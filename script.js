// Our labels along the x-axis
var years = [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
// For drawing the lines
var malmo = [14,8,4,1,8,15,14,16,12,10,8,11,10,16,13,14,16,16,12,16,16];
var hif = [11,15,16,15,12,13,11,7,11,13,9,13,9,15,16,11,12,8,9,3,-6];
var aik = [9,16,15,14,14,12,12,4,2,15,12,12,16,6,15,13,15,14,14,15,15];
var ifkgbg = [15,9,11,13,13,5,10,14,15,9,16,14,15,10,10,10,14,15,15,13,9];
var ife = [10,7,8,12,7,7,7,8,10,16,13,15,14,13,14,16,11,13,13,12,10];
var dif = [1,2,3,2,15,16,16,13,16,11,14,5,3,7,6,8,10,10,11,10,14]
var bajen = [2,14,7,9,16,8,15,11,13,14,11,8,1,-8,-11,-4,-5,-1,6,6,6]

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: malmo, 
        label: 'MFF',
        fill: false, 
        borderColor: '#28bddb'
      },
        { 
        data: hif, 
        label: 'HIF',
        fill: false, 
        borderColor: '#db2827'
      },
        { 
        data: aik, 
        label: 'AIK',
        fill: false, 
        borderColor: '#000000'
      },
        { 
        data: ifkgbg, 
        label: 'IFK GBG',
        fill: false, 
        borderColor: '#8400e3'
      },
        { 
        data: ife, 
        label: 'IFE',
        fill: false, 
        borderColor: '#ebdb2c'
      },
         { 
        data: dif, 
        label: 'DIF',
        fill: false, 
        borderColor: '#0000b3'
      },
         { 
        data: bajen, 
        label: 'Bajen',
        fill: false, 
        borderColor: '#2ac500'
      },
    ]
  },
  options: {
  	responsive: false
  }
});
