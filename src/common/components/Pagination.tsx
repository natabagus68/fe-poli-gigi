import React from "react";

interface PropsPagination {
    page: number;
    limit: number;
    totalRow: number;
}

const Pagination = ({ page, limit, totalRow }: PropsPagination) => {
    return (
        <div className="flex gap-3 justify-center items-center">
            <button className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 text-center">
                Preview
            </button>

            <button className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 text-center">
                Next
            </button>
        </div>
    );
};

export default Pagination;
