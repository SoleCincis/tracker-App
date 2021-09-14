import * as React from 'react';
import styled, { css } from 'styled-components';


export const ColorBox = styled.View`
    flex: 1;

    maxWidth: 350px;

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
    props.blu &&
    css`
     background-color: rgb(0, 0, 255);
    `};
    ${(props) =>
    props.generated &&
    css`
     background-color: rgb(0, 0, 0);
    `};
`;
