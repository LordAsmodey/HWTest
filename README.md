# HWTest

## Description

**HWTest** is a test project developed for "Holy Water" company. The goal of the project is to implement online novel and video viewing on mobile devices using React Native. The application supports streaming playback of m3u8 video files. New video content is loaded and updated via Firebase Remote Config.

## Installation and Setup Instructions

To install and run the project, follow these steps:

1. Set up the required environment according to the [React Native documentation](https://reactnative.dev/docs/environment-setup).
2. Clone the project repository.
3. Install dependencies using the command `yarn`.
4. Install pods for iOS if you are working with this platform - `cd ios` and `pod install`.
5. Start the Metro server with the command `yarn start`.
6. Run the application on a device or emulator: `yarn run ios` for iOS or `yarn run android` for Android.

## Features

### For Users:
- View videos with the ability to save the last viewed novel and series.

### For Administrators:
- Easy addition and modification of content via Firebase Remote Config.

## Firebase Setup Information

To connect your own Firebase account, follow these steps:

1. Register an account on [Firebase](https://firebase.google.com/).
2. Add an Android project with package name `com.hwtest`.
3. Replace the `google-services.json` file in the `android/app` folder.
4. Add an iOS project with Bundle ID `org.reactjs.native.example.HWTest`.
5. Replace the `GoogleService-Info.plist` file in the `ios` folder.
6. Add Firebase Remote Config to the project.
7. Add 2 JSON format keys to Firebase Remote Config: `banners` and `categories`. You can view the data structure in the `src/app/types` folder.

## DEMO

[DEMO](https://youtu.be/Axf1DjJVU6Q) on my android device with mobile internet
