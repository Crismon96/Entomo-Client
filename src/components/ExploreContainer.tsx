import { IonButton } from '@ionic/react';
import React from 'react';
import usePhotoGallery from '../utils/hooks/usePhotoGallery.ts/usePhotoGallery';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { takePhoto, retrievePhoto } = usePhotoGallery();

  return (
    <div className="container">
      <strong>Take a photo of your bug</strong>
      <br />
      <IonButton onClick={async () => await takePhoto()} color="primary">
        Take now!
      </IonButton>

      <IonButton onClick={async () => await retrievePhoto()} color="primary">
        Retrieve Photo!
      </IonButton>

      <img id="myImage" />
    </div>
  );
};

export default ExploreContainer;
