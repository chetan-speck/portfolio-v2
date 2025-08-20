// ------------------------------------------------------------------------------------------

import { differenceInMonths } from 'date-fns';

// ------------------------------------------------------------------------------------------

const getDuration = (startDate: Date, endDate: Date): string => {
    const totalMonths = differenceInMonths(endDate, startDate);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const yearsStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearsStr, monthsStr].filter(Boolean).join(' ');
};

// ------------------------------------------------------------------------------------------

export default getDuration;

// ------------------------------------------------------------------------------------------
