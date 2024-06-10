import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import Records from '../components/Tables/Records';
const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Applicants List" />

      <div className="flex flex-col gap-10">
        <Records />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
