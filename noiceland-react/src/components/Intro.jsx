
import banner from "../assets/images/banner.jpg";

const Intro = () => {
    return (
        <section className="pt-[60px]">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between">
                    <img src={banner} alt="image" />
                    <div>
                        <h5 className="uppercase text-[#999999] text-[10px] tracking-[1px] mb-[18px]">Illustration</h5>
                        <h1 className="text-[36px] leading-[42px] uppercase w-[429px] mb-[27px]">Japan House opens in mountainside to foster peak creativity.</h1>
                        <p className="text-[#666] text-[16px] leading-[24px] w-[419px] mb-[28px]">Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
                        <h6 className="font-bold text-[10px] tracking-[1px] uppercase">By Reta Torphy</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro