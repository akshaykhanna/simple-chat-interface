import moment from 'moment';
import { GET_CHATS_SINCE_DAYS } from './config';

export const unixToDateTime = (unixTime) =>
  moment(unixTime).format('DD MMM YYYY hh:mm');

export const unixTime = (time) => moment(time).unix();

export const getDayFromToday = (days) => +moment().add(days, 'days');

export const getYesterdayUnixTime = () =>
  +getDayFromToday(-GET_CHATS_SINCE_DAYS);
