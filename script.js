document.addEventListener("DOMContentLoaded", function() {
    const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrackElement = document.querySelector('[data-testid="myTrack"]');
    const githubURLElement = document.querySelector('[data-testid="githubURL"]');
    // const realTimeDataElement = document.querySelector('[data-testid="real-time-data"]');
    
    function updateSlackInfo() {
        const slackName = "Jewel Eni";
        const slackImageURL = "https://ca.slack-edge.com/T05FFAA91JP-U05RQNWB79P-661f25735c19-512";

        slackUserNameElement.textContent = slackName;
        slackDisplayImageElement.innerHTML = `<img src="${slackImageURL}" alt="${slackName}" />`;
    }

    function updateDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

        currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
    }

    function updateUTCTime() {
        const currentUTC = new Date().getTime();

        currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTC} milliseconds`;
    }

    // function updateRealTimeData() {
    //     const currentrealTimeData = new Date();
        
    //     currentrealTimeDataElement.textContent =  `Current Date and Time: ${formattedDate}`;
    // }
       

    function updateTrack() {
        const track = "Frontend Development";

        myTrackElement.textContent = `My Track: ${track}`;
    }

    function updateGitHubURL() {
        const githubURL = "https://github.com/Jeweleni/stage1-project";

        githubURLElement.innerHTML = `<a href="${githubURL}" target="_blank">GitHub Repository</a>`;
    }

    updateSlackInfo();
    updateDayOfTheWeek();
    updateUTCTime();
    // updateRealTimeData();
    updateTrack();
    updateGitHubURL();
});
