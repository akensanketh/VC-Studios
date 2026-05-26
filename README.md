# VisionCraft Studios — Official Landing Page

An elegant, high-fidelity landing page for **VC Studios (VisionCraft Studios)**, the official post-production partner of Frame Flicker Studios. This application is powered by modern **React 19**, **Vite**, **TypeScript**, and styled with **Tailwind CSS**, capturing a cinematic twilight mood with high-contrast displays, negative space spacing, fluid alignments, and a full-bleed interactive digital backing.

## ✨ Key Features

- **Cinematic Backdrop**: Responsive video header overlay utilizing direct log playback, with multiple radial layers for comfortable legibility at wide-screen widths.
- **VisionCraft Advantage Features**: Dynamic three-column grid tracking color-grading, invisible VFX pipelines, and multi-channel sound design curves with responsive visual callouts.
- **Workflow & Connection Analysis**: Edge-to-edge content container visualizing connected pipeline syncing for professional titles.
- **Encrypted Studio Gate & Portals**: Fully responsive interactive modal states for submitting specification requests, booking client sessions, and validating direct timeline reviews.
- **Responsive Layout**: Designed fluidly to look pristine on high-resolution displays, ultra-wide screens, tablets, and handheld devices.

## 🛠️ Built With

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion (motion/react)** for hardware-accelerated fluid interface transitions
- **Lucide React** for modern vector glyph pairings

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher is recommended).

### 1. Clone the Repository & Install Dependencies

```bash
# Install package dependencies
npm install
```

### 2. Live Development Run

To initiate the quick HMR development server:

```bash
npm run dev
```

The server will initialize on a local host (`http://localhost:3000` or the mapped container port).

### 3. Production Build & Static Build Output

To compile a minified distribution layout inside the `/dist` directory for web server deployments:

```bash
npm run build
```

---

## 📁 Source Architecture

```text
├── assets/                  # App icon and public image resources
├── src/
│   ├── assets/              # Native media files and asset references
│   ├── components/
│   │   ├── Icons.tsx        # High-fidelity custom brand designs and lucide groupings
│   │   ├── Navbar.tsx       # Standard fluid application header with dynamic drawer
│   │   ├── HeroSection.tsx  # Display title text, partnership highlights, and primary CTA
│   │   ├── Features.tsx     # Triple-column pipeline advantages section
│   │   ├── AnalyticsSection.tsx  # Dynamic inline continuous widescreen workflow panel
│   │   └── InteractiveModal.tsx # Unified form models (Login, Inquiries, Capability specs)
│   ├── App.tsx              # Application hub & coordinate wrapper
│   ├── index.css            # Unified global style sheet with utility pairings
│   └── main.tsx             # DOM entry mounting point
├── package.json             # Service and pipeline dependency definitions
└── tsconfig.json            # Strict TypeScript compilation definitions
```

---

## 🎨 Visual Philosophy

The application interface is crafted to prioritize **architectural honesty** and **distinctive modern aesthetics**:
1. **The Twilight Canvas**: Leverages high-contrast light text against a twilight night-sky background for premium eye safety and polished focus.
2. **Elegant Space Grotesk Displays**: Uses proportional display fonts, subtle animations, and large negative spaces to align with standard professional studio aesthetics.
3. **Optimized Spacing**: Text blocks utilize wide-set flexible alignments (`sm:`, `md:`, `lg:`, `xl:`) to maximize continuous flow and fit edge-to-edge naturally.
