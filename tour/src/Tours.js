import Tour from "./Tour";

const Tours = ({tours,removeTour})=>{
    return(
        <section>
            <div className="title">
                <h1>our tours</h1>
                <div className="underline"></div>
            </div>
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} removeTour={removeTour} />
            })}
        </section>
    )
}

export default Tours