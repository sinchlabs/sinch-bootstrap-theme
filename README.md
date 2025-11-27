# Sinch Bootstrap Theme

> A production-ready Bootstrap 5 theme based on Sinch's official brand guidelines and Nectary Design System.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3+-purple.svg)](https://getbootstrap.com)
[![CDN](https://img.shields.io/badge/CDN-jsDelivr-orange.svg)](https://www.jsdelivr.com/package/gh/sinchlabs/sinch-bootstrap-theme)

## Features

- ✅ **Official Sinch Brand Colors** - Yellow, Green, Blue, Red palettes
- ✅ **DM Sans & DM Mono Typography** - Loaded from Sinch CDN
- ✅ **201 Brand Icons** - Branded icons, channel icons, product logos
- ✅ **114 Illustrations** - SVG illustrations for marketing and product
- ✅ **Animated Logo** - Lottie animation with simple JavaScript player
- ✅ **Bootstrap 5.3+ Compatible** - Drop-in replacement for default Bootstrap theme
- ✅ **CDN Ready** - Use via jsDelivr without any build step
- ✅ **Accessibility** - WCAG AA compliant color contrasts

---

## Quick Start

### Option 1: CDN (Recommended)

Add these lines to your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinch App</title>

  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Sinch Theme (includes icons) -->
  <link href="https://cdn.jsdelivr.net/gh/sinchlabs/sinch-bootstrap-theme@latest/css/sinch-theme.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1>Welcome to Sinch</h1>
    <button class="btn btn-cta">Get Started</button>
  </div>

  <!-- Bootstrap JS (optional) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Option 2: NPM/Download

```bash
# Clone or download this repo
git clone https://github.com/sinchlabs/sinch-bootstrap-theme.git

# Copy files to your project
cp -r sinch-bootstrap-theme/css ./public/css
cp -r sinch-bootstrap-theme/icons ./public/icons
```

Then reference locally:

```html
<link href="/css/sinch-theme.css" rel="stylesheet">
```

---

## What's Included

```
sinch-bootstrap-theme/
├── css/
│   ├── sinch-theme.css           # Complete Bootstrap theme (34KB)
│   ├── sinch-variables.css        # CSS custom properties only
│   ├── sinch-variables.scss       # SCSS variables for customization
│   └── sinch-icons.css            # Icon helper classes
├── icons/
│   ├── sinch-icons.svg            # SVG sprite (201 icons)
│   ├── icon-index.json            # Icon catalog
│   ├── svg/                       # Individual icon SVG files
│   │   ├── sinch-*.svg            # 125 branded icons
│   │   ├── channel-*.svg          # 38 channel icons
│   │   └── logo-*.svg             # 38 product logos
│   ├── illustrations/             # 114 marketing illustrations
│   └── ICONS.md                   # Icon usage guide
├── animations/
│   ├── sinch-logo.json            # Lottie animation data
│   └── sinch-logo-player.js       # Simple animation player
├── examples/
│   └── index.html                 # Live demo page
└── README.md
```

---

## Usage Examples

### Buttons

```html
<!-- Primary CTA (Sinch Yellow) -->
<button class="btn btn-cta">Sign Up Now</button>

<!-- Primary Action (Teal) -->
<button class="btn btn-primary">Learn More</button>

<!-- Secondary Outline -->
<button class="btn btn-outline-primary">Contact Us</button>

<!-- Sizes -->
<button class="btn btn-cta btn-sm">Small</button>
<button class="btn btn-cta btn-lg">Large</button>
```

### Icons

#### Method 1: SVG Sprite (Recommended)

```html
<!-- Use icons from the sprite -->
<svg class="sinch-icon sinch-icon-32">
  <use href="https://cdn.jsdelivr.net/gh/sinchlabs/sinch-bootstrap-theme@latest/icons/sinch-icons.svg#sinch-sms"></use>
</svg>

<!-- With color variants -->
<svg class="sinch-icon sinch-icon-primary sinch-icon-48">
  <use href="/icons/sinch-icons.svg#channel-whatsapp"></use>
</svg>
```

#### Method 2: Inline SVG

Download individual icons from `icons/svg/` and use directly:

```html
<svg class="sinch-icon sinch-icon-md" viewBox="0 0 48 48">
  <!-- SVG content -->
</svg>
```

#### Icon Sizes

- `.sinch-icon-xs` - 0.75rem (12px)
- `.sinch-icon-sm` - 1rem (16px)
- `.sinch-icon-md` - 1.5rem (24px)
- `.sinch-icon-lg` - 2rem (32px)
- `.sinch-icon-xl` - 3rem (48px)
- `.sinch-icon-16`, `.sinch-icon-24`, `.sinch-icon-32`, `.sinch-icon-48`, `.sinch-icon-64` - Fixed pixel sizes

#### Icon Colors

- `.sinch-icon-primary` - Teal
- `.sinch-icon-cta` - Yellow
- `.sinch-icon-success` - Green
- `.sinch-icon-danger` - Red
- `.sinch-icon-white` - White

### Logo Animation

```html
<div id="sinch-logo"></div>

<script src="https://cdn.jsdelivr.net/gh/sinchlabs/sinch-bootstrap-theme@latest/animations/sinch-logo-player.js"></script>
<script>
  SinchLogo.play('#sinch-logo', {
    width: 240,
    height: 120,
    loop: true,
    autoplay: true
  });
</script>
```

### Typography

```html
<h1>Heading 1</h1>  <!-- 50px, -2% letter spacing -->
<h2>Heading 2</h2>  <!-- 40px, -2% letter spacing -->
<p>Body copy with DM Sans font, 16px size, 135% line height</p>

<!-- Code snippets -->
<code>const api = new Sinch();</code>
```

### Cards

```html
<div class="card shadow-sinch-2">
  <div class="card-header">
    <h5 class="mb-0">Card Title</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Content with Sinch styling.</p>
    <a href="#" class="btn btn-primary">Action</a>
  </div>
</div>
```

### Forms

```html
<form>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="you@example.com">
  </div>
  <div class="mb-3">
    <label class="form-label">Country</label>
    <select class="form-select">
      <option>United States</option>
      <option>United Kingdom</option>
    </select>
  </div>
  <button type="submit" class="btn btn-cta">Submit</button>
</form>
```

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Yellow** | `#ffbe3c` | CTA buttons, highlights |
| **Green** | `#059688` | Hyperlinks, success states |
| **Blue** | `#3aa7ea` | Information, secondary actions |
| **Red** | `#ef5858` | Errors, destructive actions |
| **Black** | `#000000` | Primary text |
| **Grey Dark** | `#595959` | Secondary text |

### CSS Variables

All colors and design tokens are available as CSS custom properties:

```css
:root {
  /* Colors */
  --sinch-yellow: #ffbe3c;
  --sinch-green-vibrant: #059688;
  --sinch-blue-vibrant: #3aa7ea;
  --sinch-red-vibrant: #ef5858;

  /* Typography */
  --sinch-font-family: "DM Sans", Arial, sans-serif;
  --sinch-font-family-mono: "DM Mono", monospace;

  /* Spacing */
  --sinch-radius-sm: 6px;
  --sinch-radius-md: 10px;
  --sinch-radius-lg: 14px;

  /* Shadows */
  --sinch-shadow-sm: 1px 2px 6px rgba(10, 39, 61, 0.1);
  --sinch-shadow-md: 1px 4px 8px rgba(10, 39, 61, 0.1);
}
```

Use in your CSS:

```css
.custom-button {
  background: var(--sinch-yellow);
  color: var(--sinch-black);
  border-radius: var(--sinch-radius-md);
  box-shadow: var(--sinch-shadow-sm);
}
```

---

## Brand Guidelines

This theme follows the official Sinch brand guidelines:

- **Typography**: DM Sans (Regular 400, Medium 500, Bold 700)
- **Alignment**: Left-aligned (never center for body text)
- **Colors**: Always use 3-4 brand colors per design
- **Corners**: Always rounded (never sharp corners)
- **Icons**: Filled style (not outlined)
- **Letter Spacing**: -2% for headings, -1% for body

For complete brand guidelines, visit: https://brand.sinch.com

---

## Browser Support

Same as Bootstrap 5:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Icon Catalog

### Branded Icons (125 icons)
`sinch-sms`, `sinch-chat`, `sinch-voice`, `sinch-webhook`, `sinch-developer`, `sinch-api`, etc.

### Channel Icons (38 icons)
`channel-whatsapp`, `channel-facebook-messenger`, `channel-telegram`, `channel-instagram`, `channel-viber`, `channel-line`, `channel-wechat`, `channel-rcs`, etc.

### Product Logos (38 logos)
`logo-sinch-icon`, `logo-sinch-icon-wordmark`, `logo-engage-icon`, `logo-chatlayer-icon`, `logo-mailgun-icon`, etc.

See `icons/icon-index.json` for complete catalog.

---

## Customization

### Override Variables

```html
<style>
  :root {
    /* Override Sinch yellow with your brand color */
    --sinch-yellow: #ffa500;

    /* Adjust border radius */
    --sinch-radius-md: 8px;
  }
</style>
```

### SCSS Integration

If using SCSS, import variables before Bootstrap:

```scss
// 1. Import Sinch variables
@import "path/to/sinch-variables.scss";

// 2. Override Bootstrap variables
$primary: $sinch-tropical-700;
$font-family-base: $font-family-sans-serif;

// 3. Import Bootstrap
@import "~bootstrap/scss/bootstrap";
```

---

## Contributing

We welcome contributions! Please:

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

This theme is based on Sinch's official brand guidelines. The Nectary design system and associated assets are property of Sinch AB.

---

## Resources

- **Sinch Brand Guidelines**: https://brand.sinch.com
- **Bootstrap Documentation**: https://getbootstrap.com/docs/5.3/
- **Icon Library**: See [icons/ICONS.md](icons/ICONS.md)
- **Live Demo**: [examples/index.html](examples/index.html)

---

## Support

For questions or issues:
- **GitHub Issues**: https://github.com/sinchlabs/sinch-bootstrap-theme/issues
- **Sinch Developer Portal**: https://developers.sinch.com
- **Brand Guidelines Contact**: ben.fitter-harding@sinch.com

---

**Made with ❤️ by Sinch Labs**
