export default function LoadingSpinner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center py-10"
    >
      <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
