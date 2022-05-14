export function getDate() {
  type dayObjType = {
    [index: number]: string;
  };

  // * 전체 요일 목록
  const allDay: dayObjType = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thrusday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  // * 전체 월 목록
  const allMonth: dayObjType = {
    0: "January",
    1: "Fabuary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const nowDate = new Date();

  // * 요일(Mon ~ Sun / 월 ~ 금)
  const day = allDay[nowDate.getDay()];

  // * 월(1월 ~ 12월 / 0 ~ 11)
  const month = allMonth[nowDate.getMonth()];

  // * 일(1일 ~ 31일)
  const date = nowDate.getDate() + "th";

  return { day, month, date };
}
