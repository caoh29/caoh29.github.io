import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Navigation from '../Navigation';
import PhotoBox from '../PhotoBox';

import { PHOTO_BOX_PROPS } from '../../utils/constants';
import { ButtonProps } from '../../types';

const BUTTON_PROPS: ButtonProps = {
  text: 'Go back',
  icon: <FontAwesomeIcon icon={faChevronLeft} />,
};

export default function Panel() {
  const navigate = useNavigate();
  return (
    <div className="panel">
      <PhotoBox
        name={PHOTO_BOX_PROPS.name}
        title={PHOTO_BOX_PROPS.title}
        description={PHOTO_BOX_PROPS.description}
        avatar={PHOTO_BOX_PROPS.avatar}
      />
      <Navigation />
      <Button
        text={BUTTON_PROPS.text}
        icon={BUTTON_PROPS.icon}
        onClick={() => navigate('/')}
      />
    </div>
  );
}
