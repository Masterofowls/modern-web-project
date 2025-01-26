import Link from "next/link"
import { Home, Info, Menu, X, Maximize, Minimize, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("common")
  const locale = useLocale()

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const changeLanguage = (lang: string) => {
    router.push(pathname.replace(`/${locale}`, `/${lang}`))
    setIsLangMenuOpen(false)
  }

  return (
    <header className="bg-black/50 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            MWP
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              <Home className="inline mr-2" size={18} />
              {t("home")}
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              <Info className="inline mr-2" size={18} />
              {t("about")}
            </Link>
            <button onClick={toggleFullscreen} className="text-white hover:text-blue-400 transition-colors">
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Globe size={18} />
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  {["en", "es", "fr"].map((loc) => (
                    <button
                      key={loc}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => changeLanguage(loc)}
                    >
                      {loc === "en" ? "English" : loc === "es" ? "Español" : "Français"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Home className="inline mr-2" size={18} />
              {t("home")}
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Info className="inline mr-2" size={18} />
              {t("about")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

