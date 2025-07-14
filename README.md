# Modern React Starter Pack (Vite + JS)

This is a professional, production-ready starter pack for building modern React applications. It includes a robust architecture for routing, state management, API handling, and styling.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with Shadcn/ui & Sonner
- **Routing:** React Router DOM
- **State Management:** React Context API (for authentication)
- **Forms:** React Hook Form + Zod
- **API Client:** Axios with Interceptors
- **Code Quality:** ESLint & Prettier

## Folder Structure

The project uses a feature-based folder structure to promote scalability and maintainability.

- `src/app`: Core application setup (e.g., Redux store in other packs).
- `src/components`: Shared, reusable UI components (e.g., Layouts, UI primitives).
- `src/context`: Global React Context providers (e.g., AuthContext).
- `src/features`: Feature-specific code, co-locating components, services, and state.
- `src/lib`: Shared libraries and configurations (e.g., configured Axios instance).
- `src/pages`: Top-level page components used by the router.
- `src/services`: Centralized API service functions.

## Getting Started

### Prerequisites

- Node.js (v20.x or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-name>
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root of the project by copying the example file:

```bash
cp .env.example .env.local
```
