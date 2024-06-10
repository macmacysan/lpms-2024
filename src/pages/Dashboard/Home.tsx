import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import { useAuth } from '../Authentication/AuthContext';

const Home: React.FC = () => {
  const { logout } = useAuth();
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-2  md:mx-10 md:gap-4 lg:mx-5 2xl:my-20 2xl:gap-4">
        {/* Total Registered Permit */}
        <div className="col-span-3 row-start-4">
          <div className="">
            {/* <div className="row-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:gap-5"> */}
            <div className="p-4 opacity-70">
              <p className="text-3xl font-bold">501,220</p>
              <p className="text-sm font-medium">
                Total Registered Building Permit
              </p>
              {/* <button
                type="button"
                className="font-base mt-2 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-10 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              >
                Add New Applicant
              </button> */}
              {/* <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                <a href="#" className="text-base font-semibold text-primary">
                  View All Records
                </a>
              </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* Total Occupancy Permit */}
        <div className="col-span-4 col-start-4 row-start-4">
          <div className="">
            {/* <div className="row-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:gap-5"> */}
            <div className="p-4 opacity-70">
              <p className="text-3xl font-bold">421,512</p>
              <p className="text-sm font-medium">
                Total Registered Occupancy Permit
              </p>
              {/* <button
                type="button"
                className="font-base mt-2 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-10 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              >
                Add New Applicant
              </button> */}
              {/* <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                <a href="#" className="text-base font-semibold text-primary">
                  View All Records
                </a>
              </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* OBO */}
        <div className="col-span-6 row-span-2">
          <div>
            <h1 className="mb-2 text-base  text-slate-500 dark:text-slate-600">
              Trade Evaluation
            </h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:gap-5">
              {/* Card 1 */}
              <div className="bg-white p-4 dark:border-strokedark dark:bg-boxdark dark:opacity-50">
                <p className="text-5xl font-bold">1</p>
                <p className=" text-sm font-medium">Queue</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-4 dark:border-strokedark dark:bg-boxdark dark:opacity-50">
                <p className="text-5xl font-bold">7</p>
                <p className=" text-sm font-medium">Processing</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4  dark:border-strokedark dark:bg-boxdark">
                <p className="text-5xl font-bold text-warning dark:text-warning">
                  2
                </p>
                <p className=" text-sm font-medium text-warning">Disapproved</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-4  dark:border-strokedark dark:bg-boxdark">
                <p className="text-5xl font-bold text-green-600">3</p>
                <p className=" text-sm font-medium text-green-600">Approved</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment */}
        <div className="col-span-6 col-start-7 row-span-2">
          <div>
            <h1 className="font-based mb-2 text-base text-slate-500 dark:text-slate-600">
              Payment Verification
            </h1>
            <div className="">
              <div className="xl:grid-cols-0 grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 2xl:gap-5">
                {/* Card 1 */}
                <div className="col-span-1 col-start-1 row-start-1 bg-white p-4 dark:border-strokedark dark:bg-boxdark dark:opacity-50">
                  <p className="text-5xl font-bold">10</p>
                  <p className="text-sm font-medium">Waiting Verification</p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                      onClick={logout}
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="col-span-1 col-start-1 row-start-2 bg-white p-4 dark:border-strokedark dark:bg-boxdark dark:opacity-50">
                  <p className="text-5xl font-bold">2</p>
                  <p className=" text-sm font-medium">Pending Payment</p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center bg-white p-4 dark:border-strokedark dark:bg-boxdark  md:col-start-2 md:row-span-2 lg:col-span-1  lg:col-start-2  lg:row-span-2  lg:row-start-1 ">
                  <p className="mb-4 text-7xl font-bold">2</p>
                  <p className=" text-center text-sm font-medium">
                    Print Invoice for Completed Application
                  </p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                    >
                      View and Print
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Zoning Evaluation */}
        <div className="col-span-6 row-start-3">
          <div>
            <h1 className="font-based mb-2 text-base  text-slate-500 dark:text-slate-600">
              Zoning Evaluation
            </h1>
            <div className="max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:gap-0">
                {/* Card 1 */}
                <div className="bg-white p-4 opacity-50 dark:border-strokedark dark:bg-boxdark">
                  <p className="font-base text-3xl">5</p>
                  <p className="text-sm font-medium">Queue</p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-4 opacity-50  dark:border-strokedark dark:bg-boxdark">
                  <p className="font-base text-3xl">2</p>
                  <p className=" text-sm font-medium">Processing</p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-4 opacity-50  dark:border-strokedark dark:bg-boxdark">
                  <p className="font-base text-3xl opacity-0">0</p>
                  <p className=" text-sm font-medium">Disapproved</p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white p-4 opacity-100  dark:border-strokedark dark:bg-boxdark">
                  <p className="text-3xl font-bold text-green-600">1</p>
                  <p className=" text-sm font-medium text-green-600">
                    Approved
                  </p>
                  <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                    <a
                      href="#"
                      className="text-base font-semibold text-primary"
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* BFP Evaluation */}
        <div className="col-span-6 col-start-7 row-start-3">
          <div>
            <h1 className="mb-2 text-base text-slate-500 dark:text-slate-600">
              BFP Evaluation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {/* Card 1 */}
              <div className="bg-white p-4  opacity-50 dark:border-strokedark dark:bg-boxdark">
                <p className="font-base text-3xl">1</p>
                <p className=" text-sm font-medium">Queue</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-4  opacity-50 dark:border-strokedark dark:bg-boxdark">
                <p className="font-base text-3xl">2</p>
                <p className=" text-sm font-medium">Processing</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4  opacity-50 dark:border-strokedark dark:bg-boxdark">
                <p className="font-base text-3xl text-warning dark:text-warning">
                  1
                </p>
                <p className=" text-sm font-medium text-warning">Disapproved</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-4  dark:border-strokedark dark:bg-boxdark">
                <p className="font-base text-3xl opacity-0">0</p>
                <p className=" text-sm font-medium">Approved</p>
                <div className="flex items-center justify-center opacity-0 hover:opacity-100">
                  <a href="#" className="text-base font-semibold text-primary">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifications */}
        {/* <div className="col-span-4 col-start-1 row-span-2 row-start-3">
          <ChatCard />
        </div> */}
      </div>
      {/* <div className="mt-4 grid grid-cols-12 gap-2 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"> */}
      {/* <ChartOne /> */}
      {/* <ChartTwo /> */}
      {/* <ChartThree /> */}
      {/* <MapOne /> */}
      {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
      </div> */}
    </DefaultLayout>
  );
};

export default Home;
