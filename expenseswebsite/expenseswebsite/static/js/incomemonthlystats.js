const renderChart = (data, labels) => {
    var ctx = document.getElementById("myChartIncomeMonthly").getContext("2d");
    var myChartMonthly = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Monthly",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Income per sources",
        },
      },
    });
  };
  
  const getChartData = () => {
    console.log("fetching");
    fetch("income_source_monthly_summary")
      .then((res) => res.json())
      .then((results) => {
        console.log("results", results);
        const source_data = results.income_source_monthly_data;
        const [labels, data] = [
          Object.keys(source_data),
          Object.values(source_data),
        ];
          renderChart(data, labels);
      });
  };
  

  document.onload = getChartData();



const renderChart2 = (data, labels) => {
  var ctx = document.getElementById("myChartIncomeLastweek").getContext("2d");
  var myChartLastweek = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "days",
          data: data,
          backgroundColor: [
            "rgba(99, 99, 255, 0.8)",
            
          ],
          borderColor: [
            "rgba(99, 99, 255, 1)",
           
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Income last week",
      },
    },
  });
};

const getChartData2 = () => {
  console.log("fetching");
  fetch("income_source_lastweek_summary")
    .then((res) => res.json())
    .then((results) => {
      console.log("results", results);
      const source_data = results.income_source_lastweek_data;
      const [labels, data] = [
        Object.keys(source_data),
        Object.values(source_data),
      ];
        renderChart2(data, labels);
    });
};
  
document.onload = getChartData2();