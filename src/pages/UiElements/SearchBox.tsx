const Searchbox = () => {
  return (
    <div>
      <div className="sm:block">
        <form action="/tables" method="POST">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Evaluators No."
              className="xl:w-125mb-2 flex w-full rounded border border-stroke bg-gray bg-transparent py-2 pl-5 text-black outline-none transition focus:border-primary focus:outline-none active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-slate-500 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbox;
