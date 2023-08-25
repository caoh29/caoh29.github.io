import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { postTimelineData } from '../../../store/slices/educationSlice';
import { RootState } from '../../../store/store';

import { TimeLineProps } from '../../../types';

import Button from '../../../components/Button';

type AsyncDispatch = ThunkDispatch<RootState, {}, AnyAction>;

export default function TimelineForm() {
  const dispatch = useDispatch<AsyncDispatch>();
  const isLoading = useSelector(
    (state: RootState) => state.educationReducer.isLoading
  );

  const initialValues: TimeLineProps = {
    date: 1920,
    title: '',
    text: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Must be 3 characters or more')
      .max(100, 'Must be 100 characters or less'),
    date: Yup.number()
      .required('Date is required')
      .min(1920, 'Must be 1920 or above')
      .max(2030, 'Must be 2030 or below'),
    text: Yup.string(),
  });

  const onSubmit = (
    values: TimeLineProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    dispatch(
      postTimelineData({
        apiURL: 'http://localhost:4000/api/educations',
        data: values,
      })
    );
    resetForm();
  };

  return (
    <div className="education-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="form-element">
            <div className="form-line">
              <label htmlFor="title">Education title:</label>
              <Field
                name="title"
                type="text"
                placeholder="Enter education title"
              />
            </div>
            <ErrorMessage name="title" />
          </div>

          <div className="form-element">
            <div className="form-line">
              <label htmlFor="date">Education date:</label>
              <Field
                name="date"
                type="number"
                step="1"
                min="1920"
                max="2030"
                placeholder="Enter education date*"
              />
            </div>
            <ErrorMessage name="date" />
          </div>

          <div className="form-element">
            <div className="form-line">
              <label htmlFor="text">Education text:</label>
              <Field
                as="textarea"
                name="text"
                placeholder="Enter education text*"
              />
            </div>
            <ErrorMessage name="text" />
          </div>
          <Button text="Add record" type="submit" disabled={isLoading} />
        </Form>
      </Formik>
    </div>
  );
}
