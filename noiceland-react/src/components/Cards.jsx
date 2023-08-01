import card1 from "../assets/images/cards/1.jpg";
import card2 from "../assets/images/cards/2.jpg";
import card3 from "../assets/images/cards/3.jpg";
import card4 from "../assets/images/cards/4.jpg";
import card5 from "../assets/images/cards/5.jpg";
import card6 from "../assets/images/cards/6.jpg";
const Cards = () => {
    return (
        <section className="pt-[60px]">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-3 gap-5">

                    <div className="w-[405px] h-[480px] px-2 py-5 border rounded-md shadow-md">
                        <img src={card1} alt="pic" />
                        <div className="pt-[19px]">
                            <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                            <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Helmut Lang celebrates taxi drivers worldwide in latest campaign</p>
                            <p className="font-bold text-[10px] tracking-[1px] uppercase">By Alessandra Ortiz</p>
                        </div>
                    </div>
                    <div className="w-[405px] h-[480px] px-2 py-5 border rounded-md shadow-md">
                        <img src={card2} alt="pic" />
                        <div className="pt-[19px]">
                            <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                            <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Bowlcut launch a new summer collection that pays homage to “UK legends”</p>
                            <p className="font-bold text-[10px] tracking-[1px] uppercase">By Rosanna Ondricka</p>
                        </div>
                    </div>
                    <div className="w-[405px] h-[480px] px-2 py-5 border rounded-md shadow-md">
                        <img src={card3} alt="pic" />
                        <div className="pt-[19px]">
                            <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                            <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn</p>
                            <p className="font-bold text-[10px] tracking-[1px] uppercase">By Annie Lueilwitz</p>
                        </div>
                    </div>

                    <div className="w-[405px] h-[480px] px-2 py-5 border rounded-md shadow-md">
                        <img src={card4} alt="pic" />
                        <div className="pt-[19px]">
                            <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                            <p className="text-[20px] leading-[24px] uppercase pb-[15px]">London-based Yinka Ilori’s storytelling furniture</p>
                            <p className="font-bold text-[10px] tracking-[1px] uppercase">By Annie Lueilwitz</p>
                        </div>
                    </div>

                    <div className="w-[405px] h-[480px] px-2 py-5 border rounded-md shadow-md">
                        <img src={card5} alt="pic" />
                        <div className="pt-[19px]">
                            <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                            <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck</p>
                            <p className="font-bold text-[10px] tracking-[1px] uppercase">By Simeon Brekke</p>
                        </div>
                    </div>

                    <div className="w-[405px] h-[480px] px-2 py-5 border rounded-md shadow-md">
                        <img src={card6} alt="pic" />
                        <div className="pt-[19px]">
                            <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                            <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Suzanne Saroff’s meticulously arranged photographs alter perceptions</p>
                            <p className="font-bold text-[10px] tracking-[1px] uppercase">By Reta Torphy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;