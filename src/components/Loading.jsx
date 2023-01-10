import React from "react";

const Loading = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
                </div>
            </div>
        </div>
    )
}

export default Loading;