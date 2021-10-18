import styled, { css } from 'styled-components';


export const ColorBox = styled.View`
    flex: 1;
    maxHeight: 70px;
    maxWidth: 330px;

  ${(props) =>
        props.red &&
    css`
     background-color: rgb(255, 0, 0);
    `};
    ${(props) =>
        props.green &&
    css`
     background-color: rgb(0, 255, 0);
    `};
    ${(props) =>
        props.blue &&
    css`
     background-color: rgb(0, 0, 255);
    `};
`;
