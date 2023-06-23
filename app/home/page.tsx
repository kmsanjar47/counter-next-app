"use client";

import React from "react";

export default function Home() {
  const [value, incrementCounter] = React.useState(0);

  return (
    <>
      <section>
        <h1 className="bg-slate-800 text-white p-8 m-4 font-bold text-center text-xl ">
          Counter App
        </h1>
      </section>
      <section className="h-full flex-col justify-center align-middle text-center ">
        <section>
          <h1 className="text-black text-6xl font-bold ">{value}</h1>
        </section>
        <button
          className="rounded-md p-4 bg-slate-500 text-white round hover:bg-slate-300"
          onClick={() => incrementCounter(value + 1)}
        >
          Increment
        </button>
      </section>
    </>
  );
}
