import { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";

export default function Comment({ pictureId, comment }) {
    const { data, setData, post, processing, errors } = useForm({
        picture_id: pictureId,
        content: "",
    });

    const { auth } = usePage().props;

    const [showSubmit, setShowSubmit] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        setData("content", value);
        setShowSubmit(value.trim() !== "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/comment", {
            onSuccess: () => {
                setData("content", ""); // Clear input after successful submission
                setShowSubmit(false); // Hide submit button again
            },
        });
    };

    return (
        <section className="w-full">
            <p className="text-lg font-mont font-semibold">Komentar</p>
            <div className="h-96 overflow-auto">
                {comment.map((item, index) => (
                    <div className="flex gap-3 mt-4" key={index}>
                        <img
                            src="https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                            className="w-8 h-8 rounded-full"
                            alt=""
                        />
                        <div className="">
                            <p className="font-mont text-sm">
                                <span className="font-semibold me-3">
                                    {item.user.name}
                                </span>
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <form
                onSubmit={handleSubmit}
                action="/comment"
                className="my-2 flex gap-3"
            >
                <input
                    type="text"
                    name="content"
                    required
                    disabled={!auth}
                    placeholder="Type here for comment"
                    className="input input-secondary w-full"
                    value={data.content}
                    onChange={handleChange}
                />
                {showSubmit && (
                    <button type="submit" className="btn btn-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="0.94em"
                            height="1em"
                            viewBox="0 0 15 16"
                        >
                            <path
                                fill="currentColor"
                                d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34c.05.18.05.36 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z"
                            />
                        </svg>
                    </button>
                )}
            </form>
        </section>
    );
}
