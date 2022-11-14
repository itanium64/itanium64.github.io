import { Link } from 'react-router-dom';
import '../Common.css';

function Index() {
    return (<>
        <div className='main-content'>
            <div className='inner-content'>
                <div className='content-item'>
                    <h1>Rosalia64</h1>

                    <hr />

                    <p>Rosalia64 is an attempt at emulating Itanium, more specifically to run IA64 compiled Windows executables.</p>

                    <p>
                        This project mainly started because of my curiosity of <span className="blue">Itanium</span>, aswell as the disappointing lack
                        of <span className="blue">IA64/Itanium</span> emulators currently avaiable, the only one that I found that I've also used as
                        refrence alot during development is the '<a className="pink" href='https://github.dev/trofi/ski'>ski</a>' emulator created by HP themselves to run Linux
                        binaries. As a secondary goal I've set myself is to document the architecture as well as I can
                        so not everyone has to suffer through either finding information about <span className="blue">Itanium</span>, or having to figure
                        out what certain things in the Intel documentation actually means, which is why this exists!
                    </p>

                    <p>
                        The <span className="blue">Itanium</span> wiki is documenting everything that I (Furball) currently understand about <span className="blue">Itanium</span>,
                        It covers certain aspects about the <span className="blue">Itanium</span> architecture, aswell as code examples for things like
                        Decoding instructions and instruction formats.
                    </p>

                    <h2 className="head-to-wiki">
                        <Link to="/wiki/" style={{ color: "white" }}>Head to Wiki</Link>
                    </h2>

                    <hr />

                    <h1>Emulation Progress</h1>

                    <p>
                        Rosalia64 is currently in heavy development, as you can probably notice by the seeming lack of information
                        on the Itanium wiki, but progress is slowly being made. Currently only Executables with 0 dependencies
                        work, and the C Runtime Library is out of the question.
                    </p>

                    <h2>What works:</h2>

                    <ul>
                        <li>Entry point retrieval (although unsure about consistency)</li>
                        <li>Instruction Decoding and decoding of Execution Units</li>
                        <li>Execution of basic instructions (Moves, Loads, Stores, Basic Arithmetic)</li>
                    </ul>

                    <h2>What's being researched:</h2>

                    <ul>
                        <li>The Register Stack Engine (RSE) (so far it's a challange to understand with 100% certainty)</li>
                        <li>The Floating-point unit (they use 82bit Floats??)</li>
                        <li>When does execution end?</li>
                    </ul>

                    <h2>What doesn't work: (and likely won't for a while)</h2>

                    <ul>
                        <li>Hello, World (yes, it's far away as it will require kernel32 passthrough emulation because of Console Creation and Writing)</li>
                        <li>Existing IA64 software utilizing Win32 and any C/C++ Runtime Libraries</li>
                        <li>Full Windows Emulation</li>
                    </ul>
                </div>

                <div className='padding'></div>
            </div>
        </div>
    </>)
}

export {
    Index
}