import PrimaryButton from "./elements/PrimaryButton";
import DragItem from "./dragElements/DragItem";

function DragSection() {

    const htmtComponents = [
        'Button','h1','p','PrimaryButton','section'
    ];
    
    return ( 
        <div>
            <h4 className="text-center">Drag Section</h4>
            <ul>
              {htmtComponents.map((sectionName,index)=>
                <DragItem key={index} sectionName={sectionName}></DragItem>
              )}
            </ul>
        </div>
     );
}

export default DragSection;