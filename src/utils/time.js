export const get15days = () => {
  const date = new Date();
  let currentDate = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();
  const februaryDays = year % 4 === 0 && year % 100 !== 0 ? 29 : 28;
  const monthArr = [31, februaryDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const xAxisData = [];
  for (let i = 0; i < 15; i++) {
    xAxisData.push(month + 1 + "-" + currentDate);
    if (currentDate > 1) {
      currentDate -= 1;
    } else {
      month -= 1;
      currentDate = monthArr[month];
    }
  }
  return xAxisData;
};

export const minuteBefore = date => {
  const updateDate = new Date(date).getTime();
  const currentDate = new Date().getTime();

  const space = Math.floor((currentDate - updateDate) / 1000);
  const h = Math.floor(space / 3600);
  const m = Math.floor((space % 3600) / 60);
  const day = 24 * 60 * 60 * 1000;
  const beforeUpdate = space < day && h > 1 ? `${h}小时${m}分钟` : `${m}分钟`;
  return beforeUpdate;
};
