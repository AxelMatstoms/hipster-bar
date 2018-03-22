function updateTime() {
    let el = document.getElementById("clockWidget");
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    let hoursStr = (hours < 10 ? "0" : "") + hours.toString();
    let minStr = (minutes < 10 ? "0" : "") + minutes.toString();

    let dateStr = hoursStr + ":" + minStr;
    el.textContent = dateStr;
}

setInterval(updateTime, 1000)
