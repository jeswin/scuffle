export function getTodayStart() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime() + timezoneOffsetMS;
}

export const msInADay = 24 * 60 * 60 * 1000;

export const timezoneOffsetMS = new Date().getTimezoneOffset() * 60 * 1000;

const days = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"],
];

export function getDay(n: number) {
  return days[n][0];
}

export function getFullDay(n: number) {
  return days[n][1];
}

const months = [
  ["Jan", "January"],
  ["Feb", "February"],
  ["Mar", "March"],
  ["Apr", "April"],
  ["May", "May"],
  ["Jun", "June"],
  ["Jul", "July"],
  ["Aug", "August"],
  ["Sep", "September"],
  ["Oct", "October"],
  ["Nov", "November"],
  ["Dec", "December"],
];

export function getMonth(n: number) {
  return months[n][0];
}

export function getFullMonth(n: number) {
  return months[n][1];
}
