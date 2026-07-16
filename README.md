# Modern Next.js Frontend Template

A production-ready, batteries-included Next.js 16 frontend template designed to save developers 2-3 days of initial setup. It comes pre-configured with the best modern tools for styling, state management, and developer experience.

## 🚀 What's Included?

This template provides a highly scalable foundation equipped with everything you need to build complex web applications instantly:

### 1. Developer Experience & Code Quality

- **Scalable Architecture**: Well-defined folder structure (`components/`, `hooks/`, `lib/`, `store/`, `services/`) meant for scale.
- **Automated Formatting**: **Prettier** is set up with opinionated defaults.
- **Git Hooks**: **Husky** and **Lint-Staged** automatically lint and format your code before every commit, keeping the codebase pristine.

### 2. Styling & UI Foundation

- **Tailwind CSS v4**: The latest utility-first CSS framework.
- **Shadcn UI**: Initialized and ready. Add customizable, accessible UI primitives via CLI.
- **Dark Mode**: Fully configured **Next-Themes** provider wrapped around the application.
- **Icons**: **Lucide React** included for beautiful, consistent iconography.
- **Notifications**: **Sonner** toaster integrated globally for gorgeous, responsive toast notifications.

### 3. State Management & Data Fetching

- **Global State**: **Zustand** is pre-configured for lightweight, boilerplate-free global state (perfect for sidebar toggles, modal states, etc.).
- **Server State**: **TanStack React Query** is globally provided, ready to handle data fetching, caching, and background syncs.
- **API Client**: A fully configured **Axios** client is provided (`services/api-client.ts`) with built-in request/response interceptors to handle auth tokens and global error toasts automatically.

## 📂 Folder Structure

```text
.
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable UI components
│   ├── ui/            # Shadcn UI primitive components
│   ├── query-provider.tsx # React Query provider
│   └── theme-provider.tsx # Dark/Light mode provider
├── hooks/             # Custom React hooks
├── lib/               # Utility functions (e.g., utils.ts for Tailwind merge)
├── services/          # API configurations (e.g., pre-configured Axios client)
├── store/             # Global state management (Zustand)
└── types/             # TypeScript type definitions
```

## 🛠 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 💡 How this saves you time

By using this template, you skip the tedious configuration of global state, the pain of setting up React Query providers, the hassle of configuring Axios interceptors, and the repetitive setup of Prettier, Husky, and Shadcn UI. You can start building actual features from minute one.
