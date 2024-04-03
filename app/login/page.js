"use client";
import OutlinedInput from "@/lib/components/OulinedInput";
import StyledButton from "@/lib/components/styledButton";
import Link from "next/link";

const LogInPage = () => {
  const example = () => {
    console.log("hi");
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="max-w-96 mx-auto mb-4">
              <OutlinedInput label="Email" />
            </div>
            <div className="max-w-96 mx-auto mb-4">
              <OutlinedInput label="Password" type="password" />
            </div>
            <div className="max-w-96 mx-auto flex justify-center mt-8">
              <Link href="/project">
                <StyledButton
                  label="Sign In"
                  onClick={example}
                  variant="solid"
                  color="primary"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
