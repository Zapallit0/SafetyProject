import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#333' }}>
          <h2>Algo salió mal</h2>
          <p style={{ margin: '1rem 0' }}>Ocurrió un error inesperado.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.7rem 1.5rem',
              backgroundColor: 'var(--orange500)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            Recargar página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
