import PageStructure from "./components/PageStructure";
import GreenButton from "./components/GreenButton";

interface FeatureProps {
  h1: string;
  children: string;
}

const Feature: React.FunctionComponent<FeatureProps> = ({ h1, children }) => {
  return (
    <div className="mx-[32px] my-[64px] h-[256px] w-[512px] rounded-[8px] bg-primary-dark p-[32px]">
      <h1 className="text-[1.6rem]">{h1}</h1>
      <h2 className="py-[16px]">{children}</h2>
    </div>
  );
};

export default function App() {
  return (
    <>
      <PageStructure>
        <div className="flex h-[512px] bg-primary dark:bg-primary-dark">
          <div className="flex w-[64%] flex-col items-center justify-center text-center">
            <h1 className="pb-[16px] text-center text-[4rem] leading-[64px]">
              Darlan's Taskify software
            </h1>
            <h2 className="pb-[32px] text-center">
              Building a smart, modern app to simplify your tasks.
            </h2>
            <GreenButton customClass="w-[128px]" onClick={() => {}}>
              Get Started
            </GreenButton>
          </div>
          <div className="flex w-[36%] items-center justify-center">
            <img
              src="assets/images/task.png"
              className="aspect-square h-full object-cover"
            />
          </div>
        </div>
        <h1 className="pt-[64px] text-center text-[2rem] text-primary-dark">
          Features
        </h1>
        <div className="flex justify-center">
          <Feature h1="Create timeliness">hello-world!</Feature>
          <Feature h1="Create timeliness">hello-world!</Feature>
          <Feature h1="Create timeliness">hello-world!</Feature>
        </div>
        <h1 className="pb-[64px] text-center text-[2rem] text-primary-dark">
          Features
        </h1>
      </PageStructure>
    </>
  );
}
