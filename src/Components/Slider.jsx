const Slider = () => {
    return (
        <div>
            <div className="carousel h-[800px] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/C0ZqrdH/lily-banse-YHSwy6uqvk-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src=" https://i.ibb.co/FsMJrx7/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src=" https://i.ibb.co/ZfxQkGy/alicia-steels-mr-B45c-HDsr-M-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;

// https://i.ibb.co/C0ZqrdH/lily-banse-YHSwy6uqvk-unsplash.jpg
// https://i.ibb.co/FsMJrx7/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg
// https://i.ibb.co/ZfxQkGy/alicia-steels-mr-B45c-HDsr-M-unsplash.jpg