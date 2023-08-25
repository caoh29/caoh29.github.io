import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { navHighlighter } from '../../utils/helpers';
import {
  ABOUT_BOX_PROPS,
  TIMELINE_BOX_PROPS,
  EXPERTISE_BOX_PROPS,
  PORTFOLIO_BOX_PROPS,
  EXPERTISE_PROPS,
  ADDRESS_BOX_PROPS,
  FEEDBACK_BOX_PROPS,
  FEEDBACK_PROPS,
  SKILLS_BOX_PROPS,
} from '../../utils/constants';

import { ButtonProps } from '../../types';

import { RootState } from '../../store/store';
import { togglePanel } from '../../store/slices/panelSlice';
import {
  fetchTimelineData,
  toggleEducationForm,
} from '../../store/slices/educationSlice';
import {
  fetchSkillsData,
  toggleSkillsForm,
} from '../../store/slices/skillsSlice';

import Button from '../../components/Button';
import Panel from '../../components/Panel';
import Box from '../../components/Box';
import TimeLine from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Feedback from '../../components/Feedback';
import Skills from '../../components/Skills';
import SkillsForm from '../../components/Skills/SkillsForm';

type AsyncDispatch = ThunkDispatch<RootState, {}, AnyAction>;

const MENU_BUTTON_PROPS: ButtonProps = {
  icon: <FontAwesomeIcon icon={faBars} />,
};

export default function AdminPage() {
  const dispatch = useDispatch<AsyncDispatch>();
  const state = useSelector((state: RootState) => state);
  const isOpen = state.panelReducer.isOpen;
  const { content: timelineData, isFormOpen: isTimelineFormOpen } =
    state.educationReducer;
  const { data: skillsData, isFormOpen: isSkillsFormOpen } =
    state.skillsReducer;

  useEffect(() => {
    navHighlighter();
    window.addEventListener('scroll', navHighlighter);
    return () => {
      window.removeEventListener('scroll', navHighlighter);
    };
  }, [isOpen]);

  useEffect(() => {
    dispatch(fetchTimelineData('http://localhost:4000/api/educations'));
    dispatch(fetchSkillsData('http://localhost:4000/api/skills'));
  }, [dispatch]);

  return (
    <main className="admin">
      {isOpen && <Panel />}
      <Button
        icon={MENU_BUTTON_PROPS.icon}
        onClick={() => dispatch(togglePanel())}
      />
      <div className="content">
        <Box
          title={ABOUT_BOX_PROPS.title}
          content={ABOUT_BOX_PROPS.content}
          id={ABOUT_BOX_PROPS.id}
        />
        <Box
          title={TIMELINE_BOX_PROPS.title}
          id={TIMELINE_BOX_PROPS.id}
          button={
            <Button
              text="Open edit"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => dispatch(toggleEducationForm())}
            />
          }
        >
          <TimeLine data={timelineData} />
        </Box>
        <Box title={EXPERTISE_BOX_PROPS.title} id={EXPERTISE_BOX_PROPS.id}>
          <Expertise data={EXPERTISE_PROPS.data} />
        </Box>
        <Box
          title={SKILLS_BOX_PROPS.title}
          id={SKILLS_BOX_PROPS.id}
          button={
            <Button
              text="Open edit"
              icon={<FontAwesomeIcon icon={faPenToSquare} />}
              onClick={() => dispatch(toggleSkillsForm())}
            />
          }
        >
          {isSkillsFormOpen && <SkillsForm />}
          <Skills data={skillsData} />
        </Box>
        <Box title={PORTFOLIO_BOX_PROPS.title} id={PORTFOLIO_BOX_PROPS.id}>
          <Portfolio />
        </Box>
        <Box title={ADDRESS_BOX_PROPS.title} id={ADDRESS_BOX_PROPS.id}>
          <Address />
        </Box>
        <Box title={FEEDBACK_BOX_PROPS.title} id={FEEDBACK_BOX_PROPS.id}>
          <Feedback data={FEEDBACK_PROPS.data} />
        </Box>
      </div>
    </main>
  );
}
