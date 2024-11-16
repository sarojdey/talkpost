import { Button } from "@/components/ui/button";

function Welcome() {
  return (
    <div className="flex h-screen w-full justify-center ">
      <div className="gap-5 flex flex-col justify-center h-full items-center">
        <h1 className="text-center text-6xl font-semibold ">
          Where <span className="text-primary font-bold">Conversations</span>{" "}
          Begin <br />
          and Connections Grow.
        </h1>
        <h3 className="text-center text-xl">
          Share, chat, and connect with people who get you.
        </h3>
        <Button className="mt-10 min-w-52 ">Get Started</Button>
      </div>
    </div>
  );
}

export default Welcome;
