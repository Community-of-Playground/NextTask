"use client";

import { useParams } from 'next/navigation';

const AssignmentPage = () => {
    const params = useParams();
    const geturlname = params?.nameAssignment as string; // Casting sebagai string
    const nameAssignment = decodeURIComponent(geturlname)

    return (
        <div>
            <h1>Detail {nameAssignment}</h1>
        </div>
    );
};

export default AssignmentPage;
