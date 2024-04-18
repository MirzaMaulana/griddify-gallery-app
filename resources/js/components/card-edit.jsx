//import inertia adapter
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Card({ id, image, title }) {
    const [show, setShow] = useState(false);
    const [processing, setProcessing] = useState(false);
    const maxTitleLength = 25; // Set the maximum length of the title

    const shortenTitle = (title) => {
        if (title.length > maxTitleLength) {
            return title.substring(0, maxTitleLength) + "..."; // Return shortened title
        }
        return title; // Return full title if it's within the limit
    };

    const handleDeleted = (e) => {
        e.preventDefault();
        setProcessing(true);
        Inertia.delete(`/picture/${id}`, {
            onSuccess: () => {
                setShow(false);
                setProcessing(false);
            },
            onError: (errors) => {},
        });
    };

    return (
        <div className="card w-[340px] bg-base-100">
            <div
                className={`fixed inset-0 items-center justify-center z-50 font-mont backdrop-blur confirm-dialog ${
                    show ? "flex" : "hidden"
                }`}
            >
                <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                    <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
                    <div className="bg-base-100 rounded-lg md:max-w-md md:mx-auto p-5 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
                        <div>
                            <p className="font-bold">Warning!</p>
                            <p className="text-sm text-gray-700 mt-1">
                                You will lose all of your data by deleting this.
                                This action cannot be undone.
                            </p>
                        </div>
                        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                            <button
                                id="confirm-delete-btn"
                                onClick={handleDeleted}
                                disabled={processing}
                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                            >
                                Delete
                            </button>
                            <button
                                id="confirm-cancel-btn"
                                onClick={() => setShow(false)}
                                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <figure className="rounded-md">
                <img
                    src={image}
                    alt="Shoes"
                    className="object-cover  h-[222px] w-full"
                />
            </figure>
            <div className="pt-3 flex justify-between items-center">
                <p className="font-semibold font-mont">{shortenTitle(title)}</p>
                <div className="dropdown dropdown-bottom dropdown-end font-mont">
                    <div tabIndex={0} role="button" className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth={3.75}
                                d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] border mt-3 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={`/picture/${id}/edit`}>Edit</Link>
                        </li>
                        <li>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <p
                                className="text-red-500"
                                onClick={() => setShow(true)}
                            >
                                Delete
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
