# Next.js WordPress Starter by Bora Bey Sarikaya

Backend Repo: https://github.com/beybora/nextjs-wp-starter-backend

Live Demo of a Rebrush for CHP Berlin (Gemeinnützig): https://neu.chpberlin.de/

A clean and minimalistic starter project for building headless websites using WordPress as a CMS and Next.js as the frontend framework. It connects to the WordPress backend via GraphQL using the WPGraphQL plugin.

---

## Features

- Server-side rendering (SSR) and static site generation (SSG) for optimal performance
- Dynamic routing for WordPress pages and blog posts
- Block rendering system for Gutenberg blocks
- Blog with individual post pages
- SEO metadata support
- Navigation and social icons fetched from WordPress
- Tailwind CSS integration for rapid styling

---

## Tech Stack

**Frontend**

- Next.js (App Router)
- React
- Tailwind CSS

**Backend**

- WordPress
- WPGraphQL

---

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextjs-wordpress-starter.git
cd nextjs-wordpress-starter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and set the following:

```env
WP_GRAPHQL_URL=https://your-wordpress-site.com/graphql
WP_IMAGES_URL=https://your-wordpress-site.com/wp-content/uploads
NEXT_PUBLIC_WP_URL=https://your-wordpress-site.com
```

### 4. Start development server

```bash
npm run dev
```

---

## Folder Structure

```text
├── app
│   ├── page.js                  # Home page
│   ├── blog
│   │   ├── page.js              # Blog listing page
│   │   └── [slug]/page.js       # Individual blog post
│   └── [...slug]/page.js        # Dynamic WordPress page routing
├── components
│   ├── BlockRenderer            # Renders WP blocks
│   ├── sections                 # Layout sections
│   └── ui                       # Reusable UI components
├── utils
│   ├── getPage.js              # Fetches page by URI
│   ├── getPosts.js             # Fetches post list
│   ├── getPostBySlug.js        # Fetches post by slug
│   ├── getSeo.js               # SEO metadata
│   ├── getMainNavigation.js    # WP menu
│   └── getSocialLinks.js       # Social icons
```

---

## Deployment

This project is optimized for Vercel but works with any provider (e.g., Netlify, AWS Amplify).

```bash
npm run build
npm run start
```

---

## License & Credits

Built and maintained by Bora Bey Sarikaya

Feel free to fork, use and extend this project.
