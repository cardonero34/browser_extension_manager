import '../stylesheets/user2.css'

export const User2 = () => {
    return (
        <>
            <header className="extensions-header">

                {/* Logo y título */}
                <div className="logo-container">
                    <div className="logo-icon">
                        <img className="logo-icon" src="/logo1.png" alt="DevLens Logo" />
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
