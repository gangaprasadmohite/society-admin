import Header from "./Header";

function AppLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto max-w-screen-xl h-screen	 py-6 sm:px-6 lg:px-8 border ">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
