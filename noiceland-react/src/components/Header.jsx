
const Header = () => {
    return (
        <header className="shadow-md">
            <div className="container mx-auto px-5">
                <nav className="nav flex items-center justify-between h-[90px]">
                    <a href="#" className="font-bold">NOICELAND</a>
                    <ul className="flex items-center gap-x-10 text-[14px]">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Latest</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header