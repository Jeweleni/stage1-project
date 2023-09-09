document.addEventListener("DOMContentLoaded", function() {
    const realTimeDataElement = document.querySelector('[data-testid="real-time-data"]');

    // Function to update the real-time data
    function updateRealTimeData() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        realTimeDataElement.textContent = `Current Date and Time: ${formattedDate}`;
    }

    // Initial update
    updateRealTimeData();

    // Update the real-time data every second (1000 milliseconds)
    setInterval(updateRealTimeData, 1000);
});
