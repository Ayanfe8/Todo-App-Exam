export default function ErrorState({ message, retry }) {
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
