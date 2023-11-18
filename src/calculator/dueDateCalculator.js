isWorkingHour = require('./helpers')

const START_HOUR = 9;
const END_HOUR = 17;
const WORKING_HOURS = END_HOUR - START_HOUR;

function calculateDueDate(date, turnaround) {
    if (isWorkingHour(date)) {
        if (turnaround > 0) {

            let endDate = date;

            let remainingHours = END_HOUR - date.getHours();
            let daysToComplete = 0;
            let hoursToComplete = 0;
            if (remainingHours - turnaround < 0) {
                //task can't be finished today
                daysToComplete++;
                daysToComplete += Math.floor((turnaround - remainingHours) / WORKING_HOURS);
                hoursToComplete = (turnaround - remainingHours) % WORKING_HOURS;
                console.log(hoursToComplete)

                if (hoursToComplete == 0) {
                    //task can be finished on the closing hour. Reduce targetDays by 1
                    daysToComplete--;
                    hoursToComplete += WORKING_HOURS;
                }

                while (daysToComplete > 0) {
                    //Increment end date by 1
                    endDate.setDate(endDate.getDate() + 1);

                    //Check if end date falls under weekends
                    if ((endDate.getDay() == 0) || (endDate.getDay() == 6)) {
                        continue;
                    }

                    //valid date
                    daysToComplete--;
                }
                endDate.setHours(START_HOUR + hoursToComplete);
            }
            else {
                targetHrs = turnaround;
                console.log(endDate.getHours())
                endDate.setHours(endDate.getHours() + targetHrs); //Add to current hour
            }
            return endDate;
        }

        else {
            throw new Error("Wrong turnaround")
        }
    }
    else {
        throw new Error("Out of working hours")
    }
}

module.exports = calculateDueDate;
