import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const Home = () => {
    const { auth } = usePage().props;
    return (
        <main>
            <Navbar />
            {!auth && (
                <>
                    <header className="text-center mt-16 h-[80vh]">
                        <div className="py-2 w-60 mb-6 bg-gray-300 text-black rounded-full font-semibold font-sans mx-auto">
                            One library, endless stories.
                        </div>
                        <h1 className="text-7xl font-serif leading-tight">
                            Unleash Your <br /> Infinite Creativity
                        </h1>
                        <p className="font-mont text-lg my-5">
                            Embark on a journey of artistic brilliance through
                            vibrant hues, sleek designs, and endless
                            possibilities.
                        </p>
                        <Link
                            href="/login"
                            className="btn mt-6 px-10 btn-secondary rounded-full font-mont"
                        >
                            Get Started
                        </Link>
                    </header>
                    <h1 className="text-4xl font-serif text-center">
                        Explore Inspiring
                    </h1>
                </>
            )}
            <section className="max-w-7xl mx-auto mt-4">
                {auth && (
                    <div className="max-w-7xl px-10 mx-auto flex gap-3">
                        <label className="input input-secondary flex items-center gap-2 w-full">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                        <select className="select select-secondary w-52">
                            <option disabled selected>
                                Featured
                            </option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                )}
                <div className="grid gap-4 grid-cols-3 place-items-center mt-8">
                    <Card />
                </div>
            </section>
        </main>
    );
};

export default Home;
