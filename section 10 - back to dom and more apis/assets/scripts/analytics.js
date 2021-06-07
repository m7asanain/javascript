const intervalId = setInterval(() => {
    console.log("Sending analytics Data...");
}, 2000);   // sent every 2 second

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(intervalId);  
  });