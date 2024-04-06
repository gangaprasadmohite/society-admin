"use client";
import OutlinedInput from "@/lib/components/OulinedInput";
import Link from "next/link";
import StyledButton from "@/lib/components/styledButton";

const SignupPage = () => {
  const example = () => {
    console.log("hi");
  };
  return (
    <>
      <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8"
        style={{ height: "90vh" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="max-w-96 mx-auto mb-4 ">
              <OutlinedInput label="User Name" />
            </div>
            <div className="max-w-96 mx-auto mb-4">
              <OutlinedInput label="Email" />
            </div>
            <div className="max-w-96 mx-auto mb-4">
              <OutlinedInput label="Password" type="password" />
            </div>
            <div className="max-w-96 mx-auto mb-4">
              <OutlinedInput label="Confirm Password" type="password" />
            </div>
            <div className="max-w-xl mx-auto flex justify-center mt-8">
              <Link href="/login">
                <StyledButton
                  label="Sign up"
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

export default SignupPage;
