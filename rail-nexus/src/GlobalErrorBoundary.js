import React from 'react';

class GlobalErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error: error });
    console.error("An error occurred:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default GlobalErrorBoundary;
