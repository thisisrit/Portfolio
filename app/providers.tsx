import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider>
}

export default Providers;