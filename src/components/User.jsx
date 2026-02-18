import '../stylesheets/user.css'

export const User = ({/* promp's */ }) => {
    return (
        <>
            <div className="extension-card">
                <div className="card-header">
                    <div className="icon-wrapper">
                        {/* DevLens icon: magnifier with dots */}
                        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* dots */}
                            <circle cx="8" cy="8" r="2" fill="#8ab4f8" opacity="0.8" />
                            <circle cx="13" cy="8" r="2" fill="#8ab4f8" opacity="0.5" />
                            <circle cx="8" cy="13" r="2" fill="#8ab4f8" opacity="0.5" />
                            {/* magnifier glass */}
                            <circle cx="15" cy="15" r="6" stroke="#8ab4f8" strokeWidth="2" fill="none" />
                            <line x1="19.5" y1="19.5" x2="23" y2="23" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="card-text">
                        <span className="card-title">DevLens</span>
                        <span className="card-desc">Quickly inspect page layouts and<br />visualize element boundaries.</span>
                    </div>
                </div>

                <div className="card-footer">
                    <button className="remove-btn">Remove</button>

                    <label className="toggle-label">
                        <input type="checkbox" className="toggle-input" defaultChecked id="devlens-toggle" />
                        <div className="toggle-track">
                            <div className="toggle-thumb"></div>
                        </div>
                    </label>
                </div>
            </div>

        </>
    )
}
