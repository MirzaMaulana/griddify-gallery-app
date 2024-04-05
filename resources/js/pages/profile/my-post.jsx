import { Link, usePage } from "@inertiajs/inertia-react";
import ProfileNavigation from "./navigation";
import Card from "../../components/card-edit";

export default function Profile() {
    const { myPicture } = usePage().props;

    return (
        <>
            <ProfileNavigation>
                {myPicture.length > 0 ? (
                    <div className="grid gap-8 grid-cols-3 place-items-center mt-5">
                        {myPicture.map((item) => (
                            <Card
                                key={item.id}
                                image={`/storage/images/${item.image}`}
                                id={item.id}
                                title={item.title}
                            />
                        ))}
                    </div>
                ) : (
                    <h2 className="font-semibold font-mont text-2xl text-center mt-14">
                        {myPicture
                            ? "You haven't posted anything yet"
                            : "Loading..."}
                    </h2>
                )}
            </ProfileNavigation>
        </>
    );
}
