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

  // Path to icon sprite
  iconSprite: path.join(__dirname, 'icons', 'sinch-icons.svg'),

  // Path to icon index
  iconIndex: path.join(__dirname, 'icons', 'icon-index.json'),

  // Path to illustrations directory
  illustrations: path.join(__dirname, 'icons', 'illustrations'),

  // Path to individual SVG icons
  svgIcons: path.join(__dirname, 'icons', 'svg'),

  // Path to logo animation
  logoAnimation: path.join(__dirname, 'animations', 'sinch-logo.json'),

  // Path to logo player
  logoPlayer: path.join(__dirname, 'animations', 'sinch-logo-player.js'),

  // Helper to get icon path
  getIconPath: (iconName) => path.join(__dirname, 'icons', 'svg', `${iconName}.svg`),

  // Helper to get illustration path
  getIllustrationPath: (name) => path.join(__dirname, 'icons', 'illustrations', `illustration-${name}.svg`)
};
