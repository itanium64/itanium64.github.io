import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark';
import '../../Common.css';
import { SimpleCodeSection } from '../../SimpleCodeSection';

function ItaniumWiki() {
    return (<>
        <div className='main-content'>
            <div className='inner-content'>
                <div className='content-item' id='top'>
                    <h1>Itanium Wiki</h1>

                    <p>
                        Here you can find everything you'd want to know about Itanium. <br />
                        Use this Table of contents to navigate to certain parts that you'd want to know. <br />
                        This wiki is going to be expanded as my knowledge grows so keep an eye out.
                    </p>

                    <ul className='toc'>
                        <li><a href='#about-itanium'>About Itanium</a></li>
                        <li><a href='#sources-and-thanks'>Sources and Special Thanks</a></li>

                        <li>Instruction Formatting</li>
                        <ul>
                            <li><a href='#inst-format-raw'>Bundles</a></li>
                        </ul>
                    </ul>
                </div>

                <div className='content-item' id='about-itanium'>
                    <h2>About Itanium <a href='#top'>^</a></h2>

                    <p>
                        Itanium is a processor-architecture developed by Intel and HP in the late 90's,
                        which nowadays is mostly known as a mostly dead architecture which never took off,
                        or as a trainwreck of a architecture. It mostly was used on Servers, as HP hoped
                        for the Architecture to start out on Servers, where it's potential could be recognized
                        and slowly adopted on the Consumer PC Market. Although needless to say that none of this happened.
                    </p>

                    <p>
                        The Idea behind Itanium and the IA64 instruction set, was to follow the EPIC paradigm.
                        which Stands for:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <b style={{ color: "coral" }}>E</b>xplicitly &nbsp;
                        <b style={{ color: "coral" }}>P</b>arallel &nbsp;
                        <b style={{ color: "coral" }}>I</b>nstruction &nbsp;
                        <b style={{ color: "coral" }}>C</b>omputing &nbsp;
                        <br /> <br />

                        Which offloads alot of things that are usually done in <span className='red'>hardware</span>, to <span className='blue'>software</span>,
                        or to be more specific, to the <span className='pink'>Compiler</span>. Things like <span className='coral'>speculation, branch prediction,
                            checking whether speculative loads need to be refreshed after stores.</span> Having to keep track
                        of all of these things make creating a compiler for any language for Itanium a challange,
                        even more so to create a optimal one.
                    </p>

                    <p>
                        On the flipside however, Itanium did provide alot of optimization <span className='green'>opportunities</span>, a good example
                        being <span className='coral'>Predicate Registers</span> and <span className='coral'>Predication</span>, Comparison Instructions hold their results in so called
                        <span className='coral'> Predicate Registers</span>, which can later be used in instructions to only execute that Instruction, if the
                        <span className='coral'> Predicate Register</span> is set to true, essentially branching but without the Branch Part.
                    </p>

                    <p>
                        And as per the <span className='coral'>EPIC</span> paradigm instruction bundles have indication which instructions don't have dependencies
                        which would make the Processor execute these in <span className='pink'>parallel</span> without fear of data races.
                    </p>
                </div>

                <div className='content-item' id='inst-format-raw'>
                    <h2>Instruction Formatting - Bundles <a href='#top'>^</a></h2>

                    <p>
                        Itanium instructions are grouped into <span className='blue'>128-bit (16 bytes)</span> chunks called <span className='red'>'bundles'</span>, which hold a <span className='coral'>'template'</span>,
                        describing which units execute which <span className="green">instructions</span>, and where 'stops' (more on those shortly) are.
                        Aswell as <span className="green">3 instructions</span>. Templates are 5 bits, and the remaining <span className="green">3 (2) instructions</span> are 41-bits in length.
                        These <span className='red'>'bundles'</span> hold <span className="green">2 to 3 instructions</span> each, reason being that some instructions can occupy <span className='red'>2</span> instruction slots,
                        For example `Move Immediate 64-bit` which loads a Register with a 64-bit value, needless to say that a 41bit instruction
                        can't hold a 64-bit integer, so there's special handling for those.
                    </p>

                    <br />

                    <i>(Top numbers: offset; Bottom numbers: size in bits)</i>

                    <br />
                    <br />

                    <table className='format-tables' style={{ width: "100%" }}>
                        <tr>
                            <td>128</td>
                            <td>87</td>
                            <td>46</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td style={{ color: "white", textAlign: "center", backgroundColor: "green", height: "40px", width: "32%" }}>Slot 2</td>
                            <td style={{ color: "white", textAlign: "center", backgroundColor: "green", height: "40px", width: "32%" }}>Slot 1</td>
                            <td style={{ color: "white", textAlign: "center", backgroundColor: "green", height: "40px", width: "32%" }}>Slot 0</td>
                            <td style={{ color: "black", textAlign: "center", backgroundColor: "coral", height: "40px", width: "04%" }}>Template</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>41</td>
                            <td style={{ textAlign: "center" }}>41</td>
                            <td style={{ textAlign: "center" }}>41</td>
                            <td style={{ textAlign: "center" }}>5</td>
                        </tr>
                    </table>

                    <p>
                        This is what the Instruction bundles look like, it's a bit of a pain to parse because its 128-bits
                        and even with a 128-bit handler library (like Rosalia uses) little trickery is needed as slot 1 sits
                        on both the Low 64-bits and the High 64-bits. This is how it looks in Rosalia if you need a bit of help:
                    </p>

                    <br/>

                    <SyntaxHighlighter
                        language='js'
                        style={style}
                        showLineNumbers
                    >
                        {
                            `template := asUint128.Lo & 0b11111

slot0 := (asUint128.Lo & 0b000000000001111111111111111111111111111111111111111100000)

slot1 := (asUint128.Lo & 0b111111111110000000000000000000000000000000000000000000000) >> 41 | 
         (asUint128.Hi & 0b000000000000000000000000000111111111111111111111111111111) << 23

slot2 := (asUint128.Hi & 0b1111111111111111111111111111111111111111100000000000000000000000) >> 18`}
                    </SyntaxHighlighter>

                    <br/>

                    <p>
                        For those new to Go: the <span className='coral'>`:=`</span> operator just creates a new variable and does type inferrence,
                        shouldn't be too difficult to adapt to other languages.
                    </p>

                    <p>
                        Now I said we're gonna get to stops, I assume you haven't read the <a href="#about-itanium" className='coral'>About Itanium </a>
                        Section of this Wiki, Stops are a way to tell the CPU that the instructions after the Stop, rely on things that happened
                        by instructions before the stop. This is necessary as Itanium is highly parallel and will try to execute everything
                        in parallel, this is one way to <i>stop</i> that from happening, as the instructions after the stop have dependencies
                    </p>
                </div>

                <div className='content-item' id='sources-and-thanks'>
                    <h2>Sources and Special Thanks <a href='#top'>^</a></h2>

                    <p>
                        Without these sources or these amazing people this whole project wouldn't be possible
                    </p>

                    <ul>
                        <li>
                            <p>
                                <a className="coral" href="https://devblogs.microsoft.com/oldnewthing/20150727-00/?p=90821">
                                    Raymond Chen (Microsoft, hosts the 'The Old New Thing' blog.)
                                </a>

                                <br /> <br />

                                This person is really amazing in General, from what I've gathered they're the person <br />
                                for Windows's foreign architecture affairs like <span className="green">Itanium, Alpha, SH-3 and SH-4, PowerPC</span>, etc. <br />
                                They have alot of blogposts on that blog which talks in-depth about the architectures I just <br />
                                mentioned aswell as: <span className="green">80386, ARM64 and ARM</span>, which to me is incredible. Their explanations are also <br />
                                relatively easy to understand if you have at least <i>some</i> level of understanding with low-level programming. <br />
                                I learned more about which registers are hardcoded and to what, a small bit about which registers are used for what <br />
                                (albeit it's mostly a Win32 calling convention thing, still useful) they go into why Itanium essentally has 2 stacks, <br />
                                There's alot more I could list but there's alot there that's explained extremly well. <br />
                                Raymond, if by any chance you're reading this, bless your heart.
                            </p>
                        </li>

                        <li>
                            <p>
                                <a className="coral" href="http://refspecs.linux-foundation.org/IA64-softdevman-vol3.pdf">
                                    Intel&#174; IA-64 Architecture Software Developer's Manual
                                </a>

                                <br /> <br />

                                This is a pretty alright manual, I mostly use this for instruction refrence  <br />
                                as they provide pseudo-code for alot of instructions which show you what they do  <br />
                                which makes implementation a whole lot easier for instructions that might do alot more  <br />
                                than just what it claims. This is pretty much what kickstarted Rosalia and pushed me to try <br />
                                and not immediately this project up, after I successfully decoded and executed a Instruction Bundle <br />
                                my motivation has not let down one bit.
                            </p>
                        </li>

                        <li>
                            <p>
                                <a className="coral" href="https://redirect.cs.umbc.edu/portal/help/architecture/aig.pdf">
                                    IA-64 Application Instruction Set Architecture Guide
                                </a>

                                <br /> <br />

                                The first manual likes to refrence alot of things this one explains <br />
                                So I usually have this open alongside the countless of Tabs of the first manual just in case. <br />
                            </p>
                        </li>

                        <li>
                            <p>
                                <a className="coral" href="https://www.researchgate.net/publication/4010248_Optimization_for_the_IntelR_ItaniumR_architecture_register_stack">
                                    Optimization for the Intel&#174; Itanium&#174; architecture register stack
                                </a>

                                <br /> <br />

                                This has aided me in understanding how the Register Stack Engine in Itanium functions, <br />
                                taught me how the allocated registers starting at R32 map to the actual physical registers, <br />
                                aswell as that the Output registers of the previous frame are available in the current Input registers <br />
                                and are expected to be the same. <br />
                            </p>
                        </li>
                    </ul>
                </div>

                <div className='padding'></div>
            </div>
        </div>
    </>)
}

export {
    ItaniumWiki
}