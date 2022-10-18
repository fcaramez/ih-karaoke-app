const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  databaseURL: process.env.REACT_APP_GOOGLE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKERT,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_GOOGLE_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

export default firebaseConfig;
