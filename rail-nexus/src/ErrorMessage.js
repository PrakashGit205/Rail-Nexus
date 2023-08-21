function ErrorMessage({ message, onRetry }) {
    return (
      <div>
        <p>{message}</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    );
  }
  