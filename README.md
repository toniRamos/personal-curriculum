# Antonio Ramos - Personal Portfolio

Personal portfolio of Antonio Ramos, Software Architect with 10+ years of experience developing scalable and maintainable systems.

## 🌟 Features

- **Multilingual portfolio** - Full support for Spanish and English
- **Optimized animations** - Smooth and performant visual effects
- **Responsive design** - Adapted for all devices
- **Dockerized** - Containerized development and deployment environment
- **Clean architecture** - Modular and maintainable code with Astro

## 🚀 Project Structure

```text
personal-curriculum/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.astro          # Loading screen with animations
│   │   ├── Navigation.astro      # Main navigation with language selector
│   │   └── Social.astro          # Social media links
│   ├── config/
│   │   └── site.ts               # Site configuration
│   ├── i18n/
│   │   ├── en.json               # English translations
│   │   ├── es.json               # Spanish translations
│   │   └── ui.ts                 # Internationalization utilities
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with global styles
│   └── pages/
│       ├── index.astro           # Main page (Spanish)
│       └── en/
│           └── index.astro       # Main page (English)
├── docker-compose.yml            # Docker configuration
├── Dockerfile                    # Docker image
└── package.json
```

## 🛠️ Technologies Used

- **[Astro](https://astro.build/)** v5.14.4 - Modern static site framework
- **TypeScript** - Static typing for JavaScript
- **CSS3** - Animations and responsive design
- **Docker** - Containerization and deployment
- **Anime.js** - Animation library (via CDN)

## 🧞 Available Commands

All commands are run from the root of the project:

| Command                   | Description                                        |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs project dependencies                     |
| `npm run dev`             | Starts development server at `localhost:4321`    |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview production build locally                  |
| `docker-compose up`       | Run the project with Docker                      |

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/toniRamos/personal-curriculum.git
cd personal-curriculum

# Install dependencies
npm install

# Start development server
npm run dev
```

### With Docker

```bash
# Run with Docker Compose
docker-compose up

# Access at http://localhost:4321
```

## 🌐 Multilingual Structure

The site supports two languages:

- **Spanish (Default)**: `/` - Main page in Spanish
- **English**: `/en/` - Main page in English

### Language Navigation

- Language selector available in main navigation
- Friendly URLs: `/` for Spanish, `/en/` for English
- Centralized translations in JSON files

## ⚡ Performance Optimizations

- **Optimized animations**: Loading times reduced by half
- **Lazy loading**: Components and resources loaded on demand
- **Optimized CSS**: Minified styles and critical CSS inline
- **Responsive images**: Automatically adapted to device

## 🎨 Portfolio Sections

1. **Hero Section** - Introduction and call to action
2. **About** - Experience and technical skills
3. **Experience** - Detailed professional history
4. **Projects** - Featured work and personal projects
5. **Contact** - Contact information and social networks

## 📱 Responsive Features

- **Desktop**: Full experience with animations and effects
- **Tablet**: Adapted navigation and optimized content
- **Mobile**: Hamburger menu and vertical layout

## 🔧 Customizable Configuration

### Site variables (`src/config/site.ts`)
- Personal and professional information
- Social media links
- SEO metadata

### Translations (`src/i18n/`)
- Multi-language text content
- Easy addition of new languages
- Automatic fallback system

## 🐳 Docker Deployment

The project includes complete Docker configuration:

```yaml
# docker-compose.yml
services:
  web:
    build:
      context: .
      target: dev
    ports:
      - "4321:4321"
    volumes:
      - .:/app
      - /app/node_modules
```

### Docker Commands

```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# Stop services
docker-compose down
```

## 📊 Performance Metrics

- **Initial load time**: ~1.5 seconds (optimized from 3s)
- **Scroll animations**: 400ms (optimized from 800ms)
- **Page size**: ~72KB (optimized, no duplications)
- **Compatibility**: All modern browsers

## 🎯 Best Practices Implemented

- **Clean Code**: Modular and maintainable structure
- **Responsive First**: Mobile-first design approach
- **Performance**: Loading and animation optimizations
- **Accessibility**: Keyboard navigation and screen reader support
- **SEO**: Optimized meta tags and semantic URLs

## 📄 License

This project is a personal portfolio. You can use it as a reference or inspiration for your own portfolio.

## 👤 Autor

**Antonio Ramos**
- GitHub: [@toniRamos](https://github.com/toniRamos)
- LinkedIn: [Antonio Ramos Torres](https://www.linkedin.com/in/antonioramostorres/)
- Email: antonioramostorres@gmail.com

---

*Built with ❤️ using Astro and modern web development best practices*
