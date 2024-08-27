const showClock = () => {
    let dateTime = new Date();
    let hours = formatHour(dateTime.getHours());
    let minutes = formatHour(dateTime.getMinutes());
    let seconds = formatHour(dateTime.getSeconds());
    document.getElementById('hour').innerHTML = `${hours}:${minutes}:${seconds}`;

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let dayWek = days[dateTime.getDay()];
    let day = dateTime.getDate();
    let month = months[dateTime.getMonth()];
    let dateTimeText = `${dayWek}, ${day} ${month}`;
    document.getElementById('dateTime').innerHTML = dateTimeText;
    document.getElementById('container').classList.toggle('animation')
        ;
}

const formatHour = (hour) => { 
    if (hour < 10) {
        return `0${hour}`;
    }
    return hour;
}

setInterval(showClock, 1000);