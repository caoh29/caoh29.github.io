import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

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
import { fetchTimelineData } from '../../store/slices/educationSlice';
import { fetchSkillsData } from '../../store/slices/skillsSlice';
import { fetchAboutData } from '../../store/slices/aboutSlice';

import Button from '../../components/Button';
import Panel from '../../components/Panel';
import Box from '../../components/Box';
import TimeLine from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Feedback from '../../components/Feedback';
import Skills from '../../components/Skills';

type AsyncDispatch = ThunkDispatch<RootState, {}, AnyAction>;

const MENU_BUTTON_PROPS: ButtonProps = {
  icon: <FontAwesomeIcon icon={faBars} />,
};

const LOGIN_BUTTON_PROPS: ButtonProps = {
  icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
};

export default function InnerPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AsyncDispatch>();
  const state = useSelector((state: RootState) => state);
  const isOpen = state.panelReducer.isOpen;
  const timelineData = state.educationReducer.content;
  const skillsData = state.skillsReducer.data;
  const aboutData = state.aboutReducer.text[0].content;

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
    dispatch(fetchAboutData('http://localhost:4000/api/about'));
  }, [dispatch]);

  return (
    <main className="inner">
      {isOpen && <Panel />}
      <Button
        icon={MENU_BUTTON_PROPS.icon}
        onClick={() => dispatch(togglePanel())}
      />
      <div className="content">
        <Box
          title={ABOUT_BOX_PROPS.title}
          content={aboutData}
          id={ABOUT_BOX_PROPS.id}
        />
        <Box title={TIMELINE_BOX_PROPS.title} id={TIMELINE_BOX_PROPS.id}>
          <TimeLine data={timelineData} />
        </Box>
        <Box title={EXPERTISE_BOX_PROPS.title} id={EXPERTISE_BOX_PROPS.id}>
          <Expertise data={EXPERTISE_PROPS.data} />
        </Box>
        <Box title={SKILLS_BOX_PROPS.title} id={SKILLS_BOX_PROPS.id}>
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
        <div className="login-container">
          <Button
            icon={LOGIN_BUTTON_PROPS.icon}
            onClick={() => navigate('/login')}
          />
        </div>
      </div>
    </main>
  );
}
