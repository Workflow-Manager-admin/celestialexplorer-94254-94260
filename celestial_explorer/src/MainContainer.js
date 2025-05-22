import React from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * MainContainer - The primary astronomy-themed container component for the CelestialExplorer website.
 *
 * This component serves as the main layout for the web app, providing a fixed navigation bar (with placeholder for navigation),
 * a flexible content display area styled for an immersive astronomy experience, and a reusable structure for future extensions.
 *
 * Props:
 *   children - Content to be displayed in the main region.
 *
 * Usage:
 *   <MainContainer>
 *     {/* page-specific content here */}
 *   </MainContainer>
 */
const MainContainer = ({ children }) => {
  return (
    <div className="app" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'radial-gradient(ellipse at top left, #253c5e 0%, #10131D 100%)',
      backgroundRepeat: 'no-repeat',
      color: 'var(--text-color)',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Astronomy Navigation Bar */}
      <nav className="navbar" style={{
        background: 'linear-gradient(90deg, #181c24 75%, #253c5e 100%)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: '0 2px 8px 0 rgba(20,24,38,0.10)'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {/* Astronomy Logo */}
            <div className="logo" style={{ letterSpacing: 2 }}>
              <span className="logo-symbol" role="img" aria-label="Star" style={{ fontSize: 20 }}>
                &#11088;
              </span>
              CelestialExplorer
            </div>
            {/* Navigation Placeholder */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              {/* Example nav items; replace/add as needed */}
              <a href="#celestial-bodies" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                Celestial Bodies
              </a>
              <a href="#exploration" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                Exploration
              </a>
              <a href="#cosmos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                Cosmos
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Astronomy-Themed Hero Header */}
      <header style={{
        paddingTop: '110px',
        paddingBottom: '28px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container" style={{ position: 'relative' }}>
          <div className="subtitle" style={{ color: '#8cd3ff', fontWeight: 500, fontSize: '1.1rem', textShadow: '0 1px 8px #146fd1' }}>
            Embark on an Interstellar Adventure
          </div>
          <h1 className="title" style={{
            fontSize: '3.2rem',
            fontWeight: 700,
            lineHeight: 1.15,
            margin: 0,
            color: 'var(--kavia-orange)',
            letterSpacing: '1px',
            textShadow: '0 2px 16px #253c5e'
          }}>
            CelestialExplorer
          </h1>
          <div className="description"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.18rem',
              lineHeight: 1.6,
              margin: '0 auto',
              marginTop: 16,
              maxWidth: 520,
              textShadow: '0 1px 8px #10131D'
            }}>
            Explore comprehensive information about stars, planets, galaxies, and the universe. Discover wonders of astronomy, space exploration, and cosmic phenomena—right at your fingertips.
          </div>
        </div>
      </header>

      {/* Main Content Display Region */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 1,
        position: 'relative'
      }}>
        <div className="container" style={{
          paddingBottom: 32,
          width: '100%',
          minHeight: '380px',
        }}>
          {children}
        </div>
      </main>

      {/* Decorative Astronomy-Themed Background Layer */}
      <div
        aria-hidden
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          background: 'transparent url("data:image/svg+xml;utf8,<svg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'20%25\' cy=\'25%25\' r=\'2.5\' fill=\'%23FFF\' fill-opacity=\'0.18\' /><circle cx=\'80%25\' cy=\'48%25\' r=\'1.5\' fill=\'%23FFF\' fill-opacity=\'0.12\' /><circle cx=\'58%25\' cy=\'85%25\' r=\'2.1\' fill=\'%23FFF\' fill-opacity=\'0.11\' /><circle cx=\'71%25\' cy=\'16%25\' r=\'1.1\' fill=\'%23F5BB60\' fill-opacity=\'0.12\' /><circle cx=\'6%25\' cy=\'80%25\' r=\'1.8\' fill=\'%2381b7f4\' fill-opacity=\'0.10\' /><circle cx=\'54%25\' cy=\'10%25\' r=\'1.4\' fill=\'%23FFF\' fill-opacity=\'0.10\' /></svg>") repeat'
        }}
      />

      {/* Astronomy-Themed Footer */}
      <footer
        style={{
          color: 'var(--text-secondary)',
          padding: '18px 0',
          textAlign: 'center',
          fontSize: '1rem',
          backgroundColor: 'rgba(26, 33, 44, 0.94)',
          borderTop: '1px solid var(--border-color)',
          letterSpacing: '1px',
          boxShadow: '0 -2px 4px rgba(16,19,29,0.08)'
        }}>
        &copy; {new Date().getFullYear()} CelestialExplorer &mdash; Exploring the cosmos together!
      </footer>
    </div>
  );
};

export default MainContainer;
