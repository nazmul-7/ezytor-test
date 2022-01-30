
import DropSection from "./components/DropSection";
import DragSection from "./components/DragSection";
import ColorInput from "./components/inputComponents/ColorInput";
import FontSizeChange from "./components/inputComponents/FontSizeChange";

function PlayGround() {
    return ( 
        <div>
            <div className="row" >
            <div className="col-md-3">
                    <DragSection></DragSection>
                </div>
                <div className="col-md-7">
                    <DropSection></DropSection>
                </div>
                <div className="col-md-2">
                    <ColorInput></ColorInput>
                    <FontSizeChange></FontSizeChange>
                </div>
            </div>
        </div>
     );
}

export default PlayGround;