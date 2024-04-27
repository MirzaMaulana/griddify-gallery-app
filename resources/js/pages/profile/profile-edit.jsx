import { Link, usePage } from "@inertiajs/inertia-react";
import ProfileNavigation from "./navigation";

export default function ProfileEdit() {
    return (
        <>
            <ProfileNavigation>
                <div className="max-w-4xl flex gap-10 mx-auto mt-8 font-mont">
                    <div className="w-24">
                        <img
                            src="https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                            alt="avatar"
                            className="w-24 h-24 rounded-md"
                        />
                        <button className="py-2 mt-4 text-white w-full rounded-lg bg-secondary text-sm font-semibold">
                            Change
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                        <label
                            htmlFor="name"
                            className="text-sm font-mont font-semibold"
                        >
                            Name
                            <input
                                type="name"
                                autoFocus
                                name="name"
                                id="name"
                                placeholder="enter a new name"
                                className="mb-4 p-2 input input-bordered w-full font-normal mt-[2px]"
                                required
                            />
                        </label>
                    </div>
                </div>
            </ProfileNavigation>
        </>
    );
}
