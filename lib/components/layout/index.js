import Header from "./Header";

function AppLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto max-w-6xl-xl py-6 sm:px-6 lg:px-8">
        <main>
          <div className="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
