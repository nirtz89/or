# Or Rozenfeld - Bass Player Website

A professional website for Or Rozenfeld, a bass player based in Berlin offering tutoring, mentoring, and booking services.

## Features

- **Home Page**: Introduction and overview of services
- **Tutoring Page**: Information about bass lessons
- **Mentoring Page**: Professional mentoring services
- **Booking Page**: Contact form for inquiries

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with navigation
│   ├── page.tsx         # Home page
│   ├── tutoring/        # Tutoring page
│   ├── mentoring/       # Mentoring page
│   ├── booking/         # Booking/contact page
│   └── globals.css      # Global styles
├── components/
│   └── Navigation.tsx   # Navigation component
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

- Update content in the respective page files (`app/page.tsx`, `app/tutoring/page.tsx`, etc.)
- Modify styling in `app/globals.css` or use Tailwind classes
- Add your own images, social media links, or additional pages as needed
- Connect the booking form to a backend service or email API

# or
