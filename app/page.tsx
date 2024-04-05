import Link from "next/link";
import TableData from "@/components/tabledata";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";

export default function Home() {
    return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">Next.js 14 Python Flask CRUD Mysql (Create Read Update and Delete)| TailwindCSS DaisyUI</h1>
      </div>    
        <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
            <Link
              href="/user/create"
              className="btn btn-primary">
              Create
            </Link>
          </div>
          <Suspense fallback={<Spinner />}>
            <TableData/>
          </Suspense>
      </div>  
    </div>
  ); 
}
