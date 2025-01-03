import Challenges from "@/sections/Challenges";
import { Feature1 } from "@/sections/Feature1";
import { Feature2 } from "@/sections/Feature2";
import Header from "@/sections/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Challenges />
      <Feature1 />
      <Feature2 />
    </div>
  );
}
