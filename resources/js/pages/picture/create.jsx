import { useState } from "react";
import Navbar from "../../components/navbar";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Create() {
    const [error, setError] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === "image" ? files[0] : value;
        setData(name, newValue);
        if (name === "image") {
            setImagePreview(URL.createObjectURL(files[0]));
        }
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
            <Head title="Griddify | Upload" />
            <Navbar />

            <form
                action="/picture"
                className="max-w-5xl p-6 h-4/5 mx-auto rounded-lg font-mont flex flex-col md:grid md:grid-cols-2 gap-10"
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
                {/* Image input */}
                <div className="col-span-1">
                    <label className={`${imagePreview ? "hidden" : "block"}`}>
                        <div className="text-center">
                            <div className=" border-2 border-dashed border-secondary rounded-lg w-full h-64 text-center flex justify-center items-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-blue-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L32 32m-10 0v8a4 4 0 01-4 4H4a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28m0 0v8a4 4 0 01-4 4H4a4 4 0 01-4-4v-4" />
                                </svg>
                            </div>
                            <p className="mt-3 text-sm text-gray-600">
                                <span className="font-semibold">
                                    Click to upload
                                </span>{" "}
                                or drag and drop
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                PNG, JPG, JPEG or GIF (MAX. 2MB)
                            </p>
                        </div>
                        <input
                            type="file"
                            name="image"
                            className="sr-only"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    {imagePreview && (
                        <>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover mt-2"
                            />
                        </>
                    )}
                </div>
                {/* Other inputs */}
                <div className="col-span-1">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">
                                Title
                            </span>
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
                            placeholder="Description post"
                        ></textarea>
                    </label>
                </div>
                {/* Submit button */}
                <button
                    type="submit"
                    className="btn col-span-2 mt-5 btn-secondary"
                    disabled={processing}
                >
                    Upload Picture
                </button>
            </form>
        </>
    );
}
