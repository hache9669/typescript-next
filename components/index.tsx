import React from 'react';
import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
    className?: string
}

const Component: NextComponentType<NextPageContext, {}, Props> = props => (
    <div className={props.className}>hello next via component</div>
)

const styledComponent = styled(Component)`
    color: #f00;
`

export default styledComponent;