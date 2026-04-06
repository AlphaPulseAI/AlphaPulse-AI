const data = [
  { name: "BTC", sentiment: 82, signal: "BUY" },
  { name: "ETH", sentiment: 65, signal: "WATCH" },
  { name: "PEPE", sentiment: 48, signal: "AVOID" }
];

// RENDER CARDS
const container = document.getElementById("cards");

data.forEach(token => {
  const div = document.createElement("div");
  div.className = "card";

  let signalClass = token.signal.toLowerCase();

  div.innerHTML = `
    <h2>${token.name}</h2>
    <p>Sentiment: ${token.sentiment}%</p>
    <p class="signal ${signalClass}">${token.signal}</p>
  `;

  container.appendChild(div);
});

// CHART
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["1h", "2h", "3h", "4h", "5h"],
    datasets: [{
      label: "Market Momentum",
      data: [10, 30, 25, 50, 40],
      borderWidth: 2
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    },
    scales: {
      x: { ticks: { color: "#aaa" } },
      y: { ticks: { color: "#aaa" } }
    }
  }
});
