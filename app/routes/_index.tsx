import { useNavigation } from '@remix-run/react';

export default function Index() {
  // const navigate = useNavigation();
  // const data = useActionData<dataTypes>();

  return (
    <main className="py-20">
      <div className="">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-center">
          <span className="text-primary">
            Local Coverage Determination (LCD){' '}
          </span>{' '}
          Scraper
        </h1>

        {/* <LCDDropdown /> */}
      </div>

      {/* {navigate.state === 'submitting' && <LoadingSpinner className="my-10" />}
      {data && <DataCard />} */}
    </main>
  );
}
