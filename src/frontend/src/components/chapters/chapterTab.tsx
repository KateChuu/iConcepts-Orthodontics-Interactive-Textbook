'use client';

export default function ChapterTab() {
    const chapters = [
        {
            title: 'Preface',
            description: 'Before everything begins...',
            image: '/preface.jpg',
        },
        {
            title: 'Chapter 1',
            description: 'Introduction Orthodontics NOW!',
            image: '/chapter1.jpg',
        },
    ];

    return (
        <div className="p-4">
            <p className="text-center text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                Welcome to the Chapters page, where you’ll find contents<br />
                related to dentistry and Orthodontics!
            </p>

            <div className="flex flex-col gap-4">
                {chapters.map((item, index) => (
                    <div
                    key={index}
                    className="flex items-center p-4 min-h-[96px] bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-sm"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 rounded-xl object-cover mr-4"
                        />
                        <div className="flex-1">
                            <p className="text-base font-semibold text-zinc-900 dark:text-white">
                                {item.title}
                            </p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {item.description}
                            </p>
                        </div>
                        <span className="text-zinc-400 dark:text-zinc-300 text-2xl ml-2">
                            &gt;
                        </span>
                    </div>
                
                ))}
            </div>
        </div>
    );
}
