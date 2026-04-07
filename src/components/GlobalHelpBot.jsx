import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalHelpBot() {
  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hi! How can we help you change lives today?" }]);
  const endRef = useRef(null);

  const replies = useMemo(
    () => ({
      mission:
        "We exist to see changed lives through development in family life, economic empowerment, leadership, OVC programs, and peace-building.",
      vision:
        "Our vision is to change lives by supporting people in vulnerable conditions and bringing lasting transformation.",
      values:
        "We are guided by holistic care, collaboration, servant leadership, and integrity.",
      donate:
        "You can donate through our platform. Your contribution directly supports communities in need."
    }),
    []
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const findReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("mission")) return replies.mission;
    if (lower.includes("vision")) return replies.vision;
    if (lower.includes("values")) return replies.values;
    if (lower.includes("donate")) return replies.donate;
    return "Thanks for your message. You can ask about mission, vision, values, or donate and I’ll guide you.";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    const reply = findReply(text);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    }, 350);
  };

  const onSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-4 z-[70] md:right-6">
      {!open && showPreview && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-3 max-w-[220px] rounded-xl bg-white px-4 py-2 text-black shadow-lg dark:bg-kingdom-cream"
        >
          <button
            onClick={() => setShowPreview(false)}
            className="absolute -left-2 -top-2 rounded-full bg-black p-1 text-white"
            aria-label="Close preview"
          >
            <X size={12} />
          </button>
          <p className="text-sm font-semibold">We&apos;re Online!</p>
          <p className="text-xs">How can we help you today?</p>
        </motion.div>
      )}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-4 z-[71] flex w-[90%] max-w-sm flex-col overflow-hidden rounded-2xl border border-kingdom-green/20 bg-white shadow-xl dark:border-white/15 dark:bg-[#122612] md:right-6"
        >
          <div className="flex items-center justify-between border-b border-kingdom-green/10 p-4 text-sm font-semibold text-kingdom-green dark:border-white/10 dark:text-kingdom-yellow">
            <span>Kingdom Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={16} />
            </button>
          </div>

          <div className="max-h-64 flex-1 space-y-2 overflow-y-auto p-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={`${msg.role}-${idx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`w-fit max-w-[88%] rounded-lg p-2 text-sm ${
                  msg.role === "assistant"
                    ? "bg-gray-200 text-kingdom-ink dark:bg-white/10 dark:text-kingdom-cream"
                    : "ml-auto bg-kingdom-green text-white dark:bg-kingdom-yellow dark:text-kingdom-dark"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="grid grid-cols-2 gap-2 px-3 pb-2">
            {["Our Mission", "Our Vision", "Our Values", "How to Donate"].map((label) => (
              <button
                key={label}
                onClick={() => sendMessage(label)}
                className="rounded-lg bg-kingdom-green/10 px-2 py-1 text-left text-xs text-kingdom-ink dark:bg-white/10 dark:text-kingdom-cream"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 border-t border-kingdom-green/10 p-3 dark:border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onSend();
              }}
              className="flex-1 rounded-lg bg-gray-100 p-2 text-sm outline-none dark:bg-white/10 dark:text-kingdom-cream"
              placeholder="Type a message..."
            />
            <button onClick={onSend} className="rounded-lg bg-kingdom-green px-3 text-white dark:bg-kingdom-yellow dark:text-kingdom-dark">
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      )}

      <button
        onClick={() => {
          setOpen((v) => !v);
          setShowPreview(false);
        }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-kingdom-green text-kingdom-yellow shadow-2xl transition hover:scale-105 md:h-14 md:w-14"
      >
        <MessageCircle />
      </button>
    </div>
  );
}
