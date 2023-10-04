import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { ImHome3 } from "react-icons/im";



const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-amber-700 shadow-lg">

        <SideBarIcon icon={<ImHome3 size="28" />} />
        <SideBarIcon icon={<HiArrowSmLeft size="22" />} />
        <SideBarIcon icon={<HiArrowSmRight size="22" />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) =>{
    return (
    <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-amber-800 text-gray-50 hover:bg-amber-950
                    rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear group">
        { icon }
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md bg-yellow-500 text-xs font-bold transition-all
                        duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
        </span>
    </div>
    )
}

const Divider = () => <hr className="sidebar-hr" />;


export default SideBar;