import Navbar from "./navbar";

/**
 * Layout component that wraps page content with a top-level container including a `Navbar` and a centered main area.
 *
 * @param children - Content to render inside the centered main container
 * @returns The layout element containing a `Navbar` and a centered `<main>` that holds `children`
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/40">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
