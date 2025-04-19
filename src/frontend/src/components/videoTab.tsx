'use client';

export default function VideoTab() {
    return (
        <div className="w-full aspect-video">
            <iframe
                src="https://echo360.net.au/media/33283e38-abe2-4f41-9d8d-7f40e973651d/public"
                width="100%"
                height="100%"
                allowFullScreen
                className="rounded-xl w-full h-full"
            />
        </div>
    );
}
