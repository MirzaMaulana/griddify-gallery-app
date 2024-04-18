import { Link, useForm } from "@inertiajs/inertia-react";
import ThemeController from "../../components/theme-controller";
import Footer from "../../components/footer";

export default function Register({ errors }) {
    const { data, setData, post, processing } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <section>
            <div className="absolute m-5 right-0">
                <ThemeController />
            </div>
            <div className="w-full h-screen flex justify-center items-center">
                <form
                    className="flex flex-col max-w-lg w-full "
                    onSubmit={handleSubmit}
                    action="/register"
                >
                    <h3 className="text-2xl mb-2 font-semibold font-mont text-center">
                        Welcome to Griddify
                    </h3>
                    <p className="font-serif mb-4 text-center">
                        Let's start getting in to Sign in
                    </p>
                    {errors && errors.failed && (
                        <div
                            role="alert"
                            className="alert bg-red-500 font-mont text-white my-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{errors.failed}</span>
                        </div>
                    )}
                    <label
                        htmlFor="name"
                        className="text-sm font-mont font-semibold"
                    >
                        Name
                        <input
                            type="name"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="Your Name"
                            className="mb-4 p-2 input input-bordered w-full font-normal mt-[2px]"
                            required
                        />
                    </label>
                    <label
                        htmlFor="email"
                        className="text-sm font-mont font-semibold"
                    >
                        Email
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="Your Email"
                            className="mb-4 p-2 input input-bordered w-full font-normal mt-[2px]"
                            required
                        />
                    </label>
                    <label
                        htmlFor="password"
                        className="text-sm font-mont font-semibold"
                    >
                        Password
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            placeholder="Password"
                            className="mb-4 p-2 input input-bordered w-full font-normal mt-[2px]"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={processing}
                        className="btn btn-secondary font-mont font-semibold mt-3"
                    >
                        Register
                    </button>
                    <p className="font-mont text-center text-sm mt-4">
                        Already have an account, lets{" "}
                        <Link href="/login" className="text-blue-400">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            {/* <Footer /> */}
        </section>
    );
}
