import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { postSkillsData } from '../../../store/slices/skillsSlice';
import { RootState } from '../../../store/store';

import { SkillsProps } from '../../../types';

import Button from '../../../components/Button';

type AsyncDispatch = ThunkDispatch<RootState, {}, AnyAction>;

export default function SkillsForm() {
  const dispatch = useDispatch<AsyncDispatch>();
  const isLoading = useSelector(
    (state: RootState) => state.skillsReducer.isLoading
  );

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
    dispatch(
      postSkillsData({
        apiURL: 'http://localhost:4000/api/skills',
        data: values,
      })
    );
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
          <Button text="Add skill" type="submit" disabled={isLoading} />
        </Form>
      </Formik>
    </div>
  );
}
