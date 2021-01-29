import styled, { DefaultTheme } from 'styled-components'

type Props = {
    theme: DefaultTheme
    selected: boolean
}

export const Option = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    padding: 0.5rem;
    margin: 0.8rem 0;

    border-radius: 0.4rem;

    color: ${props => props.theme.colors.contrastText};
    background: ${(props: Props) => props.selected ? props.theme.colors.secondary : props.theme.colors.primary};
    border: ${(props: Props) => props.selected ? `1px solid ${props.theme.colors.contrastText}` : `none`};

    input {
        width: 0 !important;
        margin-right: 1rem;
    }

    /* input:checked < {
        margin-left: 1rem;
    } */

`
