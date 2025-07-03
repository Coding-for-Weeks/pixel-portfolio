import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const webhookURL = process.env.REACT_APP_DISCORD_WEBHOOK;
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown) return;

    const payload = {
      content: `📩 **New Contact Spell Cast!**
**Name:** ${formData.name}
**Email:** ${formData.email}
**Message:** ${formData.message}`
    };

    try {
      const res = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("✨ Message successfully cast!");
        setFormData({ name: "", email: "", message: "" });
        setCooldown(true);
        setTimeout(() => {
          setCooldown(false);
          setStatus("");
        }, 15000); // 15s cooldown
      } else {
        setStatus("⚠️ Spell fizzled. Try again later.");
      }
    } catch {
      setStatus("❌ Magic interference. Message failed.");
    }
  };

  return (
    <div className="section-container bg-gray-950" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-purple-300 mb-6 border-b-2 border-purple-500 inline-block pb-2">
          ✉️ Summon the Mage
        </h2>
        <p className="text-sm text-gray-400 mb-8">
          Send a raven (or a message) to reach me.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block">Your name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 border border-purple-600"
            required
          />
          <label htmlFor="email" className="block">Your email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 border border-purple-600"
            required
          />
          <label htmlFor="message" className="block">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 border border-purple-600"
            required
          ></textarea>
          <button
            type="submit"
            disabled={cooldown}
            className={`bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded transition-all ${
              cooldown ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {cooldown ? "🕒 Cooldown..." : "Cast Message ✨"}
          </button>
          {status && (
            <p className="text-sm mt-4 text-purple-300 animate-pulse transition-all duration-700">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
