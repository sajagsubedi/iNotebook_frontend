import styled from "styled-components";

export const HomeSection = styled.section`
  width: 80vw;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    width: 95vw;
  }
`;
export const AddNoteBlock = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;
export const NotesBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4vw;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    justify-content: space-around;
  }
`;
export const NoteItem = styled.div`
  display: flex;
  padding: 0px 0px 10px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.focus};
  width: 30%;
  border-radius: 10px;
  box-shadow: 2px 10px 10px ${({ theme }) => theme.colors.blackShade};
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    width: 80vw;
  }
`;

export const NoteHead = styled.div`
  display: flex;
`;

export const TagBox = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.colors.themecolor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-shadow: 0px 6px 10px ${({ theme }) => theme.colors.blackShade};
  color: white;
`;
export const NoteBody = styled.div`
  padding: 5px 8px;
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
  }
  p {
    color: #424242;
  }
`;

export const ManipulateBox = styled.div`
  width: 50%;
  font-size: 1.4rem;
  display: flex;
  justify-content: flex-end;
  padding: 2px;
  svg:nth-child(2) {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const ManipulateNoteSection = styled.section`
  width: 50vw;
  top: 10vw;
  left: 50%;
  padding: 5px 50px 30px;
  transform: translate(-50%, 0);
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.focus};
  box-shadow: 2px 10px 10px ${({ theme }) => theme.colors.blackShade};
  position: fixed;
  .Close {
    display: flex;
    justify-content: flex-end;
  }
  .CloseBtn {
    border: none;
    font-weight: bold;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondaryTheme};
  }

  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    padding: 5px;
    width: 90vw;
  }
`;
export const AlertSection = styled.section`
  color: white;
  height: 45px;
  div {
    width: 100vw;
    background-color: ${({ color }) => color};
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    position: relative;
  }
`;
export const FormSection = styled.section`
  width: 60vw;
  margin: 20px auto;
  padding: 40px;
  background: ${({ theme }) => theme.colors.focus};
  box-shadow: 2px 10px 10px ${({ theme }) => theme.colors.blackShade};
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
    padding: 20px;
    width: 85vw;
  }
  form {
    gap: 8px !important;
    margin: 20px auto 5px !important;
  }
  form input {
    line-height: 2.5rem !important;
  }
`;
