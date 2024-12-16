import React from "react";
import PageStructure from "../components/PageStructure";
import Input from "../components/Input";

export default function App() {
  return (
    <PageStructure>
      <div className="min-h-[calc(100vh-64px)]">
        <Input />
        <Input />
      </div>
    </PageStructure>
  );
}
