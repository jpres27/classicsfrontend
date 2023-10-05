import TopBar from "./TopBar";

const Analect = (text) => {



    return (
        <div className="flex flex-col bg-yellow-600 m-0 h-full w-full overflow-hidden">
            <TopBar />
            <div className="flex flex-row items-center w-full justify-evenly py-4 px-8 m-0">
                <div className="w-4/5 flex flex-col justify-end ml-auto">
                    <p className="bg-yellow-500 border-black w-full flex flex-row items-center justify-evenly py-4 px-8 
                                    m-0 border-8 [writing-mode:vertical-rl] text-5xl mr-auto whitespace-normal">
                    子曰：「學而時習之，不亦說乎？有朋自遠方來，不亦樂乎？人不知而不慍，不亦君子乎？」
                    {text}
                    </p>
                </div>    
            </div>
        </div>
    )
}

export default Analect;