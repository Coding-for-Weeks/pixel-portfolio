const posts = [
{
  slug: "summoning-the-grimoire",
  title: "Summoning the Grimoire",
  date: "2025-07-01",
  description: "The first incantation is cast — welcome to the Digital Grimoire.",
  content: `
## Summoning the Grimoire

*“Every spellbook has a first page. This is mine.”*

Welcome, traveler. You’ve wandered into the **Digital Grimoire**, where code and sorcery intertwine.

This blog is a chronicle of my journey as a software developer, cybersecurity aspirant, and digital mage. I work in the shadows of the command line, building arcane projects like *FableForge*—a D&D-inspired text realm—and pursuing certifications like the OSCP, unraveling systems from the inside out.

What you’ll find in this grimoire:

- ⚔️ Indie dev logs from *FableForge*
- 🔐 OSCP and hacking notes from the trenches
- 📜 Spell scrolls (tutorials, reflections, failures, wins)
- 🧠 Thoughts on the magic behind systems and software

So sharpen your mind like a blade, open the tome, and let the rituals begin.

— **Nullgrimoire**
`
},
{
  slug: "refactors-in-the-void",
  title: "Refactors in the Void",
  date: "2025-07-03",
  description: "The quest logic is torn, rebuilt, and reforged—FableForge evolves again.",
  content: `
## Refactors in the Void

*“Today, I gazed into the old code—and the old code gazed back.”*

The goal was simple: breathe structure into *FableForge*'s growing quest system.
Scenes like \`intro\`, \`encounter\`, and \`puzzle\` had grown too tangled—one monolithic file ruled them all.

So I shattered it.

Each scene now lives in its own sacred module, invoked only when the player treads that path. The quest engine breathes easier now. Its madness... contained.

I also conjured \`apply_class_bonus()\`, the long-awaited sibling to \`apply_race_bonus()\`. Now when a player chooses their class—Druid, Hexblade, Psion—they’re imbued with blessings and burdens. The stats feel alive.

The OSCP tomes remain open too. Enumeration spells were practiced, exploits summoned, logs studied like ancient glyphs.

The grimoire grows.

— **Nullgrimoire**
`
},
{
  slug: "independence-in-the-terminal",
  title: "Independence in the Terminal",
  date: "2025-07-04",
  description: "On this July 4th, I reflect on a deeper kind of freedom — control over my digital tools.",
  content: `
## Independence in the Terminal

*“True independence is knowing your own system.”*

While fireworks light the sky, I’m running system updates and pushing commits. There's something empowering about mastering your workflow, crafting your environment, and escaping the noise.

Command line. Config files. Crontabs. My freedom doesn’t wave a flag — it blinks a cursor.

Celebrate your wins, even if they're in the terminal.
`
},
{
  slug: "why-i-build-after-midnight",
  title: "Why I Build After Midnight",
  date: "2025-07-05",
  description: "There’s something sacred about late-night coding. Here’s why it works for me.",
  content: `
## Why I Build After Midnight

The world sleeps. My mind doesn’t.

Post-midnight is when ideas flow freely. No interruptions. Just me, VS Code, and caffeine. Last night I finished polishing a module and started sketching out the next.

Magic happens when you’re in the dark — just ask any mage.
`
},
{
  slug: "scroll-updates-and-sigil-tweaks",
  title: "Scroll Updates and Sigil Tweaks",
  date: "2025-07-06",
  description: "A few aesthetic and UX updates to the Grimoire. Progress is progress.",
  content: `
## Scroll Updates and Sigil Tweaks

This weekend I touched up the Scroll of Works and tweaked the footer sigils.

- ✨ Smoother hover states
- 📜 Cleaned up old spell links
- 🧩 Better mobile scroll animations

Small changes, but they help keep the grimoire polished. Every pixel matters.
`
},
{
  slug: "pokedex-cli-build-log",
  title: "Pokédex CLI: Build Log",
  date: "2025-07-07",
  description: "Teamed up with a friend to build a command-line Pokédex. Gotta debug 'em all.",
  content: `
## Pokédex CLI: Build Log

Today was a blast — teamed up with a friend to summon a new CLI project: a Pokédex lookup tool written in Python.

We worked on:
- 🔍 Searching Pokémon by name, type, or generation
- 📦 Converting CSV/HTML data into clean JSON
- 🧬 Implementing evolution chains
- 📁 Splitting out generations into separate files

Also added a fun little feature: merging Type1 and Type2 into a single "Type: X/Y" format. It’s clean, fast, and satisfying to use.

More polish to come, but we’re on track to catch 'em all — one line at a time.
`
},
{
  slug: "summon-the-terminal",
  title: "Summon the Terminal, the Tome Awaits",
  date: "2025-07-08",
  description: "Contact form is live. Let the scrolls fly.",
  content: `
## Summon the Terminal, the Tome Awaits

The contact form — or “Summon the Mage” portal — is finally live.

It’s always wild to watch users cast the first spell (aka send a message). It means someone out there saw the site and thought, “I want to reach out.”

That’s a kind of magic I’ll never stop appreciating.
`
},
{
  slug: "rituals-of-refinement",
  title: "Rituals of Refinement",
  date: "2025-07-09",
  description: "A quiet day of sharpening the spellwork — tools tuned, incantations refined, and new summons whispered.",
  content: `
## Rituals of Refinement

*“Not every spell is cast in fire and fury. Some are forged in silence, perfected in the dark.”*

Today’s entry is one of discipline over drama.

I began by scripting a new incantation — a shell script that mounts my dev drive, breathes life into my virtual environments, and opens the gateway to my sanctum (VS Code). It’s a small ritual, but a powerful one. Smooth transitions are sacred to the craft.

From there, I stepped once more into the arcane economy of **Dark Market**. The old prototype—bound in Pygame—still lingers, but the real vessel is now web-based, crafted in Flask. Market prices pulse live. Rumors shift like smoke. It’s becoming something more than a game — it’s a living spell.

Elsewhere in the ether, I drafted a new construct: **TSMngr**, a ticket system manager forged for structure, not distraction. I’m considering Rust for its power and precision — unfamiliar, but promising. Learning it will be its own ritual.

No grand breakthroughs today. Just sharpening the edges. Whispering to the code. Preparing for deeper magic.

— **Nullgrimoire**
`
},
{
  "slug": "log-of-shadows-2025-07-10",
  "title": "Log of Shadows — July 10, 2025",
  "date": "2025-07-10",
  "description": "TSMngr awakens with CLI incantations, GitHub rituals, and SQLite-bound tomes. The forge burns hotter.",
  "content": `
## Log of Shadows — July 10, 2025
\`v1.1.0-alpha :: Shadows Cast in Steel\`

**“Structure is the skeleton of purpose.”**

Today I forged a new layer into the black iron of \`TSMngr\`. While most mortals see command-line tools as mere convenience, I see mine as ritual. And now, it responds to *invocations*—arguments carved in runes (CLI subcommands).

---

### 🛠️ Updates Bound in Steel

- **CLI Mode**: \`create\`, \`list\`, and \`show\` commands now summon, display, or reveal ticket knowledge from SQLite.
- **SQLite Integration Improved**: The grimoires (tickets, logs, users) now awaken via a unified DB connection helper.
- **Release Build Workflow**: GitHub Actions now forges binaries on \`tag\` push. Users may now *summon* releases directly.
- **Version Bump**: The artifact now wears the mark of \`v1.1.0-alpha\`.

---

### 🔮 Reflections from the Void

The goal remains unwavering: to build a tool businesses can wield. But usability is key. Not everyone is a mage. Sometimes they just need a torch in the dark.

> **Next ritual:** Implementing an internal \`log\` system that traces each invocation, each change. Audit trails in the arcane.

---

### ⌛ Incantation Time

| Feature            | Status     | Time Invested |
|--------------------|------------|----------------|
| CLI Command Layer  | ✅ Done    | ~2 hours       |
| SQLite Refactor    | ✅ Done    | ~1.5 hours     |
| GitHub Actions     | ✅ Done    | ~1 hour        |
| Docs/README        | 🕗 Partial | ~30 min        |

---

To fellow shadow-smiths:
You don’t need a thousand users. You need one who *needs* your tool. Then, craft for them. Perfect for them. The rest will follow.

— **Nullgrimoire** 🕯️🖋️
`
}
];

export default posts;
