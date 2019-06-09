import React, { useState } from "react";
import MultipleChoiceSlide from "../../components/MultipleChoiceSlide";
import { titleFive, checkboxFive } from "../../data/index";
const Five = () => {
  const [checkboxs, setCheckboxs] = useState(checkboxFive);
  const handleActiveChange = name => {
    const clikedCheckboxIndex = checkboxs.findIndex(checkbox => {
      return checkbox.span === name;
    });
    const clickedCheckbox = checkboxs[clikedCheckboxIndex];
    clickedCheckbox.active = !clickedCheckbox.active;
    let firstHalfCheckboxs = checkboxs.slice(0, clikedCheckboxIndex);
    firstHalfCheckboxs.concat(clickedCheckbox);
    const secondHaldCheckboxs = checkboxs.slice(
      clikedCheckboxIndex,
      checkboxs.length
    );
    const newCheckboxs = [...firstHalfCheckboxs, ...secondHaldCheckboxs];
    setCheckboxs(newCheckboxs);
  };
  return (
    <MultipleChoiceSlide
      number={5}
      checkboxs={checkboxs}
      title={titleFive}
      onActiveChange={handleActiveChange}
    />
  );
};

export default Five;
