import React from 'react';

export function StatusBadge({ status }) {

    const statusOpen = (
        <div className="open badge">
            Open
        </div>
    );
    const statusInProgress = (
        <div className="in-progress badge">
            In Progress
        </div>
    );
    const statusClosed = (
        <div className="closed badge">
            Closed
        </div>
    );
    const statusSetter = (status) => {
        if (status) {
            if (status === "Open") {
                return statusOpen;
            } else if (status === "Closed") {
                return statusClosed;
            } else if (status === "In Progress") {
                return statusInProgress;
            }
        }
    };

    return (
        <>
            {statusSetter(status)}
        </>
    );

}
