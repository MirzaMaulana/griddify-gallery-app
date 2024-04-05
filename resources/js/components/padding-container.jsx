export default function PaddingContainer({ children, className }) {
    return (
        <div className={`${className} w-screen max-w-7xl px-5 mx-auto`}>
            {children}
        </div>
    );
}
