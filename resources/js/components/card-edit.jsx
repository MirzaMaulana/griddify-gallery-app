//import inertia adapter
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react"; // Import useState hook

export default function Card({ id, image, title }) {
    const maxTitleLength = 25; // Set the maximum length of the title

    const shortenTitle = (title) => {
        if (title.length > maxTitleLength) {
            return title.substring(0, maxTitleLength) + "..."; // Return shortened title
        }
        return title; // Return full title if it's within the limit
    };

    const handleDeleted = (e) => {
        e.preventDefault();
        Inertia.delete(`/picture/${id}`, {
            onError: (errors) => {},
        });
    };

    return (
        <div className="card w-[340px] bg-base-100">
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box font-mont">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-red-500">Warning</h3>
                    <p className="py-4">
                        Data that has been deleted cannot be restored
                    </p>
                    <div className="flex gap-2 justify-end mt-5">
                        <form method="dialog">
                            <button className="text-sm btn btn-secondary">
                                Cancel
                            </button>
                        </form>

                        <button
                            className="text-sm btn btn-error"
                            onClick={handleDeleted}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </dialog>
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
                                stroke-linejoin="round"
                                stroke-width="3.75"
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
                                onClick={() =>
                                    document
                                        .getElementById("my_modal_3")
                                        .showModal()
                                }
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
