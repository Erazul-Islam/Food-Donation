import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div>
            <div className="relative">
                <img src="https://i.ibb.co/S7JQ9ZW/360-F-355732227-Pne-Uq5-XPTr-D0t-GT7j6-EMg-FZZAy-Su7-Pj-N.jpg" className="w-full lg:h-96" alt="" />

                <div className="absolute bottom-1 ">
                    <div>
                        
                        <div>
                            <p className="lg:text-6xl text-pink-700 lg:ml-12 font-bold lg:pb-40">Be the Change <br /> You Want to See</p>
                            <Marquee className="text-3xl pb-5" pauseOnHover={true}>
                                Help us make the world a better place by supporting our mission to [briefly describe your cause or goal]. Your contribution can change lives.
                            </Marquee>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Slider;