import { useState } from "react";
import { useForm, usePage, Link, Head } from "@inertiajs/inertia-react";
import { router } from "@inertiajs/react";
import Navbar from "../../components/navbar";
import PaddingContainer from "../../components/padding-container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileNavigation({ children, errors }) {
    const { user } = usePage().props;
    const { data, setData, processing } = useForm({
        name: user.name || "",
        avatar: user.avatar || "",
    });

    const pathname = window.location.pathname;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setData("avatar", file);

        // Menampilkan gambar yang dipilih sebelumnya saat pengguna memilih gambar baru
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById("avatar-preview").src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(
            "/profile/update",
            {
                _method: "put",
                name: data.name,
                avatar: data.avatar,
            },
            {
                preserveScroll: true,
                onSuccess: (res) => {
                    document.getElementById("my_modal_1").closes();
                    toast("Success update profile");
                },
                onError: (err) => {
                    console.log(err);
                },
            }
        );
    };

    return (
        <>
            <Head title="Griddify | Profile" />
            <Navbar />

            <PaddingContainer>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box p-10 font-mont">
                        <h3 className="font-bold text-lg">Edit Profile</h3>
                        <div className="max-w-4xl flex gap-10 mx-auto mt-8 font-mont">
                            <div className="w-24">
                                <img
                                    id="avatar-preview"
                                    src={
                                        data.avatar instanceof File
                                            ? URL.createObjectURL(data.avatar)
                                            : user.avatar
                                            ? `/storage/avatars/${user.avatar}`
                                            : "https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                                    }
                                    alt="avatar"
                                    className="w-24 h-24 rounded-md"
                                />
                                <label
                                    htmlFor="input-avatar"
                                    className="relative cursor-pointer"
                                >
                                    <span className="w-full py-2 bg-secondary text-white block text-center mt-4 rounded-md text-sm font-semibold">
                                        Change
                                    </span>
                                    <input
                                        className="hidden"
                                        id="input-avatar"
                                        type="file"
                                        accept="image/*"
                                        name="avatar"
                                        onChange={handleAvatarChange}
                                    />
                                </label>
                            </div>

                            <div className="flex flex-col gap-5">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-mont font-semibold"
                                >
                                    Name
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name ?? user.name}
                                        onChange={handleChange}
                                        className="mb-4 p-2 input input-bordered w-full font-normal mt-[2px]"
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        setData({
                                            name: user.name,
                                            avatar: user.avatar,
                                        })
                                    }
                                >
                                    Close
                                </button>
                            </form>
                            <button
                                onClick={handleSubmit}
                                disabled={processing}
                                className="btn btn-secondary text-sm font-semibold"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </dialog>
                <section className="mt-10 flex gap-5 items-center justify-betweeen max-w-6xl mx-auto">
                    <div className="flex gap-10 items-center">
                        <img
                            src={`${
                                user.avatar
                                    ? `/storage/avatars/${user.avatar}`
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
                    <button
                        onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                        }
                        className="font-mont ms-auto font-semibold btn btn-secondary rounded-full"
                    >
                        Edit Profile
                    </button>
                </section>
                <nav className="max-w-6xl mx-auto mt-14 border-b">
                    <ul className="py-5 flex gap-8 font-mont font-semibold">
                        <li
                            className={`text-sm rounded-full ${
                                pathname === "/profile" && "text-secondary"
                            }`}
                        >
                            <Link href="/profile">My Post</Link>
                        </li>
                        <li
                            className={`text-sm rounded-full ${
                                pathname === "/picture-liked" &&
                                "text-secondary"
                            }`}
                        >
                            <Link href="picture-liked">Liked Post</Link>
                        </li>
                    </ul>
                </nav>
                <section className="max-w-6xl mx-auto">{children}</section>
            </PaddingContainer>
        </>
    );
}
