import { IonButton } from '@ionic/react';
import React from 'react';
import usePhotoGallery from '../utils/hooks/usePhotoGallery.ts/usePhotoGallery';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { takePhoto } = usePhotoGallery();

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <IonButton onClick={async () => await takePhoto()} color="primary">
        Primary
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
