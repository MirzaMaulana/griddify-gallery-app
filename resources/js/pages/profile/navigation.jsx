import { Link, usePage } from "@inertiajs/inertia-react";
import Navbar from "../../components/navbar";
import PaddingContainer from "../../components/padding-container";

export default function ProfileNavigation({ children }) {
    const { user, myPicture } = usePage().props;

    return (
        <>
            <Navbar />
            <PaddingContainer>
                <section className="mt-10 flex gap-5 justify-betweeen max-w-6xl mx-auto">
                    <div className="flex gap-10 items-center">
                        <img
                            src={`${
                                user.avatar
                                    ? user.avatar
                                    : "https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                            }`}
                            className="w-32 h-32 rounded-lg"
                            alt=""
                        />
                        <div>
                            <h1 className="font-semibold font-mont text-3xl">
                                {user.name}
                            </h1>
                            <p className="text-xl font-serif italic">
                                {user.email}
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-outline text-xs font-mont font-bold rounded-full ms-auto">
                        Edit Profile
                    </button>
                </section>
                <nav className="max-w-6xl mx-auto mt-14 border-b">
                    <ul className="py-5 flex gap-8 font-mont font-semibold">
                        <li className="text-sm rounded-full text-secondary">
                            My Post
                        </li>
                        <li className="text-sm rounded-full">Liked Post</li>
                        <li className="text-sm rounded-full">Edit Profile</li>
                    </ul>
                </nav>
                <section className="max-w-6xl mx-auto">{children}</section>
            </PaddingContainer>
        </>
    );
}
