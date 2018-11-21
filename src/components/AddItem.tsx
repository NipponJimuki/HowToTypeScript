// components/AddItem.tsx
import React from 'react';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';

type Props = {
    addItemAction: (value: string) => void;
};
type FormikProps = {
    item: string;
};

class AddItem extends React.Component<InjectedFormikProps<Props, FormikProps>> {
    render() {
        const { handleSubmit, handleChange, handleBlur, errors, values } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="item"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.item}
                />
                {errors.item && <span>{errors.item}</span>}
                <button type="submit">追加</button>
            </form>
        );
    }
}
export default withFormik<Props, FormikProps>({
    mapPropsToValues: () => ({
        item: '',
    }),
    validationSchema: () =>
        Yup.object().shape({
            item: Yup.string().required('入力必須です'),
        }),
    handleSubmit: (values, { props, resetForm }) => {
        const { addItemAction } = props;
        addItemAction(values.item);
        resetForm();
    },
    displayName: 'itemForm',
})(AddItem);
