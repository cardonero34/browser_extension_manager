import '../stylesheets/user3.css'

export const User3 = () => {

    return (
        <>
            <div className="extensions-list-header">

                {/* Título */}
                <h2 className="list-title">Extensions List</h2>

                {/* Filtros con radio buttons (solo CSS) */}
                <div className="filter-tabs">
                    <input type="radio" name="filter" id="filter-all" className="filter-input" defaultChecked />
                    <label htmlFor="filter-all" className="filter-label">All</label>

                    <input type="radio" name="filter" id="filter-active" className="filter-input" onChange={() => console.log("Active filter selected")} />
                    <label htmlFor="filter-active" className="filter-label">Active</label>

                    <input type="radio" name="filter" id="filter-inactive" className="filter-input" onChange={() => console.log("Inactive filter selected")} />
                    <label htmlFor="filter-inactive" className="filter-label">Inactive</label>
                </div>

            </div>
        </>
    )
}
