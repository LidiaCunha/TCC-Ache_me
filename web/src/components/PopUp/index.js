import React from "react";

import { Container } from "./styles";

function PopUp({ children, className }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default PopUp;
