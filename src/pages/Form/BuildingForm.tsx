import React, { useState } from 'react';
import { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import flatpickr from 'flatpickr';

const BuildingForm: React.FC = () => {
  useEffect(() => {
    // Init flatpickr
    flatpickr('.form-datepicker', {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j, Y',
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Building Application" />

      <div className="grid gap-9">
        <div className="flex flex-col gap-9">
          {/* Project Registration */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                PROJECT REGISTRATION
              </h3>
              <div className="mb-4 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center">
                  <CheckboxTwo />
                  <span className="ml-2 py-2">Sole Proprietorship</span>
                </div>
                <div className="flex items-center">
                  <CheckboxTwo />
                  <span className="ml-2 py-2">Partnership/Corporation</span>
                </div>
                <div className="flex items-center">
                  <CheckboxTwo />
                  <span className="ml-2 py-2">Community Association</span>
                </div>
                <div className="flex items-center">
                  <CheckboxTwo />
                  <span className="ml-2 py-2">Government</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Owners Address
                </label>
                <input
                  type="text"
                  placeholder="Owners Address"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          {/* Project Location */}
          <div className="grid grid-cols-2 gap-4">
            {/* Project Location */}
            <div className="col-span-2  md:col-span-1">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <label className="mb-3 block text-black dark:text-white">
                    PROJECT LOCATION
                  </label>
                  <div className="grid grid-cols-8 gap-4">
                    {/* Lot No. etc */}
                    <div className="col-span-8">
                      <label className="mb-3 block text-black dark:text-white">
                        Lot No./Blk No./Street
                      </label>
                      <input
                        type="text"
                        placeholder="Owners Address"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    {/* Select Barangay */}
                    <div className="col-span-8 md:col-span-3">
                      <label className="mb-3 block text-black dark:text-white">
                        Select Barangay
                      </label>

                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <select
                          value={selectedOption}
                          onChange={(e) => {
                            setSelectedOption(e.target.value);
                            changeTextColor();
                          }}
                          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-6 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                            isOptionSelected ? 'text-black dark:text-white' : ''
                          }`}
                        >
                          <option
                            value=""
                            disabled
                            className="text-body dark:text-bodydark"
                          >
                            Select Barangay
                          </option>
                          <option
                            value="USA"
                            className="text-body dark:text-bodydark"
                          >
                            San Rafael
                          </option>
                          <option
                            value="UK"
                            className="text-body dark:text-bodydark"
                          >
                            San Vicente
                          </option>
                          <option
                            value="Canada"
                            className="text-body dark:text-bodydark"
                          >
                            Santa Maria
                          </option>
                        </select>

                        <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2"></span>
                      </div>
                    </div>
                    {/* Project Cost */}
                    <div className="col-span-8 md:col-span-5">
                      <label className="mb-3 block text-black dark:text-white">
                        Project Cost
                      </label>
                      <input
                        type="text"
                        placeholder="P"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    {/* Proposed date of construction */}
                    <div className="col-span-8 md:col-span-4">
                      <div>
                        <label className="mb-3 block text-black dark:text-white">
                          Proposed Date of Construction
                        </label>
                        <DatePickerOne />
                      </div>
                    </div>
                    {/* Proposed date of completion */}
                    <div className="col-span-8 md:col-span-4">
                      <div>
                        <label className="mb-3 block text-black dark:text-white">
                          Proposed Date of Completion
                        </label>
                        <DatePickerOne />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Map pin */}
            <div className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
              <div className="relative h-96 w-full">
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                  aria-hidden="false"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Proof of Ownership */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Proof of ownership
              </h3>
              <label className="mb-4 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="ctcl"
                    checked={selectedOption === 'ctcl'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">
                    Certified True Copy of Land Title
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="cos"
                    checked={selectedOption === 'cos'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">Contract of Sale</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="chc"
                    checked={selectedOption === 'chc'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">City Housing Clearance</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="ndoas"
                    checked={selectedOption === 'ndoas'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">
                    Notarized Deed of Absolute Sale
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="natc"
                    checked={selectedOption === 'natc'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">
                    Notarized Authority to Construct
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="ad"
                    checked={selectedOption === 'ad'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">Ancestral Domain</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="col"
                    checked={selectedOption === 'col'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">Contract of Lease</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="ca"
                    checked={selectedOption === 'ca'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">Community Association</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value="colp"
                    checked={selectedOption === 'colp'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className=" mr-4 flex h-5 w-5 items-center justify-center rounded-2xl border
                    "
                  />
                  <span className="ml-2 py-2">
                    Certificate of Lot Purchase (for mausoleum only)
                  </span>
                </div>
              </label>
            </div>

            {/* Proof of Ownership + Designer and Architect */}
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
              {/* Proof of Ownership */}
              <div className="col-span-4 row-start-2 gap-4 md:col-span-1 md:row-start-1">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Designing Engineer/Architect Information
                  </h3>
                  <div className="mb-4 flex flex-row items-center gap-8">
                    <div className="flex items-center">
                      <CheckboxTwo />
                      <span className="ml-2 py-2">Architect</span>
                    </div>
                    <div className="flex items-center">
                      <CheckboxTwo />
                      <span className="ml-2 py-2">Civil Engineer</span>
                    </div>
                  </div>
                  {/* Name Input */}
                  <div className="grid grid-cols-8 gap-5.5">
                    <div className="col-span-8 row-start-1 md:col-span-4">
                      <label className="mb-3 block text-black dark:text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 row-start-1 md:col-span-4">
                      <label className="mb-3 block text-black dark:text-white">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        placeholder="Middle Name"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 md:col-span-5 md:row-start-2">
                      <label className="mb-3 block text-black dark:text-white">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 md:col-span-3 md:row-start-2">
                      <label className="mb-3 block text-black dark:text-white">
                        Suffix Name
                      </label>
                      <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                        <option value="">Select Suffix</option>
                        <option value="IV">Jr.</option>
                        <option value="V">Sr.</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                      </select>
                    </div>
                    <div className="col-span-8 md:col-span-8 md:row-start-3">
                      <label className="mb-3 block text-black dark:text-white">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 md:col-span-5">
                      <label className="mb-3 block text-black dark:text-white">
                        Mobile No.
                      </label>
                      <input
                        type="text"
                        placeholder="+63"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    {/* PRC No. */}
                    <div className="col-span-8 md:col-span-4  md:row-start-5">
                      <label className="mb-3 block text-black dark:text-white">
                        PRC No.
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 md:col-span-4  md:row-start-5">
                      <label className="mb-3 block text-black dark:text-white">
                        Validity
                      </label>
                      <DatePickerOne />
                    </div>
                    {/* PTR No. */}
                    <div className="col-span-8 md:col-span-4  md:row-start-6">
                      <label className="mb-3 block text-black dark:text-white">
                        PTR No.
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 md:col-span-4  md:row-start-6">
                      <label className="mb-3 block text-black dark:text-white">
                        Date Issued
                      </label>
                      <DatePickerOne />
                    </div>
                    <div className="col-span-8 md:col-span-4  md:row-start-7">
                      <label className="mb-3 block text-black dark:text-white">
                        Place Issued
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-8 md:col-span-4  md:row-start-7">
                      <label className="mb-3 block text-black dark:text-white">
                        TIN
                      </label>
                      <input
                        type="text"
                        placeholder="####-###-###-###"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
              Proof of Ownership Validation
              <div className="col-span-4 col-start-1 row-start-1 gap-4 md:col-span-1 md:row-start-1">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Proof of Ownership Validation
                  </h3>
                  <div className="p-4">
                    {selectedOption === 'ctcl' && (
                      <div>
                        <div className="grid grid-cols-4 gap-5.5">
                          <div className="col-span-4">
                            <label className="mb-3 block text-black dark:text-white">
                              TCT No.
                            </label>
                            <input
                              type="text"
                              placeholder="TCT No."
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="mb-3 block text-black dark:text-white">
                              First Name
                            </label>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="mb-3 block text-black dark:text-white">
                              Middle Name
                            </label>
                            <input
                              type="text"
                              placeholder="Middle Name"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                          <div className="col-span-3">
                            <label className="mb-3 block text-black dark:text-white">
                              Last Name
                            </label>
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="mb-3 block text-black dark:text-white">
                              Suffix Name
                            </label>
                            <select className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                              <option value="">Select Suffix</option>
                              <option value="IV">Jr.</option>
                              <option value="V">Sr.</option>
                              <option value="I">I</option>
                              <option value="II">II</option>
                              <option value="III">III</option>
                              <option value="IV">IV</option>
                              <option value="V">V</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedOption === 'cos' && <div>2</div>}
                    {selectedOption === 'chc' && <div>3</div>}
                    {selectedOption === 'ndoas' && <div>4</div>}
                    {selectedOption === 'natc' && <div>5</div>}
                    {selectedOption === 'ad' && <div>6</div>}
                    {selectedOption === 'col' && <div>7</div>}
                    {selectedOption === 'ca' && <div>8</div>}
                    {selectedOption === 'colp' && <div>9</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuildingForm;
