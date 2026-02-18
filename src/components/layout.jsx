import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-muted/40">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
