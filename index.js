/**
 * Sinch Bootstrap Theme
 *
 * This package provides CSS files and assets for styling Bootstrap 5
 * applications with Sinch brand guidelines.
 *
 * Usage with bundlers (webpack, vite, etc.):
 *
 *   // Import the main theme (includes fonts and all styles)
 *   import '@sinchlabs/bootstrap-theme';
 *
 *   // Or import specific files
 *   import '@sinchlabs/bootstrap-theme/css/sinch-theme.css';
 *   import '@sinchlabs/bootstrap-theme/css/sinch-icons.css';
 *   import '@sinchlabs/bootstrap-theme/css/sinch-variables.css';
 *
 * Usage with SCSS:
 *
 *   // Import variables before Bootstrap
 *   @import '@sinchlabs/bootstrap-theme/css/sinch-variables.scss';
 *   @import 'bootstrap/scss/bootstrap';
 *
 * For static HTML, use the CDN links in README.md
 */

const path = require('path');

module.exports = {
  // Path to main CSS file
  css: path.join(__dirname, 'css', 'sinch-theme.css'),

  // Path to CSS variables only
  variables: path.join(__dirname, 'css', 'sinch-variables.css'),

  // Path to SCSS variables
  scss: path.join(__dirname, 'css', 'sinch-variables.scss'),

  // Path to icon CSS
  icons: path.join(__dirname, 'css', 'sinch-icons.css'),

  // Path to icon index
  iconIndex: path.join(__dirname, 'icons', 'icon-index.json'),

  // Icon directories (new structure without prefixes)
  iconDirs: {
    branded: path.join(__dirname, 'icons', 'branded'),
    channel: path.join(__dirname, 'icons', 'channel'),
    logos: path.join(__dirname, 'icons', 'logos'),
    illustrations: path.join(__dirname, 'icons', 'illustrations')
  },

  // Legacy paths (kept for backwards compatibility)
  iconSprite: path.join(__dirname, 'icons', 'sinch-icons.svg'),
  svgIcons: path.join(__dirname, 'icons', 'svg'),
  illustrations: path.join(__dirname, 'icons', 'illustrations'),

  // Path to logo animation
  logoAnimation: path.join(__dirname, 'animations', 'sinch-logo.json'),

  // Path to logo player
  logoPlayer: path.join(__dirname, 'animations', 'sinch-logo-player.js'),

  // Helper to get branded icon path (new structure)
  getBrandedIcon: (name) => path.join(__dirname, 'icons', 'branded', `${name}.svg`),

  // Helper to get channel icon path (new structure)
  getChannelIcon: (name) => path.join(__dirname, 'icons', 'channel', `${name}.svg`),

  // Helper to get logo path (new structure)
  getLogo: (name) => path.join(__dirname, 'icons', 'logos', `${name}.svg`),

  // Helper to get illustration path (new structure)
  getIllustration: (name) => path.join(__dirname, 'icons', 'illustrations', `${name}.svg`),

  // Legacy helpers (kept for backwards compatibility)
  getIconPath: (iconName) => {
    // Try new structure first
    if (iconName.startsWith('sinch-')) {
      return path.join(__dirname, 'icons', 'branded', iconName.replace('sinch-', '') + '.svg');
    }
    if (iconName.startsWith('channel-')) {
      return path.join(__dirname, 'icons', 'channel', iconName.replace('channel-', '') + '.svg');
    }
    if (iconName.startsWith('logo-')) {
      return path.join(__dirname, 'icons', 'logos', iconName.replace('logo-', '') + '.svg');
    }
    // Fall back to old svg folder
    return path.join(__dirname, 'icons', 'svg', `${iconName}.svg`);
  },

  getIllustrationPath: (name) => {
    // Handle both old and new naming
    const cleanName = name.startsWith('illustration-') ? name.replace('illustration-', '') : name;
    return path.join(__dirname, 'icons', 'illustrations', `${cleanName}.svg`);
  }
};
