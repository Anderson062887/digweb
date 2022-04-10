import { RiVirusLine} from "react-icons/ri";
const Virus = ()=>(
            
    <div className="content">
        <h1>Viruses</h1>
        <RiVirusLine id="virus-icon"/>
    <section id="sub-content" >
        <div className="virus"></div>

                <div className="sub-content-text">
                <h2>Information about Viruses</h2>
                <p>
                Viruses are minute organic forms
which seem to be intermediate
between living cells and organic
compounds.</p><p>They are smaller than
bacteria, and are sometimes called
filterable viruses because they are so
small that they can pass through the
tiny pores of a porcelain filter which
retain bacteria. They cannot be seen
through a microscope (magnification of 1500x), but can be seen
through an electron microscope
(magnification of 1,000,000x).</p><p>
Viruses cause poliomyelitis, smallpox, measles, mumps, encephalitis,
influenza, and the common cold.
Viruses, like bacteria, are presumed
to exist everywhere.
                </p>
        </div>
    </section>
    </div>

)
export default Virus;