import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { navHighlighter } from '../../utils/helpers';
import {
  ABOUT_BOX_PROPS,
  TIMELINE_BOX_PROPS,
  EXPERTISE_BOX_PROPS,
  PORTFOLIO_BOX_PROPS,
  TIMELINE_PROPS,
  EXPERTISE_PROPS,
  ADDRESS_BOX_PROPS,
  SKILLS_BOX_PROPS,
  SKILLS_PROPS,
  // FEEDBACK_BOX_PROPS,
  // FEEDBACK_PROPS,
} from '../../utils/constants';

import { ButtonProps } from '../../types';

import Button from '../../components/Button';
import Panel from '../../components/Panel';
import Box from '../../components/Box';
import TimeLine from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Skills from '../../components/Skills';
// import Feedback from '../../components/Feedback';

const BUTTON_PROPS: ButtonProps = {
  icon: <FontAwesomeIcon icon={faBars} />,
};

export default function InnerPage() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    navHighlighter();
    window.addEventListener('scroll', navHighlighter);
    return () => {
      window.removeEventListener('scroll', navHighlighter);
    };
  }, [isOpen]);

  return (
    <main className="inner">
      {isOpen && <Panel />}
      <Button icon={BUTTON_PROPS.icon} onClick={() => setIsOpen(!isOpen)} />
      <div className="content">
        <Box
          title={ABOUT_BOX_PROPS.title}
          content={ABOUT_BOX_PROPS.content}
          id={ABOUT_BOX_PROPS.id}
        />
        <Box title={TIMELINE_BOX_PROPS.title} id={TIMELINE_BOX_PROPS.id}>
          <TimeLine data={TIMELINE_PROPS.data} />
        </Box>
        <Box title={EXPERTISE_BOX_PROPS.title} id={EXPERTISE_BOX_PROPS.id}>
          <Expertise data={EXPERTISE_PROPS.data} />
        </Box>
        <Box title={SKILLS_BOX_PROPS.title} id={SKILLS_BOX_PROPS.id}>
          <Skills data={SKILLS_PROPS} />
        </Box>
        <Box title={PORTFOLIO_BOX_PROPS.title} id={PORTFOLIO_BOX_PROPS.id}>
          <Portfolio />
        </Box>
        <Box title={ADDRESS_BOX_PROPS.title} id={ADDRESS_BOX_PROPS.id}>
          <Address />
        </Box>
        {/* <Box title={FEEDBACK_BOX_PROPS.title} id={FEEDBACK_BOX_PROPS.id}>
          <Feedback data={FEEDBACK_PROPS.data} />
        </Box> */}
      </div>
    </main>
  );
}
