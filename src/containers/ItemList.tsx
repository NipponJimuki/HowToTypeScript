// containers/ItemList.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ItemList } from '../components';
import { changePowerState } from '../actions';
import { Store } from '../reducers';

const mapStateToProps = ({ powerState }: Store) => ({ power: powerState });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePowerStateAction() {
        dispatch(changePowerState());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
