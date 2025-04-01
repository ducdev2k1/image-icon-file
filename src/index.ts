import { App } from 'vue';
import FileIcon from './components/FileIcon.vue';

export default {
  install(app: App) {
    app.component('FileIcon', FileIcon);
  },
};

export { FileIcon };
