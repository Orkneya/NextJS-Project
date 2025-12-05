"use client";

import React, { useEffect } from "react";
import Header from "../../../components/header";
import { notFound } from "next/navigation";

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}

// import React, { Children } from "react";
// import Header from "../../../components/header";

// export interface PageProps {
//   params: { id: string };
// }

// export default function Page({ params }: PageProps) {
//   return (
//     <>
//       <Header>Company ({params.id})</Header>
//     </>
//   );
// }
