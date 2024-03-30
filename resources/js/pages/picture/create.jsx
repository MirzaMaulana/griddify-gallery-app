import { useState } from "react";
import Navbar from "../../components/navbar";
import { useForm } from "@inertiajs/inertia-react";

export default function Create() {
    const [error, setError] = useState("");
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === "image" ? files[0] : value;
        setData(name, newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/picture", {
            onError: (errors) => {
                setError(errors);
            },
        });
    };
    return (
        <>
            <Navbar />

            <form
                action="/picture"
                className="max-w-3xl p-6 mx-auto rounded-lg font-mont grid grid-cols-1 gap-2"
                onSubmit={handleSubmit}
            >
                {error && (
                    <div role="alert" className="alert alert-error mb-3">
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
                        <span>{error}</span>
                    </div>
                )}
                {/* Input fields */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Image</span>
                    </div>
                    <input
                        type="file"
                        name="image"
                        className="file-input file-input-bordered file-input-secondary w-full"
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Title</span>
                    </div>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        required
                        placeholder="Type here"
                        className="input input-secondary w-full"
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">
                            Description
                        </span>
                    </div>
                    <textarea
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        required
                        className="textarea textarea-secondary"
                        rows={4}
                        placeholder="Bio"
                    ></textarea>
                </label>
                {/* Submit button */}
                <button type="submit" className="btn mt-5 btn-secondary">
                    Upload Picture
                </button>
            </form>
        </>
    );
}
