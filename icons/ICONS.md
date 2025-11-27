# Sinch Icons

Extracted from `@nectary/assets` v5.10.x

## Contents

- **sinch-icons.svg** - SVG sprite containing all icons (201 icons)
- **sinch-icons.css** - CSS helper classes for styling icons
- **svg/** - Individual SVG files for each icon
- **illustrations/** - Larger illustration SVGs
- **icon-index.json** - Index of all available icons by category

## Usage

### Method 1: SVG Sprite (Recommended)

Include the sprite file in your page, then reference icons by ID:

```html
<!-- Include sprite (hidden) -->
<div style="display:none">
    <!-- Include contents of sinch-icons.svg here, or load via fetch -->
</div>

<!-- Use icons -->
<svg class="sinch-icon sinch-icon-32">
    <use href="#sinch-sms"></use>
</svg>

<svg class="sinch-icon sinch-icon-primary">
    <use href="#sinch-webhook"></use>
</svg>
```

### Method 2: External Sprite Reference

```html
<svg class="sinch-icon sinch-icon-lg">
    <use href="icons/sinch-icons.svg#sinch-developer"></use>
</svg>
```

### Method 3: Inline SVG

Copy the SVG code from the `svg/` folder directly into your HTML:

```html
<svg class="sinch-icon sinch-icon-danger" viewBox="0 0 48 48">
    <!-- SVG paths here -->
</svg>
```

## Icon Categories

### Branded Icons (sinch-*)
Business/product icons: `sinch-sms`, `sinch-chat`, `sinch-webhook`, `sinch-developer`, etc.

### Channel Icons (channel-*)
Communication channel icons: `channel-whatsapp`, `channel-facebook-messenger`, `channel-telegram`, etc.

### Logos (logo-*)
Sinch product logos: `logo-sinch-icon`, `logo-sinch-icon-wordmark`, `logo-engage-icon`, etc.

## CSS Classes

### Sizes
- `.sinch-icon-xs` through `.sinch-icon-2xl`
- `.sinch-icon-16` through `.sinch-icon-64` (pixel sizes)

### Colors  
- `.sinch-icon-primary`, `.sinch-icon-secondary`
- `.sinch-icon-success`, `.sinch-icon-danger`, `.sinch-icon-warning`, `.sinch-icon-info`
- `.sinch-icon-dark`, `.sinch-icon-light`, `.sinch-icon-white`
- `.sinch-icon-cta` (Honey yellow)

### Channel Backgrounds
- `.sinch-icon-channel` + `.sinch-icon-channel-whatsapp`, etc.

## Icon Count by Category

- **branded**: 125 icons
- **channel**: 38 icons
- **logo**: 38 icons

Total: **201** icons + illustrations
