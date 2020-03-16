// containers/ItemList.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ItemList } from '../components';
import { changePowerState } from '../actions';
import { Store } from '../reducers';

const mapStateToProps = ({ itemState }: Store) => ({ items: itemState });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePowerStateAction(index: number) {
        return () => dispatch(changePowerState(index));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
