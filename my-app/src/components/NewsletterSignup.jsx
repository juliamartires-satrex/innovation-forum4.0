import { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://innovation-forum-api.onrender.com/api/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong");
    }
  };

  return (
    <form className="subscribe" onSubmit={handleSubmit}>
    <label>Email Address</label>
    <input
      type="email"
      placeholder="you@email.com"
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
    />
    <button type="submit" disabled={status === "loading"}>
      {status === "loading" ? "Subscribing..." : "Subscribe"}
    </button>

    {status === "success" && (
      <p className="success-message">{message}</p>
    )}

    {status === "error" && (
      <p className="error-message">{message}</p>
    )}
  </form>
  );
}

export default NewsletterSignup;
