import React from "react";
import Greet from "../../components/Greet";
import Counter from "../../components/Counter";
export default function Home() {
  return (
    <div>
      <Greet firstName="Daniel" />
      <Counter />
    </div>
  );
}
