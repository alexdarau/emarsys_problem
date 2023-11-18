import { helpers } from './helpers.js';
import * as Constants from '../constants.js';




export default function calculateDueDate(date, turnaround) {

    if (helpers.isWorkingHour(date)) {
        if (helpers.isTurnaroundValid(turnaround)) {

            let endDate = date;
            let remainingHours = Constants.END_HOUR - date.getHours();

            if (remainingHours - turnaround < 0) {
                //task can't be finished today
                let daysToComplete = helpers.calculateDaysToComplete(turnaround, remainingHours);
                let hoursToComplete = helpers.calculateHoursToComplete(turnaround, remainingHours);

                while (daysToComplete > 0) {
                    //Increment end date by 1
                    endDate.setDate(endDate.getDate() + 1);

                    //Check if end date falls under weekends
                    if (helpers.isWeekend(endDate)) {
                        continue;
                    }

                    daysToComplete--;
                }
                endDate.setHours(Constants.START_HOUR + hoursToComplete);
            }
            else {
                //task can be finished today so add remaining hours
                endDate.setHours(endDate.getHours() + turnaround);
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

