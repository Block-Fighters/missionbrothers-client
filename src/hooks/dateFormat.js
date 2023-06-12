function dateFormat(date) {
  const currentDate = new Date(Number(date));
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  console.log(date);

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return currentDate.getFullYear() + '-' + month + '-' + day;
}

export default dateFormat;
