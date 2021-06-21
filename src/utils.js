import moment from 'moment';

export const unixToDateTime = (unixTime) =>
  moment(unixTime).format('DD MMM YYYY hh:mm');
