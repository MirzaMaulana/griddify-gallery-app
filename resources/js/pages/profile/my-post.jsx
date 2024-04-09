import { Link, usePage } from "@inertiajs/inertia-react";
import ProfileNavigation from "./navigation";
import Card from "../../components/card-edit";

export default function Profile() {
    const { myPictures } = usePage().props;

    return (
        <>
            <ProfileNavigation>
                {myPictures.data.length > 0 ? (
                    <>
                        <div className="grid gap-8 grid-cols-3 place-items-center mt-5">
                            {myPictures.data.map((item) => (
                                <Card
                                    key={item.id}
                                    image={`/storage/images/${item.image}`}
                                    id={item.id}
                                    title={item.title}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-5 join">
                            <Link
                                href={myPictures.prev_page_url}
                                className={`join-item btn ${
                                    !myPictures.prev_page_url
                                        ? "btn-disabled"
                                        : ""
                                }`}
                                disabled={!myPictures.prev_page_url}
                            >
                                «
                            </Link>
                            {Array.from(
                                { length: myPictures.last_page },
                                (_, i) => i + 1
                            ).map((page) => (
                                <Link
                                    key={page}
                                    href={`${myPictures.first_page_url}&page=${page}`} // Use pagination URL
                                    className={`join-item btn ${
                                        page === myPictures.current_page
                                            ? "btn-active"
                                            : ""
                                    }`}
                                >
                                    {page}
                                </Link>
                            ))}
                            <Link
                                href={myPictures.next_page_url}
                                className={`join-item btn ${
                                    !myPictures.next_page_url
                                        ? "btn-disabled"
                                        : ""
                                }`}
                                disabled={!myPictures.next_page_url}
                            >
                                »
                            </Link>
                        </div>
                    </>
                ) : (
                    <h2 className="font-semibold font-mont text-2xl text-center mt-14">
                        {myPictures
                            ? "You haven't posted anything yet"
                            : "Loading..."}
                    </h2>
                )}
            </ProfileNavigation>
        </>
    );
}
