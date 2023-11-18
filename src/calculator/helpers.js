function isWorkingHour(date) {
    return date.getDay() <= 4 && date.getHours() >= 9 && date.getHours() < 17;
}

module.exports = isWorkingHour;