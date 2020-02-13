import React from 'react';

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }
  
  static getDerivedStateFromError() {
    return { hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Reload, or try again later</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundry