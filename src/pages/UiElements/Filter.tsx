import SelectDepartment from './SelectDepartment';
import React, { useState, useEffect, useRef } from 'react';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
const Filter: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {/* <-- SearchBox --> */}
        <div className="col-span-12 row-start-1 md:col-span-12">
          <form action="/tables" method="POST">
            <input
              type="text"
              placeholder="Search Evaluators No."
              className=" flex w-full rounded border border-stroke bg-gray bg-transparent py-2 pl-5 text-black outline-none transition focus:border-primary focus:outline-none active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-slate-500 "
            />
          </form>
        </div>
        {/* <-- SearchBox --> */}

        {/* <-- SelectDepartment --> */}
        <div className="col-span-12 row-start-2 md:col-span-6 xl:col-span-6">
          <label className="mb-3 block text-black dark:text-white">
            Select Department
          </label>
          <SelectDepartment />
        </div>
        {/* <-- SelectDepartment --> */}

        {/* <-- Select Date --> */}
        <div className="col-span-12 row-start-3 md:col-span-3 md:row-start-2">
          <label className="mb-3 block text-black dark:text-white">
            Starting Date
          </label>
          <DatePickerOne />
        </div>
        <div className="col-span-12 row-start-4 md:col-span-3 md:row-start-2">
          <label className="mb-3 block text-black dark:text-white">
            Ending Date
          </label>
          <DatePickerOne />
        </div>
        {/* <-- Select Date --> */}
      </div>
    </div>
  );
};

export default Filter;
