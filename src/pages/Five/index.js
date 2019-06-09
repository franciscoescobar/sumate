import React from "react";
import MultipleChoiceSlide from "../../components/MultipleChoiceSlide";
import { titleFive, checkboxFive } from "../../data/index";
const Five = () => (
  <MultipleChoiceSlide number={5} checkboxs={checkboxFive} title={titleFive} />
);

export default Five;
