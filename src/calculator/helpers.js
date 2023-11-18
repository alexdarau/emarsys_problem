import * as Constants from '../constants.js';
export const helpers = {
    isWorkingHour(date) {

        return !this.isWeekend(date) && date.getHours() >= Constants.START_HOUR && date.getHours() < Constants.END_HOUR;
    },

    isTurnaroundValid(turnaround) {
        if (turnaround > 0)
            return true;
        return false;
    },

    calculateHoursToComplete(turnaround, remainingHours) {
        return (turnaround - remainingHours) % Constants.WORKING_HOURS;
    },

    calculateDaysToComplete(turnaround, remainingHours) {
        return Math.floor((turnaround - remainingHours) / Constants.WORKING_HOURS) + 1;
    },

    isWeekend(date) {
        return ((date.getDay() == Constants.FIRST_DAY_OF_WEEK) || (date.getDay() == Constants.LAST_DAY_OF_WEEK));
    }
};
