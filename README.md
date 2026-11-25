# BanterChatter

**Your AI companion, your conversations, your way.**

BanterChatter is an AI-powered chat buddy platform where users can choose different AI personalities and have personalized conversations through text and voice. The platform is designed to support contextual conversations, document-based knowledge retrieval (RAG), and personalized AI experiences.

> 🚧 **Status: In Development**

## ✨ Product Vision

BanterChatter aims to make AI conversations more engaging, personal, and accessible.

Users will be able to:

- Choose from different AI buddies and personalities.
- Have contextual conversations through a modern chat interface.
- Interact using text and voice.
- Upload documents and ask questions based on their content.
- Maintain separate conversation histories for different AI buddies.
- Access features based on their subscription plan.

## 🏗️ Architecture

The project is organized into separate repositories to keep the frontend, core backend, AI services, and infrastructure independently maintainable.

| Repository | Responsibility |
|---|---|
| `BanterChatter` | React frontend |
| `BanterChatter-api` | Core backend APIs and business logic |
| `BanterChatter-ai` | AI orchestration, LLM and RAG workflows |
| `BanterChatter-infra` | Docker, databases and deployment infrastructure |

### Frontend technology stack

- **React** – UI development
- **TypeScript** – Type safety
- **Vite** – Development server and build tooling
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Reusable UI components
- **Zustand** – Client-side state management
- **TanStack Query** – Server-state management

## 📁 Project Structure

The frontend will follow a feature-oriented structure:

```text
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
├── components/
│   ├── common/
│   └── layout/
├── features/
│   ├── auth/
│   ├── buddies/
│   └── chat/
├── hooks/
├── lib/
├── services/
├── stores/
├── styles/
├── types/
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22 or newer
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/ankita-khawle/BanterChatter.git

cd BanterChatter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build production application |
| `npm run lint` | Run lint checks |
| `npm run preview` | Preview production build |

## 🗺️ Development Roadmap

### Phase 1 – Frontend Foundation
- [x] Initialize React and TypeScript using Vite
- [ ] Configure Tailwind CSS and shadcn/ui
- [ ] Establish application layout and routing
- [ ] Add environment configuration
- [ ] Set up reusable UI components

### Phase 2 – Core Experience
- [ ] Authentication screens
- [ ] AI buddy discovery and selection
- [ ] Chat interface
- [ ] Streaming AI responses
- [ ] Conversation history

### Phase 3 – Advanced Interactions
- [ ] Voice input and transcription
- [ ] Document uploads
- [ ] Context-aware conversations
- [ ] RAG-powered responses

### Phase 4 – Productization
- [ ] Subscription and usage interfaces
- [ ] Free and paid feature tiers
- [ ] User settings and profile
- [ ] Responsive and accessible experience

## 🔐 Configuration

Environment-specific configuration will be maintained in local environment files.

Create a `.env` file when the application starts requiring environment variables. Never commit secrets, API keys, or credentials.

## 🤝 Contributing

This is a public project currently under active development.

Contributions, ideas, bug reports, and feedback are welcome.

## 📄 License

License details will be added before the first public release.

---

**Built with curiosity and a little bit of AI magic.**