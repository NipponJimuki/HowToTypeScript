// containers/AddItem.tsx
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddItem } from '../components';
import { addItem } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addItemAction(value: string) {
        dispatch(addItem(value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddItem);
