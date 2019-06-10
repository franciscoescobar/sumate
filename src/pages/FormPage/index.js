import React, { useState } from "react";
import { checkboxes } from "../../data";
import MultipleChoiceSlide from "../../components/MultipleChoiceSlide";
const FormPage = ({ match }) => {
  const [checkboxFive, setCheckboxFive] = useState(checkboxes.checkboxFive);
  const [checkboxSix, setCheckboxSix] = useState(checkboxes.checkboxSix);
  const [checkboxSeven, setCheckboxSeven] = useState(checkboxes.checkboxSeven);
  const page = Number(match.params.id);
  const handleActiveChange = name => {
    if (page === 5) {
      const clikedCheckboxIndex = checkboxFive.findIndex(checkbox => {
        return checkbox.span === name;
      });
      const clickedCheckbox = checkboxFive[clikedCheckboxIndex];
      clickedCheckbox.active = !clickedCheckbox.active;
      let firstHalfCheckboxs = checkboxFive.slice(0, clikedCheckboxIndex);
      firstHalfCheckboxs.concat(clickedCheckbox);
      const secondHaldCheckboxs = checkboxFive.slice(
        clikedCheckboxIndex,
        checkboxFive.length
      );
      const newCheckboxs = [...firstHalfCheckboxs, ...secondHaldCheckboxs];
      setCheckboxFive(newCheckboxs);
    } else if (page === 6) {
      const clikedCheckboxIndex = checkboxSix.findIndex(checkbox => {
        return checkbox.span === name;
      });
      const clickedCheckbox = checkboxSix[clikedCheckboxIndex];
      clickedCheckbox.active = !clickedCheckbox.active;
      let firstHalfCheckboxs = checkboxSix.slice(0, clikedCheckboxIndex);
      firstHalfCheckboxs.concat(clickedCheckbox);
      const secondHaldCheckboxs = checkboxSix.slice(
        clikedCheckboxIndex,
        checkboxSix.length
      );
      const newCheckboxs = [...firstHalfCheckboxs, ...secondHaldCheckboxs];
      setCheckboxSix(newCheckboxs);
    } else if (page === 7) {
      const clikedCheckboxIndex = checkboxSeven.findIndex(checkbox => {
        return checkbox.span === name;
      });
      const clickedCheckbox = checkboxSeven[clikedCheckboxIndex];
      clickedCheckbox.active = !clickedCheckbox.active;
      let firstHalfCheckboxs = checkboxSeven.slice(0, clikedCheckboxIndex);
      firstHalfCheckboxs.concat(clickedCheckbox);
      const secondHaldCheckboxs = checkboxSeven.slice(
        clikedCheckboxIndex,
        checkboxSeven.length
      );
      const newCheckboxs = [...firstHalfCheckboxs, ...secondHaldCheckboxs];
      setCheckboxSeven(newCheckboxs);
    }
  };
  const handleClearCheckboxes = () => {
    checkboxes.checkboxFive.map(checkbox => (checkbox.active = false));
    checkboxes.checkboxSix.map(checkbox => (checkbox.active = false));
    checkboxes.checkboxSeven.map(checkbox => (checkbox.active = false));
    setCheckboxFive(checkboxes.checkboxFive);
    setCheckboxSix(checkboxes.checkboxSix);
    setCheckboxSeven(checkboxes.checkboxSeven);
  };
  return page === 5 ? (
    <MultipleChoiceSlide
      number={page}
      checkboxs={checkboxes.checkboxFive}
      title={checkboxes.titleFive}
      onActiveChange={handleActiveChange}
    />
  ) : page === 6 ? (
    <MultipleChoiceSlide
      number={page}
      checkboxs={checkboxes.checkboxSix}
      title={checkboxes.titleSix}
      onActiveChange={handleActiveChange}
    />
  ) : page === 7 ? (
    <MultipleChoiceSlide
      number={page}
      checkboxs={checkboxes.checkboxSeven}
      title={checkboxes.titleSeven}
      onActiveChange={handleActiveChange}
    />
  ) : (
    <MultipleChoiceSlide
      number={page}
      title={checkboxes.titleEight}
      onClearCheckboxes={handleClearCheckboxes}
    />
  );
};

export default FormPage;
