import '../stylesheets/user.css'

export const User = ({icon, name, description}) => {
    return (
        <>
            <div className="extension-card">
                <div className="card-header">
                    <div className="icon-wrapper">
                        {/* DevLens icon: magnifier with dots */}
                        <img src={icon} alt="DevLens Logo" className="extension-icon" />
                        
                    </div>

                    <div className="card-text">
                        <span className="card-title">{name}</span>
                        <span className="card-desc">{description}</span>
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
