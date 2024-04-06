import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

export default function PageHeader({ pageTitle = "", backPath = "/" }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-7xl pb-4 flex items-end ">
      <div className="border rounded-full mr-3 border-gray-400 cursor-pointer">
        <ArrowBackIcon
          onClick={() => {
            router.push(backPath);
          }}
        />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {pageTitle}
      </h2>
    </div>
  );
}
