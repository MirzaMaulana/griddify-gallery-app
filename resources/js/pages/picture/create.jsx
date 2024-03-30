import Navbar from "../../components/navbar";
import { useForm } from "@inertiajs/inertia-react";

export default function Create() {
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
        post("/picture");
    };
    return (
        <>
            <Navbar />
            <form
                action="/picture"
                className="max-w-3xl p-6 mx-auto rounded-lg font-mont grid grid-cols-1 gap-2"
                onSubmit={handleSubmit}
            >
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
