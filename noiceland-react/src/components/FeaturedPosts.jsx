import img1 from "../assets/images/featured/1.jpg";
import img2 from "../assets/images/featured/2.jpg";
import img3 from "../assets/images/featured/3.jpg";
import img4 from "../assets/images/featured/4.jpg";


const FeaturedPosts = () => {
    return (
       <section className='pt-[90px] pb-[64px]'>
            <div className="container mx-auto px-5">
                <div>
                    <h5 className="text-[#999999] text-[10px] tracking-[1px] uppercase mb-[30px]">featured POSTS</h5>
                    <div className="grid grid-cols-2">
                        <div className="w-[610px] p-2 border rounded-md shadow-md">
                            <img src={img1} alt="pix"/>
                            <div className="pt-[25px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Graphic Design</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">A Brief History of the FIFA World Cup Logo</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Clem Onojeghuo</p>
                            </div>
                        </div>

                        <div className="w-[610px] p-2 border rounded-md shadow-md">
                            <img src={img2} alt="pix"/>
                            <div className="pt-[25px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Graphic Design</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Alessandra Ortiz</p>
                            </div>
                        </div>

                        <div className="w-[610px] p-2 border rounded-md shadow-md">
                            <img src={img3} alt="pix"/>
                            <div className="pt-[25px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Fred Rowson directs film for Years and Years</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Coby Gottlieb</p>
                            </div>
                        </div>

                        <div className="w-[610px] p-2 border rounded-md shadow-md">
                            <img src={img4} alt="pix"/>
                            <div className="pt-[25px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Illustration</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Annie Lueilwitz</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    );
};

export default FeaturedPosts;