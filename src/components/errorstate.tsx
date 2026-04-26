interface ErrorStateProps {
  message: string;
  retry: () => void;
}

/**
 * Renders an error UI showing a message and an optional retry button.
 *
 * @param message - The error message to display
 * @param retry - Callback invoked when the user clicks the retry button; if not provided, the retry button is omitted
 * @returns A JSX element containing the error message and, when `retry` is provided, a retry button
 */
export default function ErrorState({ message, retry }: ErrorStateProps) {
  return (
    <div role="alert" className="p-6 text-center space-y-4">
      <p className="text-red-600">{message}</p>
      {retry && (
        <button onClick={retry} className="underline">
          Retry
        </button>
      )}
    </div>
  );
}
