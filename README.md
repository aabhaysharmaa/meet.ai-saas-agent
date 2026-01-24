# AI Video SaaS – Real-Time Meetings Powered by AI

This is the source code for an AI-powered video platform that makes meetings smarter and searchable. The project focuses on real-time video and AI integration using Stream Video SDK and Stream Chat SDK for communication, while OpenAI handles transcription, summarization, and conversational Q&A. Background processing runs through Inngest for reliable transcript generation and AI analysis with production-grade architecture built for scale.

---

## DEMO VIDEO HERE

[DEMO VIDEO](DEMO VIDEO)

## What We're Building

An AI-first video platform that lets teams and creators host real-time meetings, interact with AI agents during calls, and automatically turn conversations into structured searchable knowledge.

Core goals:

* Real-time video and chat at scale
* Intelligent meeting automation and insights
* Searchable transcript database across all meetings
* Clean responsive user experience
* Production-ready event-driven architecture
* Sub-second message delivery and low-latency video

---

## Features

### Real-Time Video Calls

High-quality video meetings using Stream Video SDK with low-latency delivery and participant presence tracking. Meeting lifecycle management for scheduled, live, and ended sessions. Secure room access with permission controls and real-time participant updates.

### In-Meeting Chat

Persistent messaging powered by Stream Chat SDK with message history synced to video sessions. Typing indicators and presence updates with messages delivered in under 1 second.

### AI-Powered Intelligence

Custom real-time AI agents join your meetings and provide automatic summarization using OpenAI. Full meeting transcription with timestamps and AI-powered Q&A lets you ask questions about past meetings. Context-aware responses with action item extraction and key insight detection.

### Meeting History and Search

Automatic meeting recordings with structured history and full transcript storage including meeting metadata. Fast full-text search across all meeting transcripts with timestamped navigation and jump-to-context playback. Meeting status tracking for scheduled, live, and completed sessions.

### Video Playback

Dedicated playback interface with timeline controls lets you jump directly to relevant moments from search results. Optimized playback for long-form meetings with transcript-synced video navigation.

### Authentication and Monetization

Secure authentication using Better Auth with subscription management powered by Polar. Role-based access control and plan-based feature gating.

### Background Jobs and Automation

Event-driven job processing using Inngest for asynchronous transcription and AI analysis. Reliable retries and error handling with observable background workflows.

### UI and UX

Modern UI built with Tailwind CSS v4 and shadcn/ui with fully responsive design for desktop, tablet, and mobile. Clean layouts optimized for meetings, history, and playback with accessibility-focused components.

---

## Tech Stack

| Category              | Technologies                                      |
| --------------------- | ------------------------------------------------- |
| Frontend              | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| UI                    | shadcn/ui                                         |
| Real-Time Video       | Stream Video SDK                                  |
| Real-Time Chat        | Stream Chat SDK                                   |
| AI & Intelligence     | OpenAI, Custom AI Agents                          |
| Background Processing | Inngest                                           |
| Backend               | Node.js, Event-Driven Architecture                |
| Database              | MySQL / PostgreSQL                                |
| Authentication        | Better Auth                                       |
| Subscriptions         | Polar                                             |
| Developer Tools       | CodeRabbit (PR Reviews)                           |

---

## Getting Started

### Prerequisites

You'll need Node.js (latest LTS recommended) and npm, pnpm, or yarn.

Accounts required:

* Stream (Video and Chat SDKs)
* OpenAI (API key)
* Better Auth setup
* Polar (for subscriptions)
* Database provider (MySQL or PostgreSQL)

---

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ai-video-saas.git
cd ai-video-saas
```

1. Install dependencies:

```bash
npm install
```

1. Set up environment variables:

```bash
cp .env.example .env.local
```

1. Configure your `.env.local` file:

```env
# Stream
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

# OpenAI
OPENAI_API_KEY=

# Database
DATABASE_URL=

# Better Auth
AUTH_SECRET=
AUTH_URL=

# Polar
POLAR_API_KEY=

# Inngest
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

1. Run database migrations:

```bash
npx prisma migrate dev
```

1. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For system design details or an in-depth case study visit my portfolio case study page.

![case-study](http://localhost:3000)

---

## Architecture Highlights

Event-driven processing through Inngest handles transcription, AI summarization, and analysis asynchronously. Real-time infrastructure powered by Stream SDKs delivers low-latency video and chat. Server-side rendering via Next.js App Router with optimized layouts. AI integration through OpenAI for transcription, Q&A, and intelligent insights. Production-ready with type-safe APIs, error handling, and observable workflows.

---

## Inspiration

This project explores how AI can transform real-time communication into actionable intelligence. Built to understand how modern video platforms integrate AI agents, searchable transcripts, and event-driven architectures at scale.

---

## License

This project is licensed under the MIT License.


