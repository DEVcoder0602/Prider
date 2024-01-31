import InvoiceCard from "@/components/Invoice/InvoiceCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-center">
      <div className="flex flex-row">
        <h1 className="flex-[10_10_0%] font-bold text-2xl">All Invoices</h1>
        <button className="flex-1">
          <Link href="/new-invoice">New Invoice</Link>
        </button>
      </div>
      <div>
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
        <InvoiceCard />
      </div>
    </div>
  );
};

export default page;
