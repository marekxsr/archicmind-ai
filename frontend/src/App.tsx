function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <h1> ArchicMind AI</h1>

      <p>Understand any codebase with AI</p>

      <input
        type="text"
        placeholder="Paste GitHub repository URL..."
        style={{
          width: "600px",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Analyze Repository
      </button>
    </div>
  );
}

export default App;