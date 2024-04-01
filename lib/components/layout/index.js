import Header from "./Header";

function AppLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main
        // className="border-solid border-2 border-gray-100 mx-auto max-w-6xl "
        >
          <div className="mx-auto max-w-6xl-xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
