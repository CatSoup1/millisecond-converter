exports.secsMinsHours = (duration) => {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return {
        "hours": hours,
        "mins": minutes,
        "secs": seconds,
        "milli": milliseconds
    }
}

exports.secsMinsHoursDays = (duration) => {
    var milliseconds = Math.floor((duration % 1000) / 100)
    var days = Math.floor(duration / (24 * 60 * 60 * 1000));
    var daysms = duration % (24 * 60 * 60 * 1000);
    var hours = Math.floor(daysms / (60 * 60 * 1000));
    var hoursms = duration % (60 * 60 * 1000);
    var minutes = Math.floor(hoursms / (60 * 1000));
    var minutesms = duration % (60 * 1000);
    var sec = Math.floor(minutesms / 1000);
    return {
        "days": days,
        "hours": hours,
        "mins": minutes,
        "secs": sec,
        "milli": milliseconds
    }
}