import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    water: yup.boolean(),
    species: yup
        .string()
        .trim()
        .required('Must Input Name of Species')
        .min(1, 'Species must be at least 1 Character Long.' )


})

export default formSchema;