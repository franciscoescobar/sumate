import React, { useState } from "react";
import MultipleChoiceSlide from "../../components/MultipleChoiceSlide";
import { titleSeven, checkboxSeven } from "../../data/index";
const Seven = () => {
  const [checkboxs, setCheckboxs] = useState(checkboxSeven);
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
      number={7}
      checkboxs={checkboxs}
      title={titleSeven}
      onActiveChange={handleActiveChange}
    />
  );
};

export default Seven;
