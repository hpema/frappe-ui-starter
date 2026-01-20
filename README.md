# Frappe UI Starter (Latest v0.1.259)

Modern starter template for Frappe apps with **Vue 3.5**, **Vite 5**, and **frappe-ui 0.1.259**.

## Features

✅ **Latest frappe-ui v0.1.259** with toast notifications and modern components  
✅ **Vue 3.5** + Vue Router 4  
✅ **Vite 5** for blazing fast development  
✅ **ESM-first** architecture  
✅ **TailwindCSS** with frappe-ui preset  
✅ **Lucide Icons** auto-configured  
✅ **Auto-configured Frappe proxy**  
✅ **Production-ready** build configuration

## Quick Start

This template is meant to be used inside an existing Frappe App. Assuming your app name is `myapp`:

```bash
cd apps/myapp
npx degit hpema/frappe-ui-starter-latest frontend
cd frontend
yarn install
yarn dev
```

The dev server will start on port **8080** (or 8081 if 8080 is in use).

## Development Setup

### 1. Site Configuration

Add to your `site_config.json`:

```json
{
  "ignore_csrf": 1
}
```

This prevents CSRF errors during development. In production, the CSRF token is automatically handled.

### 2. Access Your App

If your site is `myapp.test`, open: `http://myapp.test:8080`

The app runs at `/frontend` by default. To change this, edit `src/router.js`:

```javascript
let router = createRouter({
  history: createWebHistory('/frontend'),  // Change this path
  routes,
})
```

## Production Build

```bash
yarn build
```

The build output goes to `../{app_name}/public/frontend/` by default.

## What's Included

### Package Versions
- **frappe-ui**: ^0.1.259
- **vue**: ^3.5.0
- **vite**: ^5.2.0
- **vue-router**: ^4.1.6
- **tailwindcss**: ^3.4.3

### Pre-configured Features
- ✅ Toast notifications (`toast.success()`, `toast.error()`, `toast.info()`)
- ✅ Frappe API integration (`frappeRequest`, `resourcesPlugin`)
- ✅ Lucide icons via `unplugin-icons`
- ✅ Auto-proxy to Frappe backend
- ✅ TailwindCSS with frappe-ui design tokens
- ✅ ESM module format
- ✅ CommonJS compatibility for legacy packages

### File Structure
```
frontend/
├── src/
│   ├── main.js          # App entry point
│   ├── App.vue          # Root component
│   ├── router.js        # Vue Router config
│   ├── index.css        # Global styles
│   ├── pages/           # Your pages
│   │   └── Home.vue
│   └── assets/          # Static assets
├── public/
│   └── index.html
├── package.json
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Using frappe-ui Components

```vue
<template>
  <div>
    <Button @click="handleClick" theme="blue" variant="solid">
      Click Me
    </Button>
    
    <Input v-model="name" placeholder="Enter name" />
    
    <FormControl label="Email" required :error="errors.email">
      <Input v-model="email" type="email" />
    </FormControl>
  </div>
</template>

<script>
import { Button, Input, FormControl, toast } from 'frappe-ui'

export default {
  components: { Button, Input, FormControl },
  data() {
    return {
      name: '',
      email: '',
      errors: {}
    }
  },
  methods: {
    handleClick() {
      toast.success('Button clicked!', { duration: 5 })
    }
  }
}
</script>
```

## Toast Notifications

```javascript
import { toast } from 'frappe-ui'

// Success
toast.success('Operation completed!', { duration: 5 })

// Error
toast.error('Something went wrong', { duration: 10 })

// Info
toast.info('Just so you know...', { duration: 5 })

// Warning
toast.warning('Be careful!', { duration: 7 })

// With action button
toast.success('File uploaded', {
  duration: 10,
  action: {
    label: 'View',
    onClick: () => console.log('View clicked')
  }
})
```

## Troubleshooting

### Port already in use
If port 8080 is in use, Vite will automatically try 8081, 8082, etc.

### Icons not loading
Ensure `lucideIcons: true` is set in `vite.config.js`:
```javascript
...frappeui({
  lucideIcons: true,
  frappeProxy: true,
}),
```

### Module resolution errors
Clear Vite cache and restart:
```bash
rm -rf node_modules/.vite
yarn dev
```

### CSRF errors
Add `"ignore_csrf": 1` to your `site_config.json`

## Resources

- [Frappe UI Documentation](https://github.com/frappe/frappe-ui)
- [Vue 3 Guide](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)

## License

MIT
