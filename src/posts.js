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
}
  // Add more posts...
];

export default posts;
