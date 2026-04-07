import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalHelpBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
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
    const timer = setTimeout(() => {
      setOpen(true);
      setMessages([{ role: "assistant", text: "Hi! How can we help you change lives today?" }]);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-4 z-[71] flex w-[90%] max-w-sm flex-col overflow-hidden rounded-2xl border border-kingdom-green/20 bg-white shadow-xl dark:border-white/15 dark:bg-[#122612] md:right-6"
        >
          <div className="border-b border-kingdom-green/10 p-4 text-sm font-semibold text-kingdom-green dark:border-white/10 dark:text-kingdom-yellow">
            Kingdom Assistant
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
          if (!open && messages.length === 0) {
            setMessages([{ role: "assistant", text: "Hi! How can we help you change lives today?" }]);
          }
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-kingdom-green text-kingdom-yellow shadow-2xl md:h-16 md:w-16"
      >
        <MessageCircle />
      </button>
    </div>
  );
}
