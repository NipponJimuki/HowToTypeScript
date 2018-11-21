// components/ItemList.tsx
import React from 'react';
import styled from 'styled-components';
import Switch from './Switch';
import DisplayState from './DisplayState';
import { ItemProps } from '../reducers/addItem';

type Props = {
    items: ItemProps[];
    changePowerStateAction: (index: number) => () => void;
};

class ItemList extends React.Component<Props> {
    render() {
        const { items, changePowerStateAction } = this.props;
        return (
            <div>
                {items.map(({ id, name, power }, index) => (
                    <List key={id}>
                        <Item>{name}</Item>
                        <DisplayState power={power} />
                        <Switch onClick={changePowerStateAction(index)} />
                    </List>
                ))}
            </div>
        );
    }
}

const List = styled.div`
    width: 100%;
    display: flex;
    color: rgb(100, 100, 100);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid rgb(100, 100, 100);
`;
const Item = styled.div`
    font-size: 3rem;
    width: 30%;
`;

export default ItemList;
