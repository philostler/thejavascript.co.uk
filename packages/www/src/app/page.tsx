"use client";
import { Header, Links } from "@/components";

const page = () => (
  <main className="flex flex-col gap-y-8 items-center min-h-screen m-24">
    <div className="flex flex-col gap-y-3 w-64">
      <Links />
    </div>
    <Header />
  </main>
);

export default page;
