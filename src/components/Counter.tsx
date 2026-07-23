"use client";

import { useCounter } from "@/contexts/CounterContext";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-sm text-slate-500">Count</div>
      <div className="min-w-[2.5rem] rounded-full bg-slate-100 px-3 py-2 text-center text-lg font-semibold text-slate-900">
        {count}
      </div>
      <button
        type="button"
        onClick={decrement}
        className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
      >
        -
      </button>
      <button
        type="button"
        onClick={increment}
        className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
      >
        +
      </button>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
      >
        Reset
      </button>
    </div>
  );
}
