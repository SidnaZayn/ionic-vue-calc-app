import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-vue-demo-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
