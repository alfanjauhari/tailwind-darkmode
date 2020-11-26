import Wrapper from "../layouts/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="bg-blue-900 dark:bg-gray-800 rounded p-8 text-white w-full md:w-1/3 md:flex md:justify-between md:items-center shadow-2xl">
          <h1 className="text-4xl font-bold">1000</h1>
          <h2>Active users</h2>
        </div>
        <div className="bg-blue-900 dark:bg-gray-800 rounded p-8 text-white w-full md:w-1/3 md:flex md:justify-between md:items-center shadow-2xl mt-4 md:mt-0 md:ml-4">
          <h1 className="text-4xl font-bold">4000</h1>
          <h2>Total users</h2>
        </div>
        <div className="bg-blue-900 dark:bg-gray-800 rounded p-8 text-white w-full md:w-1/3 md:flex md:justify-between md:items-center shadow-2xl mt-4 md:mt-0 md:ml-4">
          <h1 className="text-4xl font-bold">8000</h1>
          <h2>Pending Orders</h2>
        </div>
      </div>
    </Wrapper>
  );
}
