import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import PhotoBox from '../../components/PhotoBox';
import avatarImage from '../../assets/images/avatar.jpg';

const PHOTO_BOX_PROPS = {
  name: 'Camilo Ordonez',
  title: 'Mechanical Engineer and Frontend developer',
  description:
    'I am a software engineer with a passion for building things. I enjoy solving problems, with and without code',
  avatar: avatarImage,
};

const BUTTON_PROPS = {
  text: 'Know more',
};

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <PhotoBox
        name={PHOTO_BOX_PROPS.name}
        title={PHOTO_BOX_PROPS.title}
        description={PHOTO_BOX_PROPS.description}
        avatar={PHOTO_BOX_PROPS.avatar}
      />
      <Button text={BUTTON_PROPS.text} onClick={() => navigate('/inner')} />
    </div>
  );
}
