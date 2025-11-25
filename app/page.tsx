import AddCompanyButton from "./components/add-company-button";
import StatusLabel, { Status } from "./components/status-label";
import { headers } from "next/headers";

export default function Home() {
  const allHeaders = headers();
  console.log("Server headers:", Object.fromEntries(allHeaders.entries()));
  return (
    <main>
      <h1 className="text-xl"> Page Home </h1>
      {/* <h1 className="text-xl"> Page Home {new Date().toTimeString()} </h1> */}
      <div className="flex gap-2 mb-4">
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </div>
      <AddCompanyButton />
    </main>
  );
}
