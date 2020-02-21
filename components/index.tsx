import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { CountButton } from './CountButton';
import Timer from './Timer';

type Props = {
    className?: string
}

const Component: NextComponentType<NextPageContext, {}, Props> = props => (
    <>
        <div className={props.className}>hello next via component</div>
        <CountButton initial={100} />
        <Timer initial={new Date()} />
    </>
)

const styledComponent = styled(Component)`
    color: #f00;
`

export default styledComponent;