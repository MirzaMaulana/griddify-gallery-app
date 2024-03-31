import { Link, usePage } from "@inertiajs/inertia-react";
import Navbar from "../components/navbar";
import PaddingContainer from "../components/padding-container";

export default function Profile() {
    const { user } = usePage().props;

    return (
        <>
            <Navbar />
            <PaddingContainer>
                <section className="mt-10 flex flex-col gap-4 items-center">
                    <img
                        src={`${
                            user.avatar
                                ? user.avatar
                                : "https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                        }`}
                        className="w-32 h-32 rounded-md"
                        alt=""
                    />
                    <h1 className="font-semibold font-mont text-3xl">
                        {user.name}
                    </h1>
                    <div className="my-3 font-mont flex justify-center gap-6">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">Followers</p>
                            <span className="">23</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">Posts</p>
                            <span className="">23</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">Following</p>
                            <span className="">23</span>
                        </div>
                    </div>
                    <button className="btn btn-secondary font-semibold font-mont px-10">
                        Edit Profile
                    </button>
                </section>
            </PaddingContainer>
        </>
    );
}
