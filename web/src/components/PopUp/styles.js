import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow-y: auto;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #333d;

  animation: fadeIn 0.4s;
`;
