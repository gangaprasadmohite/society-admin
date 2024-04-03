"use client";
import OutlinedInput from "@/lib/components/OulinedInput";
import StyledButton from "@/lib/components/styledButton";

const LogInPage = () => {
  const example = () => {
    console.log("hi");
  };
  return (
    <>
      <div className="bg-gray-100 p-2 w-2/5 mx-auto rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-5">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In To Your Account
          </h2>
        </div>
        <div className="max-w-96 mx-auto mb-4">
          <OutlinedInput label="Email" />
        </div>
        <div className="max-w-96 mx-auto mb-4">
          <OutlinedInput label="Password" type="password" />
        </div>
        <div className="max-w-96 mx-auto flex justify-center mt-8">
          <StyledButton
            label="Sign In"
            onClick={example}
            variant="solid"
            color="primary"
          />
        </div>
      </div>
    </>
  );
};

export default LogInPage;
