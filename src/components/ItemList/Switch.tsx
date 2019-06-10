// components/Schitw.tsx;
import React from 'react';

type Props = {
    onClick: () => void;
};

const Switch: React.FC<Props> = ({ onClick }) => <button onClick={onClick}>スイッチ</button>;

export default Switch;
