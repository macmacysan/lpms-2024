import DefaultLayout from '../layout/DefaultLayout';
import AssignTeam from './UiElements/AssignTeam';
import Calendar from './UiElements/Calendar';
import Filter from './UiElements/Filter';

const Schedules = () => {
  return (
    <DefaultLayout>
      {/* Filter */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <Filter />
          {/* <AssignTeam /> */}
        </div>
        {/* <-- Month Selector --> */}
        <div className="col-span-12">
          <div className="grid justify-center gap-2 sm:flex sm:items-center sm:justify-start">
            {/* <!-- Pagination --> */}
            <nav className="flex items-center justify-end -space-x-px">
              <button
                type="button"
                className="last:rounded-e-lgdisabled:pointer-events-none relative inline-flex items-center justify-center gap-x-1.5 px-2 py-3 text-sm first:rounded-s-lg disabled:opacity-50 dark:border dark:border-form-strokedark dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                <svg
                  className="size-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span aria-hidden="true" className="sr-only">
                  Previous
                </span>
              </button>
              <button
                type="button"
                className="border border-stroke bg-gray bg-transparent px-5 py-2 text-center text-black outline-none transition focus:border-primary focus:outline-none active:border-primary dark:border-form-strokedark dark:bg-boxdark-2 dark:text-slate-400"
                aria-current="page"
              >
                JUNE
              </button>
              <button
                type="button"
                className=" inline-flex items-center justify-center gap-x-1.5 p-3 px-2 py-3 text-sm first:rounded-s-lg last:rounded-e-lg  disabled:pointer-events-none disabled:opacity-50 dark:border dark:border-form-strokedark dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                <span aria-hidden="true" className="sr-only">
                  Next
                </span>
                <svg
                  className="size-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </nav>
            {/* <!-- End Pagination --> */}
          </div>
        </div>
        {/* <-- Month Selector --> */}
        {/* Filter */}
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <AssignTeam />
        </div>
        <div className="col-span-12">
          <Calendar />
        </div>
      </div>
      {/* <-- End Filter --> */}
    </DefaultLayout>
  );
};

export default Schedules;
