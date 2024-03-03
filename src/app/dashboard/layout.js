import { AuthProvider } from "../Providers"
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const fira_code = Fira_Code({ subsets: ['latin'] })



export const metadata = {
  title: 'Portfolio - Omkar Bhosale',
  description: 'Portfolio webiste of Omkar Bhosale',
}
const DashboardLayout = ({ children }) => {
    return (
        <AuthProvider>
        <div className="dashboard-layout">
            {/* Sidebar, navigation, etc. for dashboard */}
            {children}
        </div>
        </AuthProvider>
    );
};

export default DashboardLayout;