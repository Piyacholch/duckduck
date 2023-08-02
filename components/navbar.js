import Link from "next/Link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="navbar bg-[#FF7B50]">
      <div className="flex-1">
      <Link href="/" className=""><Image src="/logoicon.png" alt="Vercel Logo" width={80} height={80} /></Link>
      
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/order" className="text-lg font-bold text-white">ออเดอร์</Link>
          </li>
          <li>
            <Link href="/revenue" className="text-lg font-bold text-white">รายได้</Link>
          </li>
          <li>
            <Link href="/totalegg" className="text-lg font-bold text-white">บันทึกไข่</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
