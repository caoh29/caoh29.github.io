import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button';
import Panel from '../../components/Panel';

import { ButtonProps } from '../../types';
import { useState } from 'react';

const BUTTON_PROPS: ButtonProps = {
  icon: <FontAwesomeIcon icon={faBars} />,
};

export default function InnerPage() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="inner">
      {isOpen && <Panel />}
      <Button icon={BUTTON_PROPS.icon} onClick={() => setIsOpen(!isOpen)} />
      InnerPage
    </div>
  );
}
