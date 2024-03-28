import { useForm } from "@inertiajs/inertia-react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <section className="w-full h-screen flex justify-center items-center">
            <form
                className="flex flex-col max-w-md w-full p-4 rounded-md shadow-lg"
                onSubmit={handleSubmit}
                action="/login"
            >
                <h2 className="mb-4 text-center text-2xl font-semibold">
                    Login
                </h2>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    placeholder="Email"
                    className="mb-4 p-2 border rounded-md"
                    required
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    placeholder="Password"
                    className="mb-4 p-2 border rounded-md"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </section>
    );
}
