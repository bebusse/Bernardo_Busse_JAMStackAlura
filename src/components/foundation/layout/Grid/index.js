import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import { breakpoints } from '../../../../theme/index';
import propToStyle from '../../../../theme/utils/propToStyle';

const Container = styled.div`

    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;
  
    ${({ theme }) => breakpointsMedia({
    xs: css`
          max-width: initial;
      `,
    sm: css`
          max-width: ${theme.breakpoints.sm}px; 
      `,
    md: css`
          max-width: ${theme.breakpoints.md}px;
          padding-right: 16px;
          padding-left: 16px; 
      `,
    lg: css`
          max-width: ${theme.breakpoints.lg}px;
      `,
    xl: css`
          max-width: ${theme.breakpoints.xl}px;
      `,
  })}
  ${propToStyle('marginTop')}
  ${propToStyle('flex')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('justifyContent')}
  ${propToStyle('maxHeight')}
  ${propToStyle('bottom')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('textAlign')}
  ${propToStyle('padding')}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
  ${propToStyle('flex')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('justifyContent')}
  ${propToStyle('maxHeight')}
  ${propToStyle('bottom')}
`;

function colValuesCss(value) {
  return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
    `;
}

function colOffsetCss(value) {
  return css`
        margin-left: ${(100 * value) / 12}%;
    `;
}

function colBreakpoints(value, cssFunction) {
  const breakpointsNames = Object.keys(breakpoints);
  const colValuesBreakpointsObj = {};
  breakpointsNames.map((breakpointName) => {
    if (value[breakpointName] != null) {
      colValuesBreakpointsObj[breakpointName] = cssFunction(value[breakpointName]);
    }
    return true;
  });
  return colValuesBreakpointsObj;
}

const Col = styled.div`
    padding-right: 16px;
    padding-left: 16px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    ${({ value }) => {
    if (typeof value === 'number') {
      return colValuesCss(value);
    }
    return breakpointsMedia(colBreakpoints(value, colValuesCss));
  }}
    ${({ offset }) => {
    if (typeof offset === 'number') {
      return colOffsetCss(offset);
    }
    return breakpointsMedia(colBreakpoints(offset, colOffsetCss));
  }}
    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexDirection')}
    ${propToStyle('marginTop')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginRight')}
    ${propToStyle('flex')}
    ${propToStyle('paddingRight')}
    ${propToStyle('maxHeight')}
    ${propToStyle('bottom')}
    ${propToStyle('alignItems')}
    ${propToStyle('objectFit')}
`;

Col.defaultProps = {
  value: 12,
  offset: 0,
};

const Grid = {
  Container,
  Row,
  Col,
};

export { Grid as default };
