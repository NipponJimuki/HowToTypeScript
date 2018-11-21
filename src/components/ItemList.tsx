// components/ItemList.tsx
import React from 'react';
import Switch from './Switch';
import DisplayState from './DisplayState';

type Props = {
    power: boolean;
    changePowerStateAction: () => void;
};

class ItemList extends React.Component<Props> {
    static defaultProps: Pick<Props, 'power' | 'changePowerStateAction'> = {
        power: false,
        changePowerStateAction() {},
    };
    render() {
        const { power, changePowerStateAction } = this.props;
        return (
            <div>
                <Switch onClick={changePowerStateAction} />
                <DisplayState power={power} />
            </div>
        );
    }
}

export default ItemList;
