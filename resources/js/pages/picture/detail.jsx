import { usePage } from "@inertiajs/inertia-react";
import Navbar from "../../components/navbar";
import PaddingContainer from "../../components/padding-container";
import { Link } from "@inertiajs/inertia-react";
import Comment from "../../components/comment";

export default function DetailPicture() {
    const { picture } = usePage().props;

    return (
        <>
            <Navbar />
            <header className="max-w-6xl py-5 px-12 rounded-md mx-auto mt-5">
                <Link href="/" className="flex gap-2 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"
                        />
                    </svg>
                    <span className="font-semibold font-mont text-md">
                        Back
                    </span>
                </Link>
                <section className="grid grid-cols-3 mt-5 font-mont gap-6">
                    <div className="col-span-2">
                        <div className="w-full h-96 flex justify-center items-center">
                            <img
                                src={`/storage/images/${picture.image}`}
                                alt=""
                                className="rounded-lg h-full"
                            />
                        </div>
                        <div className="flex mt-10 mb-5 justify-between items-center w-full">
                            <div className="flex gap-4 items-center">
                                <img
                                    src={`${
                                        picture.user.avatar
                                            ? picture.user.avatar
                                            : "https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                                    }`}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-mont font-semibold text-lg">
                                        {picture.user.name}
                                    </h3>
                                    <p className="text-sm">Follow</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={4}
                                        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m15.113 3.21l.094.083l5.5 5.5a1 1 0 0 1-1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1-.158.277l-.07.08l-1.5 1.5a1 1 0 0 1-1.32.082l-.095-.083L9 16.415l-3.793 3.792a1 1 0 0 1-1.497-1.32l.083-.094L7.585 15l-2.792-2.793a1 1 0 0 1-.083-1.32l.083-.094l1.5-1.5a1 1 0 0 1 .258-.187l.098-.042l3.796-1.425l3.171-3.17a1 1 0 0 1 1.497-1.26z"
                                    />
                                </svg>
                                <button className="text-xs py-2 px-5 bg-secondary font-mont font-semibold text-white rounded-md ">
                                    Download
                                </button>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold">
                            {picture.title}
                        </h3>
                        <p className="mt-2">{picture.description}</p>
                    </div>
                    <div>
                        <Comment />
                    </div>
                </section>
            </header>
        </>
    );
}
