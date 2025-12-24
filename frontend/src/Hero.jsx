import { useState } from "react";

export default function Hero() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const submitIdea = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setResult("");

    const res = await fetch("http://localhost:5000/improve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });

    const data = await res.json();
    setResult(data.improvedPrompt);
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-4">
          Turn a rough website idea into a build-ready prompt
        </h1>

        <p className="text-slate-300 mb-6">
          Write your idea. We’ll structure it into a clear website prompt.
        </p>

        <textarea
          className="w-full h-32 p-4 rounded text-black mb-4"
          placeholder="I want a website for my business..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <button
          onClick={submitIdea}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          {loading ? "Improving..." : "Improve my idea"}
        </button>

        {result && (
          <pre className="mt-6 bg-black p-4 rounded whitespace-pre-wrap">
            {result}
          </pre>
        )}
      </div>
    </section>
  );
}
