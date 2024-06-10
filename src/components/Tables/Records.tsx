const Records = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="rounded-lg bg-white px-8 py-4 shadow-sm dark:bg-boxdark">
          <div className="w-full">
            <h2 className="text-lg font-medium text-black dark:text-white">
              Evaluators Legend
            </h2>
            <ul className="text-gray-500 mt-2 flex flex-row flex-wrap gap-5 text-sm dark:text-neutral-500">
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-red-700"></div>
                <span>GEODETIC ENGINEER</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-orange-800"></div>
                <span>ARCHITECT</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-green-900"></div>
                <span>CIVIL / STRUCTURAL ENGR.</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-400"></div>
                <span>SANITARY ENGR.</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-green-300"></div>
                <span>ELECTRICAL ENGR.</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-pink-500"></div>
                <span>ELECTRONICS & COMMUNICATIONS ENGR.</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-purple-500"></div>
                <span>MECHANICAL ENGR.</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-indigo-500"></div>
                <span>FIRE MARSHAL</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                <span>INSPECTOR</span>
              </li>
              <li className="flex items-center space-x-2 text-nowrap">
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                <span>ZONING</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="-m-1.5 mt-5 overflow-x-auto">
          <div className="inline-block min-w-full p-1.5 align-middle">
            <div className="overflow-hidden">
              <table className="divide-gray-200 min-w-full divide-y dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Application No.
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Project Location
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Project Reg. Evaluation
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Actions
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500   py-3 text-center  text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Evaluations
                      <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                        <div className="grid grid-cols-12 gap-5">
                          <div className="bg-red">1</div>
                          <div className="bg-red">2</div>
                          <div className="bg-red">3</div>
                          <div className="bg-red">4</div>
                          <div className="bg-red">5</div>
                          <div className="bg-red">6</div>
                          <div className="bg-red">7</div>
                          <div className="bg-red">8</div>
                          <div className="bg-red">9</div>
                          <div className="bg-red">10</div>
                        </div>
                      </td>
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-end text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004121
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Santa Maria
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Ongoing
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004434
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      San Francisco
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Approve
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Approve
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Pending
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004178
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      San Vicente
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Ongoing
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004785
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Presentacion
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Ongoing
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004532
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      San Isidro
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Ongoing
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004199
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Binanhuahan
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Ongoing
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      004121
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Santa Maria
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      N/A
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      <div className="grid grid-cols-12 gap-5">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400"
                      >
                        Ongoing
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
