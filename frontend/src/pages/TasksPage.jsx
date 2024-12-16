import React from "react";
import PageStructure from "../components/PageStructure";
import Task from "../components/Task";

export default function App() {
  return (
    <PageStructure>
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="flex h-full max-w-[64%] flex-wrap items-center justify-center">
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
          <Task>fdsdfsiudfhsdifuhifughsdifughsdikfguhsdkihgusdkufghusdfg</Task>
        </div>
      </main>
    </PageStructure>
  );
}
