import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <Link href="/" className="font-medium text-lg">Han P</Link>
      <div className="flex gap-8">
        <Link href="#about">About</Link>
        <Link href="#projects">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Resume</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  )
}