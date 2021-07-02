import React, { forwardRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    style={{
      height: 30,
      width: 120,
      backgroundColor: "transparent",
      borderRadius: 4,
      border: "1px solid #ccc",
      
    }}
    onClick={onClick}
    ref={ref}
  >
    {value}
  </button>
));

const CustomDatePicker = ({year, setYear}) => {

  return (
    <DatePicker
    withPortal
      selected={year}
      onChange={(date) => console.log(date)}
      showYearPicker
      dateFormat="yyyy"
      yearItemNumber={9}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default CustomDatePicker;
