// Single source of truth for the Projects section and the per-project detail
// pages, so a card and its page can never describe the same work differently.
//
// A project without a `detail` block renders as a card only and gets no page.

const PROJECTS = [
  {
    id: 'crisscross',
    slug: 'crisscross',
    title: 'Crisscross',
    role: 'Personal Product · Design & Build',
    period: '2026',
    gif: 'crisscross.gif',
    alt: 'Screen recording of the Crisscross landing page: cycling through the player avatars, typing a codename, and flipping the site into dark mode.',
    description:
      'Twelve two-player games behind one room code, with a video call built into the same tab so people who are apart can play and talk without juggling apps. No signup and no download — one player starts a room, the other joins with the code. Room and game state sync live through Firebase, and the call connects the two browsers directly over WebRTC with a TURN relay for the networks that cannot be reached any other way.',
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'WebRTC', 'Tailwind CSS'],
    metrics: [
      { value: '250+', label: 'Players in week one' },
      { value: '1,000+', label: 'Rooms created' },
    ],
    link: 'https://crisscross-arena.vercel.app',
    linkLabel: 'Play Crisscross',
    detail: {
      tagline: 'Twelve two-player games and a video call, behind one room code.',
      overview: [
        'Long distance turns ordinary time together into a scheduling problem. The usual answer is a stack of apps — a video call in one window, a game in another, a chat thread somewhere else — and the seams show.',
        'Crisscross collapses that into one tab. One person starts a room and reads a five-character code to the other. From then on both people are in the same room: the same board, the same turn, the same call. Nothing to install, nothing to configure.',
      ],
      highlights: [
        {
          title: 'One code, no download',
          body: 'A room is created and joined with a five-character code. Sign in with Google, share the code, play — there is no install step and no lobby to manage.',
        },
        {
          title: 'Twelve games in the room',
          body: 'Quoridor, a shared-board snake, a co-op word bridge, emoji spotting, a code-breaker, reaction games and more — all reachable from inside the same room without dropping the call.',
        },
        {
          title: 'The call lives in the same tab',
          body: 'Video connects the two browsers directly over WebRTC. Public STUN servers handle discovery, and an optional TURN relay carries the media for the household and mobile networks that cannot be reached peer to peer.',
        },
        {
          title: 'Shared state that stays in step',
          body: 'Room membership, the active game and per-game state sync through the Firebase Realtime Database, so both screens agree on whose turn it is without either player refreshing.',
        },
        {
          title: 'Small touches that carry',
          body: 'An avatar you pick once follows you into every game, there is a light and dark theme, background music that can be muted, and an in-room chat for the moments between turns.',
        },
      ],
      stack: [
        { group: 'Frontend', items: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4'] },
        { group: 'Realtime', items: ['Firebase Realtime Database', 'Firebase Auth (Google)'] },
        { group: 'Media', items: ['WebRTC', 'STUN', 'TURN relay'] },
        { group: 'Delivery', items: ['Vercel', 'Server components', 'JSON-LD structured data'] },
      ],
      contributions: [
        'Designed and built the product end to end — concept, interface, game implementations, realtime layer and deployment.',
        'Implemented the room model: creation, join-by-code, presence, seat assignment and per-game state kept in sync across two clients.',
        'Built the WebRTC calling layer, including the STUN/TURN configuration needed for calls between two ordinary home or mobile networks.',
        'Wrote each of the twelve two-player games against a shared interface so a room can switch games without tearing down the call.',
      ],
      links: [{ label: 'Live site', href: 'https://crisscross-arena.vercel.app' }],
    },
  },

  {
    id: 'ipomilega',
    slug: 'ipo-milega',
    title: 'IPO Milega',
    role: 'Product Engineering',
    period: '2025 — 2026',
    gif: 'ipo-milega.gif',
    alt: 'Screen recording of IPO Milega: browsing live and upcoming Indian IPOs, then opening an analysis page with allocation and financial charts.',
    description:
      'A research platform for Indian IPOs. Live, upcoming and past issues in one filterable dashboard, and behind each one a full analysis page — scored fundamentals, a risk meter, investor-quota allocation and multi-year financials as interactive charts. Admins edit any field inline by double-clicking it, and an AI parser reads a DRHP or RHP prospectus to populate the analysis rather than someone keying it in by hand.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Better Auth', 'Recharts', 'AWS S3'],
    link: 'https://ipomilega.in',
    linkLabel: 'Visit IPO Milega',
    detail: {
      tagline: 'A research terminal for Indian IPOs, with an AI parser doing the reading.',
      overview: [
        'An Indian IPO arrives as a several-hundred-page prospectus and a short subscription window. The information a retail investor actually needs — is this profitable, how is it priced, who is selling, what is the risk — is in there, but it is not in a form anyone reads under time pressure.',
        'IPO Milega turns each issue into a structured, comparable record. The dashboard tracks live, upcoming and past issues; each one opens into an analysis page that scores the fundamentals and charts the numbers. The slow part, reading the prospectus, is handled by an AI parser that populates the analysis from the DRHP or RHP directly.',
      ],
      highlights: [
        {
          title: 'Live, upcoming and past in one view',
          body: 'A filterable, searchable dashboard covering active subscriptions, issues yet to open and historical listings with their performance.',
        },
        {
          title: 'Scored analysis, not just data',
          body: 'Each issue carries an overall score alongside profitability, financial fundamentals, a risk meter, business flexibility and management quality — so two issues can actually be compared.',
        },
        {
          title: 'AI prospectus parser',
          body: 'A DRHP or RHP is uploaded and parsed automatically into the analysis fields, replacing the manual read-and-retype pass that otherwise gates every new listing.',
        },
        {
          title: 'Inline admin editing',
          body: 'An admin double-clicks any metric, score or description on the live analysis page and edits it in place. No separate admin form to keep in sync with the public view.',
        },
        {
          title: 'Charts that carry the argument',
          body: 'Investor quota allocation across Retail, QIB and NII as a breakdown, and multi-year financial performance as trend charts, both rendered with Recharts.',
        },
        {
          title: 'A blog with its own CMS',
          body: 'Draft, publish, feature and slug-manage posts through the same admin surface, with markdown rendering and image upload to S3.',
        },
        {
          title: 'Built to be found',
          body: 'Server components, JSON-LD structured data, per-issue metadata and cached MongoDB connections — the pages have to rank to be useful.',
        },
      ],
      stack: [
        { group: 'Frontend', items: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Radix UI', 'Framer Motion'] },
        { group: 'Data', items: ['MongoDB', 'Cached connections', 'Index management scripts'] },
        { group: 'Platform', items: ['Better Auth (Google OAuth + credentials)', 'Role-based admin access', 'AWS S3 uploads'] },
        { group: 'Presentation', items: ['Recharts', 'react-markdown', 'rehype / remark', 'Sonner'] },
      ],
      contributions: [
        'Built the IPO and analysis data model and the REST surface over it — roughly eighteen route handlers covering issues, analyses, subscription data, blogs and uploads.',
        'Implemented the inline editing system that lets an admin edit any analysis field in place on the public page, with role-gated writes behind Better Auth.',
        'Integrated the AI prospectus parsing endpoint that turns an uploaded DRHP or RHP into populated analysis fields.',
        'Built the charting layer for quota allocation and multi-year financials, and the SEO work — structured data, metadata and MongoDB connection caching.',
      ],
      links: [{ label: 'Live site', href: 'https://ipomilega.in' }],
    },
  },

  {
    id: 'hiking-alert',
    slug: 'hiking-alert',
    title: 'Hiking Alert Platform',
    role: 'Freelance · Full Stack Developer',
    period: 'Since 2023',
    gif: 'hiking-alert.gif',
    alt: 'Screen recording of the Hiking Alert platform: a trekker registers a trip with an expected return time and nominates the contacts to be alerted.',
    description:
      "A safety net for trekkers. A hiker registers a trip with an expected return time; if they don't check in before it lapses, the platform automatically escalates to their emergency contacts over WhatsApp. I built the React front end, the Firebase data layer, and the Node.js webhook that parses replies and resolves alerts in two-way conversations.",
    tags: ['React', 'Firebase', 'Node.js', 'Meta WhatsApp Cloud API', 'Webhooks'],
    link: 'https://manav.in/blog/launching-alerts',
    linkLabel: 'Read the launch post',
    detail: {
      tagline: "A dead man's switch for people who walk into places with no signal.",
      overview: [
        'Most hiking accidents are survivable if someone knows to come looking. The gap is not the rescue, it is the hours or days before anyone realises a person is overdue — especially for solo trekkers and small groups who tell nobody the specifics of their route.',
        'Hiking Alert closes that gap without needing signal on the trail. Before setting out, a hiker registers the trip and an expected return time, and nominates who to contact. If the clock runs out and the hiker has not checked in, the platform escalates on their behalf, over WhatsApp, to the people who can act.',
      ],
      highlights: [
        {
          title: 'Register the trip, not just the person',
          body: 'A trip carries its route details, the expected return time and the emergency contacts for that specific outing, so an alert arrives with the context a responder actually needs.',
        },
        {
          title: 'Escalation is the default',
          body: 'Nothing depends on the hiker doing something when things go wrong. Silence past the return time is the trigger; checking in is what cancels it.',
        },
        {
          title: 'Alerts land where people already are',
          body: 'Contacts are reached over the Meta WhatsApp Cloud API rather than an app they would have to install, because the person who needs to act is rarely the person who signed up.',
        },
        {
          title: 'Two-way, not a broadcast',
          body: 'A Node.js webhook parses replies from contacts, so an alert can be acknowledged and resolved in the same conversation it arrived in instead of dead-ending in a notification.',
        },
        {
          title: 'Built for where it is used',
          body: 'Bundled Indian state and international dialling-code data, so trips and contacts can be entered accurately for the region the platform actually serves.',
        },
      ],
      stack: [
        { group: 'Frontend', items: ['React', 'Firebase Auth', 'Bootstrap'] },
        { group: 'Data', items: ['Firebase', 'Trip and alert records', 'Contact profiles'] },
        { group: 'Messaging', items: ['Meta WhatsApp Cloud API', 'Node.js webhook', 'Two-way conversation handling'] },
      ],
      contributions: [
        'Built the React front end — trip creation, the active-alert view, alert history and the profile and emergency-contact management.',
        'Modelled trips, alerts and contacts in Firebase and wired the client to them.',
        'Built the Node.js webhook that receives WhatsApp messages, parses contact replies and resolves the corresponding alert.',
        'Integrated the Meta WhatsApp Cloud API for outbound escalation, including message templates and delivery handling.',
      ],
      note: 'Parts of this platform are covered by an NDA and live in private repositories, so the detail here stays at the level the public launch post covers.',
      links: [{ label: 'Launch post', href: 'https://manav.in/blog/launching-alerts' }],
    },
  },

  {
    id: 'blip',
    slug: 'blip',
    title: 'Blip — TikTok Ads Integration',
    role: 'Client Engagement · via BMV System Integration',
    period: '',
    gif: 'blip.gif',
    alt: "Screen recording of Blip's bulk ad launcher: authorizing a TikTok ad account, then watching per-ad launch progress stream in live.",
    description:
      "Built the end-to-end TikTok Ads integration for Blip's bulk ad-launching product — the OAuth 2.0 login flow, account authorization, and the backend and frontend connectivity to the TikTok Ads API. Launch jobs keep their state in Redis and stream progress to the browser over Server-Sent Events, so a bulk run reports live per-ad status instead of being polled for it.",
    tags: ['React.js', 'Node.js', 'Redis', 'Server-Sent Events', 'OAuth 2.0', 'TikTok Ads API'],
    link: 'https://withblip.com',
    linkLabel: 'Visit Blip',
    // Client work — card only, no detail page.
  },

  {
    id: 'linkers-db',
    slug: 'linkers-db',
    title: "Linker's DB",
    role: 'Personal Project',
    period: '2024',
    gif: 'linkers-db.gif',
    alt: "Screen recording of Linker's DB: saving a tab with a note from the Chrome extension, then finding it again in the web dashboard.",
    description:
      'A dedicated URL management platform — save, tag and retrieve links from a React web app or straight from the browser through a companion Chrome extension, with everything kept in sync behind one account.',
    tags: ['React', 'Chrome Extension', 'Firebase'],
    detail: {
      tagline: 'Save a tab in one click. Find it again from anywhere.',
      overview: [
        'Bookmarks fail at exactly the moment they matter. A link saved six months ago is a bare title in a folder nobody opens, with nothing recording why it was worth keeping.',
        "Linker's DB treats a saved link as a note with a URL attached. It is captured in one click from the tab you are already on, kept in sync behind one account, and can be handed to someone else without asking them to sign up for anything.",
      ],
      highlights: [
        {
          title: 'One click from the active tab',
          body: 'The Chrome extension saves the current tab with a note attached, so the reason for keeping something is captured at the moment it is still obvious.',
        },
        {
          title: 'Collections, not folders',
          body: 'Saved links group into customisable collections, so a body of research holds together instead of dissolving into a flat list.',
        },
        {
          title: 'Anonymous sharing',
          body: 'Any link or collection can be published as a shareable URL that a recipient opens without an account and without signing in — dedicated shared-link and shared-collection views handle it.',
        },
        {
          title: 'One account, every device',
          body: 'Cloud sync through Firebase keeps the extension and the web dashboard looking at the same library, whichever one a link was saved from.',
        },
      ],
      stack: [
        { group: 'Web app', items: ['React', 'React Router', 'Bootstrap', 'Firebase'] },
        { group: 'Extension', items: ['Chrome Extension APIs', 'Active-tab capture'] },
        { group: 'Platform', items: ['Firebase Auth', 'Cloud sync', 'Anonymous share links'] },
      ],
      contributions: [
        'Built the web dashboard — authentication, the link and collection library, and the save-and-annotate flow.',
        'Built the companion Chrome extension that captures the active tab with a note in a single click.',
        'Implemented anonymous sharing, including the public shared-link and shared-collection pages that need no account to view.',
        'Wired Firebase auth and cloud sync so the extension and web app stay consistent across devices.',
      ],
      links: [
        {
          label: 'Chrome Web Store',
          href: 'https://chromewebstore.google.com/detail/link-saver/kcancggpgjikndnlbmngcpjjkdcgffdo?hl=en',
        },
      ],
    },
  },
];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

export default PROJECTS;
