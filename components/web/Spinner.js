import React from "react";
import * as $ from "@/styles/web/components/Spinner.styled";

const Spinner = ({ isSubmitting }) => {
  return (
    <$.SpinnerWrapper $isSubmitting={isSubmitting}>
      <$.Spinner />
    </$.SpinnerWrapper>
  );
};

export default Spinner;
