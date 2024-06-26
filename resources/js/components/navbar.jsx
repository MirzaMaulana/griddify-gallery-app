import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Inertia } from "@inertiajs/inertia";
const Navbar = () => {
    const handlerLogout = () => {
        Inertia.post("/logout");
    };
    const { auth, user } = usePage().props;

    return (
        <>
            <nav className="navbar py-5 px-6 font-mont max-w-7xl mx-auto">
                <div className="flex-1 navbar-start">
                    <Link href="/">
                        <h3 className="text-3xl font-semibold">Griddify</h3>
                    </Link>
                </div>
                <div className="flex-none gap-2 navbar-end">
                    {auth ? (
                        <div className="dropdown dropdown-end text-white">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={
                                            user.avatar
                                                ? `/storage/avatars/${user.avatar}`
                                                : "https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                                        }
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="mt-6 z-[1] p-3 shadow menu menu-sm dropdown-content bg-secondary font-semibold gap-2 rounded-md w-60"
                            >
                                <li>
                                    <Link href="/profile">Profile</Link>
                                </li>
                                <li>
                                    <Link href="/picture/create">
                                        Upload your shot
                                    </Link>
                                </li>
                                <li onClick={handlerLogout}>
                                    <a>Logout</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <Link
                                href="/login"
                                className="py-3 px-5 font-semibold"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                className="py-3 px-5 bg-secondary text-neutral rounded-full font-semibold"
                            >
                                Sign up
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
