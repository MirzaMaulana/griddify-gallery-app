import { Link, usePage, useForm, Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Footer from "../components/footer";

const Home = () => {
    const { auth, pictures, searchQuery } = usePage().props;
    const { data, setData, get } = useForm({ search: searchQuery || "" });

    const handleSearch = (e) => {
        e.preventDefault();
        get(`/`, { search: data.search });
    };

    return (
        <main>
            <Head title="Griddify" />
            <Navbar />
            {!auth && (
                <>
                    <header className="text-center h-[85vh] flex flex-col justify-center items-center">
                        <div className="py-2 w-60 bg-gray-300 text-black rounded-full font-semibold font-sans mx-auto">
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
                    <h1 className="text-4xl mt-10 font-serif text-center">
                        Explore Inspiring
                    </h1>
                </>
            )}
            <section className="md:max-w-7xl w-screen mx-auto mt-5">
                {auth && (
                    <div className="md:max-w-7xl w-screen md:px-10 px-6 mx-auto">
                        <form action="" onSubmit={handleSearch}>
                            <label className="input input-secondary flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Search"
                                    onChange={(e) =>
                                        setData({ search: e.target.value })
                                    }
                                    value={data.search}
                                />
                                <button>
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
                                </button>
                            </label>
                        </form>
                    </div>
                )}
                {pictures.data.length > 0 ? (
                    <div className="grid gap-5 mx-auto md:grid-cols-3 grid-cols-1 place-items-center mt-8">
                        {pictures.data.map((item, index) => (
                            <Card
                                key={item.id}
                                imageUrl={`/storage/images/${item.image}`}
                                userId={item.user}
                                id={item.id}
                                like={item.likes_count}
                                title={item.title}
                                views={item.views}
                            />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-4xl font-bold font-mont text-center my-20 capitalize">
                        There are no posts here yet :)
                    </h1>
                )}
                {/* Pagination */}
                <div className="flex justify-center mt-5 join">
                    <Link
                        href={pictures.prev_page_url}
                        className={`join-item btn ${
                            !pictures.prev_page_url ? "btn-disabled" : ""
                        }`}
                        disabled={!pictures.prev_page_url}
                    >
                        «
                    </Link>
                    {Array.from(
                        { length: pictures.last_page },
                        (_, i) => i + 1
                    ).map((page) => (
                        <Link
                            key={page}
                            href={`${pictures.first_page_url}&page=${page}`} // Use pagination URL
                            className={`join-item btn ${
                                page === pictures.current_page
                                    ? "btn-active"
                                    : ""
                            }`}
                        >
                            {page}
                        </Link>
                    ))}
                    <Link
                        href={pictures.next_page_url}
                        className={`join-item btn ${
                            !pictures.next_page_url ? "btn-disabled" : ""
                        }`}
                        disabled={!pictures.next_page_url}
                    >
                        »
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Home;
