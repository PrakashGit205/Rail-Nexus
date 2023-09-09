import React from 'react';
import Header from "./Pages/Header"
class GlobalErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error: error });
    console.error("An error occurred:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div>
        <Header></Header>
      <h1>
         Something went wrong.
        </h1> 
        
        </div>;
    }
    return this.props.children;
  }
}

export default GlobalErrorBoundary;
