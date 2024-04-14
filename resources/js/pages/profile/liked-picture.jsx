import { Link, usePage } from "@inertiajs/inertia-react";
import ProfileNavigation from "./navigation";
import Card from "../../components/card";

export default function LikedPicture() {
    const { likedPicture } = usePage().props;

    if (!likedPicture || typeof likedPicture !== "object") {
        return (
            <h2 className="font-semibold font-mont text-2xl text-center mt-14">
                Loading...
            </h2>
        );
    }

    return (
        <>
            <ProfileNavigation>
                {likedPicture.data.length > 0 ? (
                    <>
                        <div className="grid gap-5 mx-auto md:grid-cols-3 grid-cols-1 place-items-center mt-8">
                            {likedPicture.data.map((item) => (
                                <Card
                                    key={item.picture.id}
                                    imageUrl={`/storage/images/${item.picture.image}`}
                                    userId={item.picture.user.name}
                                    id={item.picture.id}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-5 join">
                            <Link
                                href={likedPicture.prev_page_url}
                                className={`join-item btn ${
                                    !likedPicture.prev_page_url
                                        ? "btn-disabled"
                                        : ""
                                }`}
                                disabled={!likedPicture.prev_page_url}
                            >
                                «
                            </Link>
                            {Array.from(
                                { length: likedPicture.last_page },
                                (_, i) => i + 1
                            ).map((page) => (
                                <Link
                                    key={page}
                                    href={`${likedPicture.first_page_url}&page=${page}`} // Use pagination URL
                                    className={`join-item btn ${
                                        page === likedPicture.current_page
                                            ? "btn-active"
                                            : ""
                                    }`}
                                >
                                    {page}
                                </Link>
                            ))}
                            <Link
                                href={likedPicture.next_page_url}
                                className={`join-item btn ${
                                    !likedPicture.next_page_url
                                        ? "btn-disabled"
                                        : ""
                                }`}
                                disabled={!likedPicture.next_page_url}
                            >
                                »
                            </Link>
                        </div>
                    </>
                ) : (
                    <h2 className="font-semibold font-mont text-2xl text-center mt-14">
                        You haven't liked any pictures yet
                    </h2>
                )}
            </ProfileNavigation>
        </>
    );
}
