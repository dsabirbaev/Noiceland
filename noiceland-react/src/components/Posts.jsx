import post1 from "../assets/images/posts/1.jpg"
import post2 from "../assets/images/posts/2.jpg";
import post3 from "../assets/images/posts/3.jpg";
import post4 from "../assets/images/posts/4.jpg";
import post5 from "../assets/images/posts/5.jpg";
import post6 from "../assets/images/posts/6.jpg";
import post7 from "../assets/images/posts/7.jpg";
import post8 from "../assets/images/posts/8.jpg";

const Posts = () => {
    return (
        <section className="pt-[156px] pb-[90px]">
            <div className="container mx-auto px-5">
                <div className="flex flex-col">
                    <h5 className="text-[#999999] text-[10px] tracking-[1px] uppercase mb-[30px]">LATEST POSTS</h5>
                    <div className="grid grid-cols-4 gap-5 mb-[64px]">
                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post1} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Illustration</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Japan House opens in mountainside to foster peak creativity.</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Reta Torphy</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post2} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Helmut Lang celebrates taxi drivers worldwide in latest campaign</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Alessandra Ortiz</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post3} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Bowlcut launch a new summer collection that pays homage to “UK legends”</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Rosanna Ondricka</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post4} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Photography</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Annie Lueilwitz</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post5} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Interactive Design</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">London-based Yinka Ilori’s storytelling furniture</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Annie Lueilwitz</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post6} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Graphic Design</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Simeon Brekke</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post7} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Architecture</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Suzanne Saroff’s meticulously arranged photographs alter perceptions</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Reta Torphy</p>
                            </div>
                        </div>

                        <div className="w-[305px] p-2 border rounded-md shadow-md">
                            <img src={post8} alt="pic" />
                            <div className="pt-[20px]">
                                <p className="text-[#999999] text-[10px] tracking-[1px] uppercase pb-[18px]">Graphic Design</p>
                                <p className="text-[20px] leading-[24px] uppercase pb-[15px]">Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches</p>
                                <p className="font-bold text-[10px] tracking-[1px] uppercase">By Leo Bartell</p>
                            </div>
                        </div>
                    </div>

                    <button className="hover:bg-black hover:text-white duration-300 self-center uppercase tracking-[1px] text-[10px] px-[26px] py-[21px] border">view all latest posts</button>
                </div>
            </div>
        </section>
    );
};

export default Posts;