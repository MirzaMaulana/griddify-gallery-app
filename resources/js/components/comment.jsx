import { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";

export default function Comment({ pictureId, comment, reply }) {
    const { data, setData, post, processing, errors } = useForm({
        picture_id: pictureId,
        content: "",
        name: "",
        parent_id: "",
    });

    const { auth } = usePage().props;

    const [showSubmit, setShowSubmit] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        setData("content", value);
        setShowSubmit(value.trim() !== "");
    };

    const handleClickModal = ({ name, id }) => {
        setData({ ...data, name: name, parent_id: id });
        document.getElementById("my_modal_1").showModal();
    };

    const handleReplySubmit = (e) => {
        e.preventDefault();
        post(`/reply`, {
            onSuccess: () => {
                setData({
                    picture_id: pictureId,
                    name: "",
                    parent_id: "",
                    content: "",
                });
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/comment", {
            onSuccess: () => {
                setData({
                    picture_id: pictureId,
                    name: "",
                    parent_id: "",
                    content: "",
                }); // Clear input after successful submission
                setShowSubmit(false); // Hide submit button again
            },
        });
    };

    return (
        <section className="w-full">
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Reply{" "}
                        <span className="text-secondary font-semibold">
                            {data.name}
                        </span>
                    </h3>
                    <label className="form-control mt-5 w-full">
                        <span className="text-sm font-semibold mb-2">
                            Content
                        </span>

                        <textarea
                            name="description"
                            value={data.content}
                            onChange={(e) =>
                                setData({ ...data, content: e.target.value })
                            }
                            required
                            className="textarea textarea-secondary"
                            rows={4}
                            placeholder="Description post"
                        ></textarea>
                    </label>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                className="btn"
                                onClick={() =>
                                    setData({
                                        picture_id: pictureId,
                                        name: "",
                                        parent_id: "",
                                        content: "",
                                    })
                                }
                            >
                                Close
                            </button>
                        </form>
                        <button
                            disabled={processing}
                            onClick={handleReplySubmit}
                            className="btn btn-secondary text-sm font-semibold"
                        >
                            Reply
                        </button>
                    </div>
                </div>
            </dialog>
            <p className="text-lg font-mont font-semibold">Komentar</p>
            <div className="h-96 overflow-auto">
                {comment.map((item, index) => (
                    <>
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
                                <p className="text-xs">
                                    <span className="me-3 text-gray-600">
                                        {item.created_at}
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleClickModal({
                                                name: item.user.name,
                                                id: item.id,
                                            })
                                        }
                                        className="font-semibold text-primary"
                                    >
                                        reply
                                    </button>
                                </p>
                            </div>
                        </div>
                        {reply
                            .filter((reply) => reply.parent_id === item.id)
                            .map((replyItem, replyIndex) => (
                                <div
                                    className="ms-5 flex gap-3 mt-4"
                                    key={replyIndex}
                                >
                                    <img
                                        src="https://i.pinimg.com/564x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
                                        className="w-8 h-8 rounded-full"
                                        alt=""
                                    />
                                    <div className="">
                                        <p className="font-mont text-sm">
                                            <span className="font-semibold me-3">
                                                {replyItem.user.name}
                                            </span>
                                            {replyItem.content}
                                        </p>
                                        <p className="text-xs">
                                            <span className="me-3 text-gray-600">
                                                {replyItem.created_at}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </>
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
