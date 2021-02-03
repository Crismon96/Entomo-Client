import { CameraResultType, CameraSource } from '@capacitor/core';
import { useCamera } from '@ionic/react-hooks/camera';

function usePhotoGallery() {
  const { getPhoto } = useCamera();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
    });

    const { dataUrl } = cameraPhoto;

    if (dataUrl) {
      const data = await fetch(dataUrl);
      const blob = await data.blob();

      let formData = new FormData();
      formData.append('photo', blob, 'ID123');

      const response = await fetch('http://localhost:8000/analyse', {
        method: 'PUT',
        body: formData,
      })
        .then((res) => console.log('res', res))
        .catch((error) => console.log('ERROR: ', error));
    }
  };

  const retrievePhoto = async () => {
    const imageData = await fetch('http://localhost:8000/favorite').then((res) => res.blob());

    const urlCreator = window.URL ?? window.webkitURL;

    const imageElement: any = document.getElementById('myImage');

    if (imageElement) {
      imageElement.src = urlCreator.createObjectURL(imageData);
    }
  };

  return {
    takePhoto,
    retrievePhoto,
  };
}

export default usePhotoGallery;
