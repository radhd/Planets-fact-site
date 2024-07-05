import styled from "styled-components";

export default function ButtonOverview({ children, onClick, isActive }) {
  return (
    <>
      <OverviewButton onClick={onClick} isActive={isActive}>
        {children}
      </OverviewButton>
    </>
  );
}

const OverviewButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 50%;
  padding: 20px 17px;
  ${({ isActive }) =>
    isActive ? `border-bottom: 2px solid red;` : `border-bottom: none`};
`;
