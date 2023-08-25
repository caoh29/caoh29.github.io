import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import { SkillsProps } from '../../../types';

export default function SkillsForm() {
  const initialValues: SkillsProps = {
    name: '',
    range: 10,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('name is required')
      .min(3, 'Must be 3 characters or more')
      .max(50, 'Must be 50 characters or less'),
    range: Yup.number()
      .required('range is required')
      .min(10, 'Must be 10 points or more')
      .max(100, 'Must be 100 points or less'),
  });

  const onSubmit = (
    values: SkillsProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="skill-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="form-element">
            <div className="form-line">
              <label htmlFor="name">Skill name:</label>
              <Field name="name" type="text" placeholder="Enter skill name" />
            </div>
            <ErrorMessage name="name" />
          </div>

          <div className="form-element">
            <div className="form-line">
              <label htmlFor="range">Skill range:</label>
              <Field
                name="range"
                type="number"
                step="10"
                min="10"
                max="100"
                placeholder="Enter skill range*"
              />
            </div>
            <ErrorMessage name="range" />
          </div>
          <Button text="Add skill" type="submit" />
        </Form>
      </Formik>
    </div>
  );
}
