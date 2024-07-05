import styled from "styled-components";

export default function ButtonOverview({ children, onClick, isActive, name }) {
  return (
    <>
      <OverviewButton onClick={onClick} isActive={isActive} name={name}>
        {children}
        {isActive && <OverviewLine name={name} />}
      </OverviewButton>
    </>
  );
}

const OverviewButton = styled.button`
  margin: 0;
  border: none;
  outline: none;
  position: relative;
  background-color: transparent;
  opacity: 50%;
  ${({ isActive }) => isActive && `opacity:100%`}
`;

const OverviewLine = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: -17px;
  background-color: ${({ theme, name }) => theme[name]};
`;
