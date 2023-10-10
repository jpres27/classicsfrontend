import TopBar from "./TopBar";
import NavBar from "./NavBar";

const Analect = (text) => {
    console.log("Analect: ", text)
    if (text.lines.length > 0 ) {
        console.log("Analect: (Line 1) ", text.lines[0])
        return (
            <div className="flex grow flex-col bg-yellow-600 m-0 h-[100vh] w-full overflow-scroll">
                <TopBar />
                <div className="flex grow flex-row items-center w-full justify-evenly py-4 px-8 m-0">
                <NavBar />
                    <div className="w-4/5 grow flex flex-col justify-end ml-auto">
                        <div className="bg-yellow-500 border-black w-full leading-loose truncate block justify-evenly py-4 px-8 
                                        m-0 border-8 [writing-mode:vertical-rl] [line-break: anywhere] flex-wrap-reverse text-5xl mr-auto">
                            {text.lines.map(analect => <p key={analect.id}>{analect.content}  </p>)}
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Analect;