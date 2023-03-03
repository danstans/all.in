const DatePickerComponent = ({ date, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy"
    />
  );
};
