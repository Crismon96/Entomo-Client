import { CameraResultType, CameraSource } from '@capacitor/core';
import { useCamera } from '@ionic/react-hooks/camera';

function usePhotoGallery() {
  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    console.log('cameraPhoto: ', cameraPhoto);
  };

  return {
    takePhoto,
  };
}

export default usePhotoGallery;
