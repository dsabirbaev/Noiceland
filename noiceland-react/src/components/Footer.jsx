

const Footer = () => {
    return (
        <footer className="bg-[#141414] py-[90px]">
            <div className="container mx-auto px-5">
                <div>
                    <div className="flex gap-x-2 items-center mb-[60px]">
                        <p className="uppercase font-bold text-white">Noiceland</p>
                        <p className="text-[#666666] text-[10px] tracking-[1px]">© 2018 Noiceland™, all rights reserved</p>
                    </div>
                    <span className="w-full h-[1px] bg-[#4D4D4D] block mb-[60px]"></span>
                    <div className="flex justify-between mb-[70px]">
                        <div>
                            <p className="text-[#666666] text-[10px] tracking-[1px] mb-5">Categories</p>
                            <div className="flex gap-x-[100px]">
                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Animation</a></li>
                                    <li><a href="#">Interactive Design</a></li>
                                </ul>

                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Architecture</a></li>
                                    <li><a href="#">Miscellaneous</a></li>
                                </ul>

                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Graphic Design</a></li>
                                    <li><a href="#">Photography</a></li>
                                </ul>

                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Illustration</a></li>
                                    <li><a href="#">Product Design</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#666666] text-[10px] mb-5">Subscribe to newsletter</p>
                            <form action="#" className="flex">
                                <input className="py-[18px] px-[24px] outline-none" type="email" placeholder="Email address"/>
                                <button className="hover:bg-transparent border border-transparent hover:border-white  py-[18px] px-[24px] outline-none text-white bg-black uppercase text-[10px] tracking-[1px]" type="submit">send</button>
                            </form>
                        </div>
                    </div>
                    <div className="flex gap-x-[170px]">
                        <div>
                            <p className="text-[#666666] text-[10px] tracking-[1px] mb-5">Information</p>
                            <div className="flex gap-x-[100px]">
                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">contact</a></li>
                                    <li><a href="#">terms</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#666666] text-[10px] tracking-[1px] mb-5">follow us</p>
                            <div className="flex gap-x-[100px]">
                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">instagram</a></li>
                                    <li><a href="#">facebook</a></li>
                                    <li><a href="#">twitter</a></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#666666] text-[10px] tracking-[1px] mb-5">Template</p>
                            <div className="flex gap-x-[100px]">
                                <ul className="text-white flex flex-col gap-y-[15px]">
                                    <li><a href="#">Image License Info</a></li>
                                    <li><a href="#">Powered by Webflow</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;