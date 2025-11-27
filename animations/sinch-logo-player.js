/**
 * Sinch Logo Animation Player
 * Lightweight Lottie player for Sinch logo animation
 *
 * Usage:
 *   <div id="sinch-logo"></div>
 *   <script src="sinch-logo-player.js"></script>
 *   <script>
 *     SinchLogo.play('#sinch-logo', { width: 240, height: 120, loop: true });
 *   </script>
 *
 * Dependencies: Requires lottie-web (loaded automatically from CDN if not present)
 */

(function(window) {
  'use strict';

  const SinchLogo = {
    /**
     * Play the Sinch logo animation
     * @param {string|HTMLElement} container - CSS selector or DOM element
     * @param {Object} options - Animation options
     * @param {number} options.width - Width in pixels (default: 240)
     * @param {number} options.height - Height in pixels (default: 120)
     * @param {boolean} options.loop - Loop animation (default: true)
     * @param {boolean} options.autoplay - Autoplay animation (default: true)
     * @param {string} options.renderer - Renderer type: 'svg', 'canvas', 'html' (default: 'svg')
     * @returns {Promise<Object>} Lottie animation instance
     */
    play: function(container, options = {}) {
      return new Promise((resolve, reject) => {
        const opts = {
          width: options.width || 240,
          height: options.height || 120,
          loop: options.loop !== undefined ? options.loop : true,
          autoplay: options.autoplay !== undefined ? options.autoplay : true,
          renderer: options.renderer || 'svg'
        };

        // Get container element
        const containerEl = typeof container === 'string'
          ? document.querySelector(container)
          : container;

        if (!containerEl) {
          reject(new Error('Container element not found'));
          return;
        }

        // Set container size
        containerEl.style.width = opts.width + 'px';
        containerEl.style.height = opts.height + 'px';

        // Load lottie-web if not already loaded
        if (typeof window.lottie === 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
          script.onload = () => loadAnimation();
          script.onerror = () => reject(new Error('Failed to load lottie-web'));
          document.head.appendChild(script);
        } else {
          loadAnimation();
        }

        function loadAnimation() {
          // Determine animation path (relative to this script or from CDN)
          const scriptPath = document.currentScript?.src || '';
          const animationPath = scriptPath.includes('sinchlabs')
            ? scriptPath.replace('sinch-logo-player.js', 'sinch-logo.json')
            : 'https://cdn.jsdelivr.net/gh/sinchlabs/sinch-bootstrap-theme@latest/animations/sinch-logo.json';

          // Load animation
          const anim = window.lottie.loadAnimation({
            container: containerEl,
            renderer: opts.renderer,
            loop: opts.loop,
            autoplay: opts.autoplay,
            path: animationPath
          });

          anim.addEventListener('DOMLoaded', () => resolve(anim));
          anim.addEventListener('error', () => reject(new Error('Failed to load animation')));
        }
      });
    }
  };

  // Export to window
  window.SinchLogo = SinchLogo;

})(window);
