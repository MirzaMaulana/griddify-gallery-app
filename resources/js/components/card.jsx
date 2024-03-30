export default function Card({ imageUrl, userId, like, views }) {
    return (
        <div className="card w-[340px] bg-base-100">
            <figure className="rounded-md">
                <img
                    src={imageUrl}
                    alt="Shoes"
                    className="object-cover  h-[222px] w-full"
                />
            </figure>
            <div className="pt-3 flex justify-between items-center">
                <div className="flex gap-2 font-mont items-center text-sm">
                    <img
                        className="w-7 rounded-full"
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                    {userId}
                </div>
                <div className="flex gap-2">
                    <span className="flex gap-1 text-sm items-center font-mont">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="4"
                                d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
                            />
                        </svg>
                        23
                    </span>
                    <span className="flex gap-1 text-sm items-center font-mont">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                            />
                        </svg>
                        125
                    </span>
                </div>
            </div>
        </div>
    );
}
