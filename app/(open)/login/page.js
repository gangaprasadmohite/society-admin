"use client";
import OutlinedInput from "@/lib/components/OulinedInput";
import StyledButton from "@/lib/components/styledButton";
import { useRouter } from "next/navigation";

const LogInPage = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8"
        style={{ height: "97vh" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <OutlinedInput label="Email Address" />
            </div>

            <div>
              <OutlinedInput label="Password" />
            </div>

            <div className="flex justify-center">
              <StyledButton
                label="Sign in"
                color="primary"
                variant="solid"
                onClick={() => {
                  router.push("/");
                }}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
