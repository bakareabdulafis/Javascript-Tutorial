var xValues = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var colour = yValues.map(x => 'hsl(10, 79%, 65%)');
colour[yValues.indexOf(Math.max(...yValues))] = "hsl(186, 34%, 60%)";
var hoverColor = yValues.map(x => 'hsl(10,79%, 75%)');
hoverColor[yValues.indexOf(Math.max(...yValues))] = "hsl(186, 34%, 70%)"

new Chart("myChart", {
  type: "bar",
  display: false,
  data: {
    labels: xValues,
    datasets: [{
      borderRadius: 4,
      borderSkipped: 'bottom',
      backgroundColor: colour,
      hoverBackgroundColor: hoverColor,
      data: yValues
    }]
  },
  options: {
    scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {display: false},
        },
        x: {
            grid: {display: false}
        }
      },
    legend: {display: false},
    title: {
      display: false,
      text: "Spending last 7 days"
    },
    plugins: {
        legend: {
          labels: {
            filter: (legendItem, data) => (typeof legendItem.text !== 'undefined')
          }
        }
      }
  }
});
