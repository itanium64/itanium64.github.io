import './ItaniumWiki.css';

function ItaniumWiki() {
    return (<>
        <div className='wiki-main-content'>
            <div className='inner-content'>
                <div className='content-item'>
                    <h1>Itanium Wiki</h1>

                    <p>
                        Here you can find everything you'd want to know about Itanium. <br/>
                        Use this Table of contents to navigate to certain parts that you'd want to know.
                    </p>

                    <ul className='toc'>
                        <li><a href='#about-itanium'>About Itanium</a></li>
                    </ul>
                </div>

                <div className='content-item' id='about-itanium'>
                    <h2>About Itanium</h2>

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
                        <br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                            <b style={{ color: "coral" }}>E</b>xplicitly &nbsp; 
                            <b style={{ color: "coral" }}>P</b>arallel &nbsp; 
                            <b style={{ color: "coral" }}>I</b>nstruction &nbsp; 
                            <b style={{ color: "coral" }}>C</b>omputing &nbsp; 
                        <br/> <br/>

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
            </div>
        </div>
    </>)
}

export {
    ItaniumWiki
}