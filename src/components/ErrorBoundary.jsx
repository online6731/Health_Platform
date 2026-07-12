import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text-primary)',
          backgroundColor: 'var(--bg-primary)'
        }}>
          <h2 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>خطایی در بارگذاری این بخش رخ داد</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {this.state.error?.message || 'مشکلی در ارتباط یا پردازش به وجود آمده است.'}
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            تلاش مجدد (بارگذاری مجدد صفحه)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
