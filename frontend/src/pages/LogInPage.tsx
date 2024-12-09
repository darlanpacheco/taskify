import PageStructure from "../components/PageStructure";
import Input from "../components/Input";

export default function App() {
  return (
    <PageStructure>
      <div className="min-h-screen">
        <Input />
        <Input />
      </div>
    </PageStructure>
  );
}
