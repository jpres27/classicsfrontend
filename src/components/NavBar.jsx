import { useState } from 'react'
import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'

const lunyu = ['學而 - Xue Er', '為政 - Wei Zheng']

const NavBar = () => {
    return (
        <div className="w-80 h-auto m-0 ml-16 bg-amber-600 overflow-hidden">
            <NavBlock />
            <div className="flex flex-col items-center justify-start p-1 m-0">
                <Dropdown header='Analects' selections={lunyu} />
            </div>
        </div>
    )
}

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="m-0 w-full px-2 pb-2 transition duration-300 ease-in-out">
            <div onClick={() => setExpanded(!expanded)} className="flex flex-row items-center justify-evenly mx-0 cursor-pointer">
                <ChevronIcon expanded={expanded} />
                <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
                    {header}
                </h5>
                <FaPlus size='12' className="text-accent text-opacity-80 my-auto ml-auto" />
            </div>
            {expanded && selections && selections.map((selection) => <ChapterSelection selection ={selection} />)}
        </div>
    )
}

const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
      <FaChevronDown size='14' className={chevClass} />
    ) : (
      <FaChevronRight size='14' className={chevClass} />
    );
  }

const ChapterSelection = ({ selection }) => (
    <div className='dropdown-selection'>
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
  )

const NavBlock = () => {
    <div classnName="flex items-center justify-center h-16 m-0 p-0">
        <h5 className="text-lg tracking-wider font-bold mr-auto ml-4 my-auto align-middle">Chapters</h5>
    </div>
}

export default NavBar;