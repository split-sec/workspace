export default function NotFound() {
    return (
        <div className="h-full">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-6xl text-primary font-black">Not Found</h3>
                <a href="/" className="text-lg text-subtext font-semibold">Go back to Home?</a>
            </div>
        </div>
    )
}