import '../stylesheets/user2.css'

export const User2 = () => {
    return (
        <>
            <header className="extensions-header">

                {/* Logo y título */}
                <div className="logo-container">
                    <div className="logo-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#glow)">
                                {/* Pieza principal del puzzle */}
                                <path d="M12 8 L12 16 L8 16 L8 20 L12 20 L12 32 L24 32 L24 28 L28 28 L28 24 L24 24 L24 12 L20 12 L20 8 Z"
                                    fill="url(#gradient1)" stroke="#ff5252" strokeWidth="1.5" />

                                {/* Pieza conectada */}
                                <path d="M24 12 L32 12 L32 24 L28 24 L28 20 L24 20 Z"
                                    fill="url(#gradient2)" stroke="#ff6b6b" strokeWidth="1.5" />
                            </g>

                            <defs>
                                <linearGradient id="gradient1" x1="12" y1="8" x2="24" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#ff5252" />
                                    <stop offset="100%" stopColor="#d32f2f" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="24" y1="12" x2="32" y2="24" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#ff6b6b" />
                                    <stop offset="100%" stopColor="#e84c4c" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <h1 className="logo-text">Extensions</h1>
                </div>

                {/* Botón de configuración */}
                <button className="settings-btn" aria-label="Settings">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="3" stroke="#e8eaf2" strokeWidth="1.8" fill="none" />
                        <path d="M11 1 L11 4 M11 18 L11 21 M21 11 L18 11 M4 11 L1 11 M18.364 18.364 L16.243 16.243 M5.757 5.757 L3.636 3.636 M18.364 3.636 L16.243 5.757 M5.757 16.243 L3.636 18.364"
                            stroke="#e8eaf2" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>

            </header>
        </>
    )
}
