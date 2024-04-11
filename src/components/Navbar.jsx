const Navbar = () => {
    return(
        <navbar className="flex justify-between items-center p-4 w-10/12 mx-auto my-4 rounded-xl bg-emerald-100 text-emerald-700">
            <p className="font-bold uppercase text-xl">FireForge</p>
            <ul className="flex gap-4">
                <li><a href="#">Characters</a></li>
                <li><a href="#">Weapons</a></li>
                <li><a href="#">Artifacts</a></li>
            </ul>
        </navbar>
    )
}

export default Navbar;