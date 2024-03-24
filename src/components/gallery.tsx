import Image from "next/image";
import { useState } from "react";

function GalleryBigImage(props: any) {
    const passProps = props.passProps;
    const project = passProps.project;
    const selectedPicture = passProps.selectedPicture;
    var picWidth, picHeight;
    if (props.mode == "fullscreen") {
        picWidth = 960;
        picHeight = 720;
    } else {
        picWidth = 640;
        picHeight = 480;
    }
    return (
        <div className="rounded-lg overflow-hidden border-2 border-gray-400">
            <Image className="inline" src={project.images[selectedPicture]} width={picWidth} height={picHeight} alt={`Picture of ${project.name} #${selectedPicture}`} />
        </div>
    )
}


function GalleryPicker(props: any) {
    const passProps = props.passProps;
    const project = passProps.project;
    const selectedPicture = passProps.selectedPicture;
    const setSelectedPicture = passProps.setSelectedPicture;
    const handlePicturePick = (i: number) => {
        setSelectedPicture(i);
    }
    var out: any = [];
    project.images.forEach((element:string, i:number) => {
        out.push(
            <div key={`gallery-pic-${project.id}-${i}`} onClick={() => handlePicturePick(i)} className={`${i == selectedPicture ? "border-yellow-400" : "border-gray-400 opacity-85"} border-2 m-1 cursor-pointer rounded-lg overflow-hidden`}>
                <Image src={element} width={128} height={96} alt={`Picture of ${project.name} #${i}`} />
            </div>
        );
    });
    return (
        <div className="flex justify-center mt-2">
            {out}
        </div>
    )
}

export function Gallery(props: any) {
    const project = props.project;
    const [selectedPicture, setSelectedPicture] = useState(0);
    const passProps = {
        project,
        selectedPicture, setSelectedPicture,
    }
    return (
        <>
            <GalleryBigImage passProps={passProps} />
            <GalleryPicker passProps={passProps} />
        </>
    )
}