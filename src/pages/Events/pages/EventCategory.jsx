
const events = [
    {
        id: 1,
        title: 'Visual Arts',
        img: 'events/competetions.png'
    },
    {
        id: 2,
        title: 'Performing Arts',
        img: 'events/competetions.png'
    },
    {
        id: 3,
        title: 'Musical Arts',
        img: 'events/competetions.png'
    },
    {
        id: 4,
        title: 'Game Zone',
        img: 'events/competetions.png'
    },
    {
        id: 5,
        title: 'Others',
        img: 'events/competetions.png'
    }
]

export default function EventCategory(){
    return(
        <>
            <div className="background-image bg-1"></div>
            <div className="background-image bg-2"></div>
            <div className="background-image bg-3"></div>
            <div className="background-image bg-4"></div>

            <div className="glass-layer"></div>

            <div className="content px-32 flex justify-center">
                <div className="flex gap-5 flex-wrap items-center py-4 justify-center">
                    {
                        events.map((item) => (
                            <div key={item.id} className="shadow-sm shadow-secondary">
                                <img className="h-[450px] w-80" src={item.img} alt={item.title + " image"}/>
                                <div className="p-3 bg-primary bg-opacity-70 font-playfair ">
                                    <p className="text-3xl font-semibold">
                                        {item.title}
                                    </p>
                                    <button className="mt-2 border-black border py-2 px-3 rounded-lg">
                                        Show More
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}