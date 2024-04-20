import remoteConfig from '@react-native-firebase/remote-config';

export const fetchRemoteConfig = async (key: string) => {
  await remoteConfig().fetch(300);

  await remoteConfig().fetchAndActivate();
  const value = remoteConfig().getValue(key);
  const data = value.asString();
  return JSON.parse(data);
};
