import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  ABOUT_BOX_PROPS,
  TIMELINE_BOX_PROPS,
  EXPERTISE_BOX_PROPS,
  PORTFOLIO_BOX_PROPS,
  TIMELINE_PROPS,
  EXPERTISE_PROPS,
  ADDRESS_BOX_PROPS,
  FEEDBACK_BOX_PROPS,
  FEEDBACK_PROPS,
} from '../../utils/constants';

import { ButtonProps } from '../../types';

import Button from '../../components/Button';
import Panel from '../../components/Panel';
import Box from '../../components/Box';
import TimeLine from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Feedback from '../../components/Feedback';

const BUTTON_PROPS: ButtonProps = {
  icon: <FontAwesomeIcon icon={faBars} />,
};

export default function InnerPage() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="inner">
      {isOpen && <Panel />}
      <Button icon={BUTTON_PROPS.icon} onClick={() => setIsOpen(!isOpen)} />
      <div style={{ marginRight: '36px' }}>
        <Box title={ABOUT_BOX_PROPS.title} content={ABOUT_BOX_PROPS.content} />
        <Box title={TIMELINE_BOX_PROPS.title}>
          <TimeLine data={TIMELINE_PROPS.data} />
        </Box>
        <Box title={EXPERTISE_BOX_PROPS.title}>
          <Expertise data={EXPERTISE_PROPS.data} />
        </Box>
        <Box title={PORTFOLIO_BOX_PROPS.title}>
          <Portfolio />
        </Box>
        <Box title={ADDRESS_BOX_PROPS.title}>
          <Address />
        </Box>
        <Box title={FEEDBACK_BOX_PROPS.title}>
          <Feedback data={FEEDBACK_PROPS.data} />
        </Box>
      </div>
    </div>
  );
}