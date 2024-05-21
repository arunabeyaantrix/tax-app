import { Metadata } from "next"
import AboutScreen from "../screens/about"

export const metadata: Metadata = {
  title: "About",
  description: "Investments and tax exemptions"
}

const About: React.FC = () => {
  return <AboutScreen />
}

export default About
