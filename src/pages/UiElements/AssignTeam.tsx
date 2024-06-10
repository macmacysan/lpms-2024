const AssignTeam = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="inline-block min-w-full p-1.5 align-middle">
            <div className="overflow-hidden">
              <table className="divide-gray-200 min-w-full divide-y dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Evaluators
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-start text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="text-gray-500 px-6 py-3 text-end text-xs font-medium uppercase dark:text-neutral-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-gray-200 divide-y dark:divide-neutral-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm font-medium dark:text-neutral-200">
                      Eddie
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      DO
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Site Evaluation
                    </td>
                    <td className="text-gray-800 whitespace-nowrap px-6 py-4 text-sm dark:text-neutral-200">
                      Sta. Maria, Lagonoy, Camarines Sur
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

export default AssignTeam;
