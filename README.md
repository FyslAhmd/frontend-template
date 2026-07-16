# Modern Next.js Frontend Template

A production-ready, batteries-included Next.js 16 frontend template designed to save developers 2-3 days of initial setup. It comes pre-configured with the best modern tools for styling, state management, and developer experience.

## 🚀 Features & Setup Progress

### Phase 1: Core Architecture & Developer Experience (DX) - ✅ Completed

- **Folder Structure**: Scalable organization (`components/`, `hooks/`, `lib/`, `store/`, `types/`, `services/`).
- **Code Quality**:
  - **Prettier** for opinionated code formatting.
  - **Husky & Lint-Staged** for automated pre-commit hooks (ensures no unformatted or lint-failing code gets committed).
- **UI & Styling Foundation**:
  - **Tailwind CSS v4** setup.
  - **Shadcn UI** initialized for customizable, unstyled, and accessible components.
  - **Lucide React** for beautiful, consistent icons.
  - **Next-Themes** for seamless Dark/Light mode support (`ThemeProvider` integrated into root layout).
  - **Sonner** integrated into the root layout for global toast notifications.

### Phase 2: State Management & API Integration - ⏳ Pending

_(To be implemented)_

### Phase 3: Essential Layouts, Auth Flow & Reusable UI - ⏳ Pending

_(To be implemented)_

### Phase 4: Testing, Performance & Documentation - ⏳ Pending

_(To be implemented)_

---

## 📂 Folder Structure

```text
.
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable UI components
│   ├── ui/            # Shadcn UI primitive components
│   └── theme-provider.tsx # Dark/Light mode provider
├── hooks/             # Custom React hooks
├── lib/               # Utility functions (e.g., utils.ts for Tailwind merge)
├── services/          # API calls and external service integrations
├── store/             # Global state management
└── types/             # TypeScript type definitions
```

## 🛠 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
