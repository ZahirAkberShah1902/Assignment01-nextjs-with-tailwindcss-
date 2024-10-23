import Link from "next/link";

export default function Navbar(){
    return(
  <div className="flex gap-3 b text-orange-700 bg-yellow-500 border-4 border-violet-950" > 
  <button className="hover:bg-blue-300 "> <Link href="/">Home</Link> </button>
  <br/>
  <button className="hover:bg-blue-300"> <Link href="about">About</Link> </button>
  <br/>
  <button className="hover:bg-blue-300"> <Link href="job">Job</Link> </button>
  <br/>
  <button className="hover:bg-blue-300"> <Link href="contact">Contact</Link> </button>
  <br/>
  <button className="hover:bg-blue-300"> <Link href="details">Details</Link> </button>
  <br/>
  <button className="hover:bg-blue-300"> <Link href="job/programming">Programming</Link>  </button>
  </div>
    )
  }