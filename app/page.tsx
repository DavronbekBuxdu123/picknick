import React from "react";
import Main from "./component/Main";
import Categories from "./component/Categories";
import Question from "./component/Question";
import { Carusel } from "./component/Carusel";

export default async function Page() {
  return (
    <div className="container max-w-[1540px] mx-auto">
      <Main />
      <Categories />
      <Question />
      <Carusel />
    </div>
  );
}
