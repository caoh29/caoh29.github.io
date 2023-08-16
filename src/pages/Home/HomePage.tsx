import { useNavigate } from 'react-router-dom';

import { PHOTO_BOX_PROPS } from '../../utils/constants';

import { ButtonProps } from '../../types';

import Button from '../../components/Button';
import PhotoBox from '../../components/PhotoBox';

const BUTTON_PROPS: ButtonProps = {
  text: 'Know more',
};

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="home">
      <PhotoBox
        name={PHOTO_BOX_PROPS.name}
        title={PHOTO_BOX_PROPS.title}
        description={PHOTO_BOX_PROPS.description}
        avatar={PHOTO_BOX_PROPS.avatar}
      />
      <Button text={BUTTON_PROPS.text} onClick={() => navigate('/inner')} />
    </main>
  );
}
