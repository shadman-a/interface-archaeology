import { useMemo, useState } from "react";

type Artifact = {
  id: string;
  index: string;
  name: string;
  years: string;
  category: "Object" | "Interface" | "Ritual";
  status: "Extinct" | "Endangered" | "Transformed";
  epitaph: string;
  description: string;
  replacedBy: string;
  gained: string;
  lost: string;
  visual: "sim" | "screensaver" | "tivo" | "metrocard" | "projector" | "ipod" | "led" | "signature" | "software-box";
};

const artifacts: Artifact[] = [
  {
    id: "nano-sim",
    index: "001",
    name: "The Removable SIM",
    years: "1991—2022",
    category: "Object",
    status: "Endangered",
    epitaph: "Your identity, small enough to lose.",
    description:
      "For three decades, changing phones meant moving a tiny piece of plastic. It made the invisible relationship between person, device, and carrier strangely tangible.",
    replacedBy: "eSIM and eventually iSIM",
    gained: "Instant activation, more internal space, fewer trays",
    lost: "A physical escape hatch from the carrier",
    visual: "sim",
  },
  {
    id: "screensaver",
    index: "002",
    name: "The Screensaver",
    years: "1991—2015",
    category: "Interface",
    status: "Transformed",
    epitaph: "A computer dreaming while you were gone.",
    description:
      "It protected phosphor from burn-in, then became a tiny stage for flying objects, family photos, and questionable office personality. Now the lock screen has a job to do.",
    replacedBy: "Lock screens and sleeping displays",
    gained: "Security, battery life, useful information",
    lost: "A private little show after everyone left",
    visual: "screensaver",
  },
  {
    id: "tivo-grid",
    index: "003",
    name: "The TiVo Grid",
    years: "1999—2016",
    category: "Interface",
    status: "Transformed",
    epitaph: "Television was a place. This was its map.",
    description:
      "Channels ran vertically, time moved horizontally, and the whole evening could be understood at a glance. Streaming replaced the schedule with an infinite shelf that never quite tells you what is on.",
    replacedBy: "Algorithmic home screens",
    gained: "Watch anything, anytime",
    lost: "A shared sense of what was happening now",
    visual: "tivo",
  },
  {
    id: "metrocard-transfer",
    index: "004",
    name: "The Secret Transfer",
    years: "1997—2026",
    category: "Ritual",
    status: "Endangered",
    epitaph: "59th and 63rd, connected by a swipe and a little faith.",
    description:
      "A free out-of-system transfer joined two Lexington Avenue stations without a tunnel. The fare system remembered what the architecture did not.",
    replacedBy: "OMNY account logic",
    gained: "Tap-and-go simplicity",
    lost: "The feeling of knowing a city cheat code",
    visual: "metrocard",
  },
  {
    id: "cabin-projector",
    index: "005",
    name: "The Cabin Projector",
    years: "1970—2005",
    category: "Object",
    status: "Extinct",
    epitaph: "One movie. Every passenger. No choosing.",
    description:
      "A film flickered onto a communal screen while audio arrived through pneumatic headphones. The experience was objectively worse and somehow more like an event.",
    replacedBy: "Seatback screens and personal devices",
    gained: "Choice, clarity, pause buttons",
    lost: "A plane briefly becoming a cinema",
    visual: "projector",
  },
  {
    id: "click-wheel",
    index: "006",
    name: "The Click Wheel",
    years: "2001—2014",
    category: "Interface",
    status: "Extinct",
    epitaph: "A thousand songs, navigated by muscle memory.",
    description:
      "The wheel translated circular motion into movement through a list. It was a control invented for one library, perfected, then erased when every surface became a touchscreen.",
    replacedBy: "Glass and gestures",
    gained: "An interface that can become anything",
    lost: "A control that could be used without looking",
    visual: "ipod",
  },
  {
    id: "notification-led",
    index: "007",
    name: "The Notification LED",
    years: "2003—2018",
    category: "Interface",
    status: "Extinct",
    epitaph: "One quiet blink told you enough.",
    description:
      "Before screens stayed awake forever, a single colored light summarized the state of your social world from across the room.",
    replacedBy: "Always-on displays",
    gained: "More information at a glance",
    lost: "Ambiguity, restraint, and battery life",
    visual: "led",
  },
  {
    id: "email-signature",
    index: "008",
    name: "The Corporate Signature",
    years: "1995—∞",
    category: "Ritual",
    status: "Endangered",
    epitaph: "Best regards, plus a banner ad nobody requested.",
    description:
      "Job titles, legal disclaimers, logos, awards, phone numbers, and inspirational quotes accumulate beneath a two-word reply. AI can summarize the thread; it still has to climb through the debris.",
    replacedBy: "Conversation views and generated summaries",
    gained: "Maybe five vertical inches",
    lost: "Nothing of consequence",
    visual: "signature",
  },
  {
    id: "big-box-software",
    index: "009",
    name: "The Software Box",
    years: "1984—2012",
    category: "Object",
    status: "Extinct",
    epitaph: "Code used to arrive with weight.",
    description:
      "Before apps materialized from a cloud, software arrived as an oversized retail object: shrink-wrapped cardboard, a jewel case, a manual, and enough empty space to look expensive.",
    replacedBy: "App stores and direct downloads",
    gained: "Instant delivery, automatic updates, no shelf space",
    lost: "Manuals, ownership, and the thrill of carrying code home",
    visual: "software-box",
  },
];

const filters = ["All", "Object", "Interface", "Ritual"] as const;

function ArtifactVisual({ type }: { type: Artifact["visual"] }) {
  return (
    <div className={`specimen specimen--${type}`} aria-hidden="true">
      {type === "sim" && (
        <div className="sim-family">
          <span className="sim-card sim-card--full">SIM</span>
          <span className="sim-card sim-card--mini">MINI</span>
          <span className="sim-card sim-card--nano">NANO</span>
        </div>
      )}
      {type === "screensaver" && (
        <div className="screensaver">
          <div className="screensaver-screen">
            <i className="screensaver-ribbon screensaver-ribbon--red" />
            <i className="screensaver-ribbon screensaver-ribbon--blue" />
            <i className="screensaver-ribbon screensaver-ribbon--cream" />
            <span>ZZZ</span>
          </div>
          <div className="screensaver-neck" />
          <div className="screensaver-base" />
        </div>
      )}
      {type === "tivo" && (
        <div className="guide-grid">
          <span className="guide-now">8:00</span>
          <i /><i /><i /><i /><i /><i /><i /><i />
        </div>
      )}
      {type === "metrocard" && (
        <div className="metro-card">
          <i className="metro-stripe" />
          <span className="metro-m">MTA</span>
          <strong>MetroCard</strong>
          <b>FREE TRANSFER</b>
        </div>
      )}
      {type === "projector" && (
        <div className="projector-scene">
          <div className="projector-box">
            <i /><i />
            <span />
          </div>
          <div className="light-beam" />
          <div className="movie-screen">
            <span>FEATURE</span>
            <b>PRESENTATION</b>
          </div>
        </div>
      )}
      {type === "ipod" && (
        <div className="ipod">
          <div className="ipod-screen">
            <span>Music</span><b>›</b>
            <span>Artists</span><b>›</b>
            <span>Albums</span><b>›</b>
          </div>
          <div className="click-wheel"><span>MENU</span><b>▶︎Ⅱ</b><i /></div>
        </div>
      )}
      {type === "led" && (
        <div className="phone-edge"><span className="led-light" /></div>
      )}
      {type === "signature" && (
        <div className="email-note">
          <span>Sounds good.</span>
          <i />
          <b>BEST REGARDS,</b>
          <strong>Senior Global Vice President</strong>
          <small>♻ Please consider the environment before printing this email.</small>
        </div>
      )}
      {type === "software-box" && (
        <figure className="software-box-photo">
          <img
            src="./artifacts/big-box-software.webp"
            alt=""
            loading="lazy"
          />
        </figure>
      )}
    </div>
  );
}

export default function Museum() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visibleArtifacts = useMemo(
    () =>
      activeFilter === "All"
        ? artifacts
        : artifacts.filter((artifact) => artifact.category === activeFilter),
    [activeFilter],
  );

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Interface Archaeology home">
          <span>IA</span>
          <b>Interface<br />Archaeology</b>
        </a>
        <div className="header-meta">
          <span>Digital collection</span>
          <span>Est. 2026</span>
        </div>
        <a className="index-link" href="#collection">Index ↓</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>Exhibition 01</span>
          <span>Everyday technology, recently deceased</span>
        </div>
        <h1>
          The things<br />
          <em>between</em> things.
        </h1>
        <div className="hero-bottom">
          <p>
            An interactive museum of the interfaces, objects, and tiny rituals
            that technology left behind.
          </p>
          <div className="scroll-mark">
            <span>Scroll to excavate</span>
            <i />
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit--one" />
          <span className="orbit orbit--two" />
          <span className="orbit-dot" />
          <b>1991</b>
          <strong>2026</strong>
        </div>
      </section>

      <section className="manifesto">
        <p className="section-label">01 / Field note</p>
        <p className="manifesto-copy">
          Products rarely disappear all at once. First, a button becomes a gesture.
          A card becomes a setting. A familiar sound becomes silent infrastructure.
          <span> We document the moment in between.</span>
        </p>
      </section>

      <section className="collection" id="collection">
        <div className="collection-heading">
          <div>
            <p className="section-label">02 / The collection</p>
            <h2>Recently<br />departed</h2>
          </div>
          <p className="collection-count">
            <b>{String(visibleArtifacts.length).padStart(2, "0")}</b>
            artifacts on view
          </p>
        </div>

        <div className="filter-bar" role="group" aria-label="Filter collection">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
              <sup>
                {filter === "All"
                  ? artifacts.length
                  : artifacts.filter((artifact) => artifact.category === filter).length}
              </sup>
            </button>
          ))}
        </div>

        <div className="artifact-grid">
          {visibleArtifacts.map((artifact) => {
            const isOpen = openId === artifact.id;
            return (
              <article className={`artifact-card ${isOpen ? "is-open" : ""}`} key={artifact.id}>
                <button
                  className="artifact-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${artifact.id}-details`}
                  onClick={() => setOpenId(isOpen ? null : artifact.id)}
                >
                  <div className="artifact-topline">
                    <span>CAT. {artifact.index}</span>
                    <span>{artifact.category}</span>
                    <span className={`status status--${artifact.status.toLowerCase()}`}>
                      {artifact.status}
                    </span>
                  </div>
                  <ArtifactVisual type={artifact.visual} />
                  <div className="artifact-title">
                    <span>{artifact.years}</span>
                    <h3>{artifact.name}</h3>
                    <p>{artifact.epitaph}</p>
                  </div>
                  <span className="expand-label">{isOpen ? "Close" : "Examine"} {isOpen ? "×" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="artifact-details" id={`${artifact.id}-details`}>
                    <div className="artifact-details-inner">
                      <p>{artifact.description}</p>
                      <dl>
                        <div><dt>Replaced by</dt><dd>{artifact.replacedBy}</dd></div>
                        <div><dt>What we gained</dt><dd>{artifact.gained}</dd></div>
                        <div><dt>What we lost</dt><dd>{artifact.lost}</dd></div>
                      </dl>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="submit-strip">
        <p className="section-label">03 / Open call</p>
        <h2>What did technology<br />quietly take from you?</h2>
        <a
          href="https://github.com/shadman-a/interface-archaeology/issues/new"
          target="_blank"
          rel="noreferrer"
        >
          Nominate an artifact <span>↗</span>
        </a>
      </section>

      <footer>
        <div className="footer-mark">IA</div>
        <div>
          <p>Interface Archaeology</p>
          <p>An open collection, continuously excavated.</p>
        </div>
        <p className="footer-colophon">Designed in New York<br />Built for the web</p>
      </footer>
    </main>
  );
}
