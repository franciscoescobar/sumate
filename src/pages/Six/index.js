import React, { useState } from "react";
import MultipleChoiceSlide from "../../components/MultipleChoiceSlide";
import { titleSix, checkboxSix } from "../../data/index";
const Six = () => {
  const [checkboxs, setCheckboxs] = useState(checkboxSix);
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
      number={6}
      checkboxs={checkboxs}
      title={titleSix}
      onActiveChange={handleActiveChange}
    />
  );
};

export default Six;
