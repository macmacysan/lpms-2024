// src/components/SelectDepartment.tsx
import React, { useState, useEffect, useRef } from 'react';

const options = ['Office of the Building Official', 'BFP', 'Zoning Division'];

const SelectDepartment: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="xl:w-125mb-2 flex w-full rounded border border-stroke bg-gray bg-transparent py-2 pl-5 text-black outline-none transition focus:border-primary focus:outline-none active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-slate-400"
        onClick={handleToggleDropdown}
      >
        {selectedOptions.length === 0
          ? 'Select Departments'
          : selectedOptions.join(', ')}
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg dark:border-slate-600 dark:bg-form-input">
          <ul className="py-1 text-base leading-6 text-black dark:text-white">
            {options.map((option) => (
              <li
                key={option}
                className={`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                  selectedOptions.includes(option)
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-900'
                }`}
                onClick={() => handleSelect(option)}
              >
                <span
                  className={`block truncate ${
                    selectedOptions.includes(option)
                      ? 'font-semibold'
                      : 'font-normal'
                  }`}
                >
                  {option}
                </span>
                {selectedOptions.includes(option) && (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectDepartment;
