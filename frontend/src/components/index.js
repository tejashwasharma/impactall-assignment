import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../utils/colors';

export const Div = styled.div`
    ${props => props.display && `display: ${props.display};`}
    ${props => props.padding && `padding: ${props.padding};`}
    ${props => props.background && `background: ${props.background};`}
    ${props => props.color && `color: ${props.color};`}
    ${props => props.flexFlow && `flex-flow: ${props.flexFlow};`}
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`}
    ${props => props.alignItems && `align-items: ${props.alignItems};`}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
    ${props => props.width && `width: ${props.width};`}
    ${props => props.height && `height: ${props.height};`}
    ${props => props.boxShadow && `box-shadow: 0px 0px 5px 0px ${props.boxShadow};`}
    
`;

export const FlexBox = styled(Div)`
    display: flex;
`;

// Screen Wrappers
export const Wrapper = styled(FlexBox)`
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    position: fixed;
    z-index: -1;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
    }
`;

export const Button = styled.button`
    min-width: 150px;
    height: 40px;
    padding: 5px 20px;
    margin: 5px 2px;
    border-radius: 5px;
    background: ${colors.theme};
    color: ${colors.themeContrast};
    border: 0;
    cursor: pointer;
`;

// Anchor
export const NavLink = styled(Link)`
    min-width: 100px;
    padding: 6px 10px;
    margin: 6px 2px;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    background: ${colors.secondaryTheme};
    color: ${colors.themeContrast};
`;

export const ProgressWrapper = styled(Div)`
    width: 100%;
    border-radius: 10px;
    background: ${colors.darkerTheme};
`;

export const Progress = styled(Div)`
    ${props => props.percentage && `width: ${props.percentage}%;`}
    border-radius: 10px;
    background: ${colors.contrastGrad};
    animation: ${props => keyframes`
        0% { width: 0px; }
        100% { width: ${props.percentage}%; }
    `};
    ${props => props.percentage && `animation-duration: ${Math.ceil(props.percentage*3/100)}s;`}
    animation-fill-mode: forwards;
`;

export const Span = styled.span`
    padding: 6px 0px;
    ${props => props.isBadge && `
        padding: 6px 10px;
        border: 1px solid ${colors.shadow};
        color: ${colors.shadow};
        border-radius: 10px;
    `}
    ${props => props.label && `
        font-size: 14px;
        color: ${colors.themeSecondaryContrast};
    `}
    ${props => props.highlight && `
        color: ${colors.highlight};
    `}
`;



// Card
export const Card = styled(Div)`
    width: 100%;
    max-width: 400px;
    min-width: 250px;
    border-radius: 25px;
    margin: 15px 20px 35px;
    box-shadow: 0px 35px 5px -5px ${colors.secondaryShadow};
    cursor: pointer;
`;

export const SecondaryCard = styled(Div)`
    border-radius: 25px;
    padding: 15px 20px;
    margin: 15px 20px;
    box-shadow: 0px 2px 5px 0px ${colors.black};
    cursor: pointer;
`;

export const CardHeader = styled(FlexBox)`
    border: 0;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardBody = styled(Div)`
    margin: 10px;
`;

export const CardFooter = styled(Div)`
    margin: 10px;
    text-align: end;
`;

export const H1 = styled.h1`
    margin: 2px;
`;

export const Modal = styled(Div)`
    position: fixed;
    z-index: 2;
`;