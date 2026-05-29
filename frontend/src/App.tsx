import { useState } from "react";

function App() {
  const [repoUrl, setRepoUrl] = useState("");// State to hold the submitted URL for display
  const [submittedUrl, setSubmittedUrl] = useState("");// State to hold the submitted URL for display

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1120",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "white",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        ArchicMind AI
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
          fontSize: "12px",
        }}
      >
        Understand any codebase with AI
      </p>

      <input
        type="text"
        placeholder="https://github.com/user/repository"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}// Update the repoUrl state as the user types
        style={{
          width: "700px",
          maxWidth: "90%",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "white",
          fontSize: "16px",
        }}
      />

      <button
        onClick={() => setSubmittedUrl(repoUrl)}// Set the submitted URL to the current repoUrl when the button is clicked
        style={{
          marginTop: "20px",
          padding: "14px 28px",
          borderRadius: "12px",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Analyze Repository
      </button>

      {submittedUrl && (
        <div
          style={{
            marginTop: "30px",
            color: "#94a3b8",
          }}
        >
          Repository: {submittedUrl}
        </div>
      )}
    </div>
  );
}

export default App;