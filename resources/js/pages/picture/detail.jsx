import { usePage, useForm, Head } from "@inertiajs/inertia-react";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import { Link } from "@inertiajs/inertia-react";
import Comment from "../../components/comment";
import Footer from "../../components/footer";

export default function DetailPicture() {
    const { picture, comment, more_picture, liked, reply } = usePage().props;
    const { data, setData, post, processing } = useForm({
        picture_id: picture.id,
    });
    const handleLiked = (e) => {
        e.preventDefault();
        if (!liked) {
            post("/like");
        }
    };

    return (
        <>
            <Head title="Griddify | Detail" />
            <Navbar />
            <header className="md:max-w-6xl pt-5 pb-14 md:px-12 px-6 w-screen rounded-md mx-auto">
                <Link href="/" className="flex gap-2 pb-5 items-center">
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
                <section className="grid md:grid-cols-3 grid-cols-1 mt-5 font-mont gap-6">
                    <div className="col-span-2">
                        <div className="w-full md:h-96 flex justify-center items-center">
                            <img
                                src={`/storage/images/${picture.image}`}
                                alt=""
                                className="rounded-lg md:h-full mx-md:w-full"
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
                                    id="Like"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    className="hover:fill-red-500"
                                    viewBox="0 0 48 48"
                                    onClick={handleLiked}
                                >
                                    <path
                                        fill={`${
                                            liked ? "red" : "currentColor"
                                        }`}
                                        stroke={`${
                                            liked ? "red" : "currentColor"
                                        }`}
                                        strokeLinecap="round"
                                        className="hover:fill-red-500 hover:stroke-red-500"
                                        strokeLinejoin="round"
                                        strokeWidth={4}
                                        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"
                                    />
                                </svg>

                                <a
                                    href={`/storage/images/${picture.image}`}
                                    download
                                    className="text-xs py-2 px-5 bg-secondary font-mont font-semibold text-white rounded-md "
                                >
                                    Download
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold">
                            {picture.title}
                        </h3>
                        <p className="mt-2">{picture.description}</p>
                    </div>
                    <div>
                        <Comment
                            pictureId={picture.id}
                            comment={comment}
                            reply={reply}
                        />
                    </div>
                </section>
            </header>
            <section className=" md:max-w-6xl py-5 border-y px-6 w-screen md:px-12 mx-auto">
                <h2 className="font-serif text-xl">More From The Author</h2>
                <div className="grid gap-4 md:grid-cols-3 mt-4 grid-cols-1">
                    {more_picture.length > 0 ? (
                        more_picture.map((item, index) => (
                            <Card
                                key={index}
                                imageUrl={`/storage/images/${item.image}`}
                                userId={item.user.name}
                                id={item.id}
                                title={item.title}
                            />
                        ))
                    ) : (
                        <p className="col-span-3 text-lg text-center font-mont font-medium py-10">
                            This author has not added any more posts :)
                        </p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
