import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component implements OnInit {
  myProfileImage;
  constructor(
    private _camera: Camera,
    private _alertController: AlertController
  ) {}

  ngOnInit(): void {}
  async selectImageSource() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.CAMERA,
    };
    const galleryOptions: CameraOptions = {
      quality: 100,
      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE,
      targetHeight: 200,
      correctOrientation: true,
      sourceType: this._camera.PictureSourceType.PHOTOLIBRARY,
    };
    const alert = await this._alertController.create({
      header: 'Select Source',
      message: 'Pick a source of the Image',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this._camera.getPicture(cameraOptions).then(
              (imageData) => {
                this.myProfileImage = 'data:image/jpeg;base64,' + imageData;
              },
              (err) => {
                console.log('error');
              }
            );
          },
        },
        {
          text: 'Galary',
          handler: () => {
            this._camera.getPicture(galleryOptions).then((imageData) => {
              this.myProfileImage = 'data:image/jpeg;base64,' + imageData;
            });
          },
        },
      ],
    });
    await alert.present();
  }
}
