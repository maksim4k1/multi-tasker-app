const monthes = {
  "января": "01",
  "февраля": "02",
  "марта": "03",
  "апреля": "04",
  "мая": "05",
  "июня": "06",
  "июля": "07",
  "августа": "08",
  "сентября": "09",
  "октября": "10",
  "ноября": "11",
  "декарбря": "12",
};

function convertDate(date){
  const [day, month, year] = date.split(" ");
  return `${year}-${monthes[month]}-${day}`;
}

export default convertDate;