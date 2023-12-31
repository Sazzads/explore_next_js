import Sidebar from "./Sidebar";

export const metadata = {
    title: 'Dashboard || Next Hero',
    description: 'Generated by Next Hero',
}


const DashboardLayout = ({ children }) => {
    return (
        <div className="flex container mx-auto">
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default DashboardLayout;