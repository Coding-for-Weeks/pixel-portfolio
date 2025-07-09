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
}
];

export default posts;
