import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import textOverlayPlugin from 'mirador-textoverlay/es';

window.Mirador = Mirador;
//window.textOverlayPlugin = textOverlayPlugin;
//window.miradorImageToolsPlugin = miradorImageToolsPlugin;
// The used plugins is specified in the main js.
window.miradorPlugins = [
  ...miradorImageToolsPlugin,...textOverlayPlugin,
];
