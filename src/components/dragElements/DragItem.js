import { useDrag } from "react-dnd";
function DragItem({sectionName}) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { sectionName: sectionName },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    return ( 
        <li ref={drag} style={{ border: isDragging ? "5px solid pink" : "0px" }}>{sectionName}</li>
     );
}

export default DragItem;