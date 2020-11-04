// ****************************************************
// *** generates form from array of descriptive objects
// ****************************************************
import Input from "../../components/_atoms/Input";
// TODO add <select> creation
export const generateForm = (arr, handleChange) => {
  let mappedForm;
  mappedForm = arr.map((input) => (
    <Input
      key={input.id}
      alert={input.alert}
      disabled={input.disabled ? true : false}
      label={input.label && input.label}
      name={input.name}
      placeholder={input.placeholder && input.placeholder}
      required={input.required ? true : false}
      type={input.type}
      value={input.value}
      onChange={handleChange}
    />
  ));
  return mappedForm;
};

// *****************************************************
// *** handle change of inputs and return updated object
// *****************************************************
export const handleChange = (e, state) => {
  return {
    ...state,
    [e.target.name]: e.target.value,
  };
};

// *****************************************************
// *** sorts event list in order based on user options
// *****************************************************
// ? options = {sort, filter_assigned, filter_author}
export const sortFilterEvents = (options, initialState) => {
  // if no options sort by defaults
  console.log("sorting");
  if (!options.sort && !options.filter_assigned && !options.filter_author) {
    return initialState;
  }
  switch (options.sort) {
    case "date_closest":
      let d_c_sort = initialState
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log(d_c_sort);
      return initialState;
    case "date_furthest":
      return initialState;
    case "priority_hl":
      return initialState;
    case "priority_lh":
      return initialState;
    case "category_az":
      return initialState;
    case "category_za":
      return initialState;
    default:
      return initialState;
  }
};

// *****************************************************
// *** creates new date string from input values
// *****************************************************
export const generateDateString = (year, month, date, hour, minute) => {
  return new Date(`${year}-${month}-${date}T${hour}:${minute}:00`);
};

// ? reusable date info
let current = new Date();
let yr = current.getFullYear();
let mo = current.getMonth();
let dt = current.getDate();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// *****************************************************
// *** generate month name from date index
// *****************************************************
export const generateMonthName = (i) => months[i];

// *****************************************************
// *** increment days from first given date and index
// *****************************************************
export const incrementDay = (day, i) => {
  let current = i % 7;
  let start;
  switch (day) {
    case "Sun":
      start = 0;
      break;
    case "Mon":
      start = 1;
      break;
    case "Tue":
      start = 2;
      break;
    case "Wed":
      start = 3;
      break;
    case "Thu":
      start = 4;
      break;
    case "Fri":
      start = 5;
      break;
    case "Sat":
      start = 6;
      break;
    default:
      start = 0;
      break;
  }
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[current + start];
};

// *****************************************************
// *** generate values for date select
// *****************************************************
export const generateDateArr = (type, month, year) => {
  switch (type) {
    case "year":
      let yearArray = [
        { text: yr, value: yr },
        { text: yr + 1, value: yr + 1 },
        { text: yr + 2, value: yr + 2 },
        { text: yr + 3, value: yr + 3 },
        { text: yr + 4, value: yr + 4 },
      ];
      return yearArray;
    case "month":
      let monthArray = months.map((month, i) => {
        return { text: month, value: i };
      });
      return monthArray;
    case "date":
      let firstDate = new Date(year, month, 1);
      let firstDay = firstDate.toString().substr(0, 3);
      let lastDate = new Date(year, month + 1, 0);
      let lastDateNum = parseInt(lastDate.toString().substr(8, 2));
      let datesArr = [];
      for (let i = 0; i < lastDateNum - 1; i++) {
        datesArr = [
          ...datesArr,
          {
            text: `${incrementDay(firstDay, i)} ${
              i < 9 ? `0${i + 1}` : i + 1
            } ${generateMonthName(month).substr(0, 3)} ${year}`,
            value: i + 1,
          },
        ];
      }
      return datesArr;
    default:
      throw new Error();
  }
};
generateDateArr("date", 10, 2020);

// *****************************************************
// *** generate default current values for date select
// *****************************************************
export const generateDefaultDate = (type) => {
  switch (type) {
    case "year":
      let year = yr.toString();
      return year;
    case "month":
      let month = mo.toString();
      return month;
    case "date":
      let date = dt.toString();
      return date;
    default:
      throw new Error();
  }
};

// *****************************************************
// *** convert UTC string to date and time strings
// *****************************************************
export const utcDateToDateString = (date) => {
  let str = date.toUTCString();
  let dy = str.substr(0, 3);
  let dt = str.substr(5, 2);
  let mn = str.substr(8, 3);
  let yr = str.substr(12, 4);
  return `${dy} ${dt} ${mn} ${yr}`;
};
export const utcDateToTimeString = (date) => {
  let str = date.toUTCString();
  let time = str.substr(17, 5);
  return time;
};
