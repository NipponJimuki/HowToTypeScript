// components/DisplayState.tsx
import React from 'react';

type Props = {
    power: boolean;
};

const DisplayState: React.FC<Props> = ({ power = false }) => <div>{power ? 'ON' : 'OFF'}</div>;

export default DisplayState;
