import React from "react";
import Header from "../../../../components/header";

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <Header>{`Company (${params.id})`}</Header>;
}

// "use client";

// import React, { useEffect } from "react";
// import { notFound } from "next/navigation";
// import Header from "../../../../components/header";

// export interface PageProps {
//   params: { id: string };
// }

// export default function Page({ params }: PageProps) {
//   useEffect(() => {
//     const id = Number.parseInt(params.id);
//     if (Number.isNaN(id)) {
//       notFound();
//     }
//   }, [params.id]);
//   return (
//     <>
//       <Header>Company ({params.id})</Header>
//     </>
//   );
// }
