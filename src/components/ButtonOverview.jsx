import styled from "styled-components";

export default function ButtonOverview({ children, onClick, isActive, name }) {
  return (
    <>
      <OverviewButton onClick={onClick} isActive={isActive} name={name}>
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
  ${(props) =>
    props.isActive
      ? `border-bottom: 2px solid ${props.theme[props.name]}; opacity: 100%;`
      : `border-bottom: none`};
`;
