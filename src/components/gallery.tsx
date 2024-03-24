import Image from "next/image";
import { useState } from "react";

function GalleryBigImage(props: any) {
    const passProps = props.passProps;
    const project = passProps.project;
    const selectedPicture = passProps.selectedPicture;
    const fullScreenGalleryIsOpen = passProps.fullScreenGalleryIsOpen;
    const setFullScreenGalleryIsOpen = passProps.setFullScreenGalleryIsOpen;
    const handleBigPicClick = () => {
        let newState;
        fullScreenGalleryIsOpen ? (newState = false) : (newState = true);
        setFullScreenGalleryIsOpen(newState);
    }
    var picWidth, picHeight;
    if (props.mode == "fullscreen") {
        picWidth = 960;
        picHeight = 720;
    } else {
        picWidth = 640;
        picHeight = 480;
    }
    return (
        <div onClick={handleBigPicClick} className="cursor-pointer">
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
    project.images.forEach((element, i) => {
        out.push(
            <div key={`gallery-pic-${project.id}-${i}`} onClick={() => handlePicturePick(i)} className={`${i == selectedPicture ? "border-yellow-400" : "border-gray-400 opacity-85"} border-2 cursor-pointer`}>
                <Image src={element} width={128} height={96} alt={`Picture of ${project.name} #${i}`} />
            </div>
        );
    });
    return (
        <div className={
            props.mode == "fullscreen" ?
                "flex justify-center mt-2" :
                "grid grid-rows-1 grid-cols-5 gap-1 mt-1 items-center"
        }>
            {out}
        </div>
    )
}

function FullScreenGallery(props: any) {
    const passProps = props.passProps;
    const fullScreenGalleryIsOpen = passProps.fullScreenGalleryIsOpen;
    const setFullScreenGalleryIsOpen = passProps.setFullScreenGalleryIsOpen;
    const handleFullScreenBgClick = () => {
        setFullScreenGalleryIsOpen(false);
    }
    return (
        <>
            <div onClick={handleFullScreenBgClick} className={`${fullScreenGalleryIsOpen ? "fixed" : "hidden"} left-0 top-0 w-full h-full bg-gray-700 bg-opacity-75 cursor-pointer z-0`}>
                <div className="flex justify-center items-center h-full overflow-y-auto">
                    <GalleryBigImage mode="fullscreen" passProps={passProps} />
                </div>
            </div>
        </>
    )

}

export function Gallery(props: any) {
    const project = props.project;
    const [selectedPicture, setSelectedPicture] = useState(0);
    const [fullScreenGalleryIsOpen, setFullScreenGalleryIsOpen] = useState(false);
    const passProps = {
        project,
        selectedPicture, setSelectedPicture,
        fullScreenGalleryIsOpen, setFullScreenGalleryIsOpen
    }
    return (
        <>
            <GalleryBigImage passProps={passProps} />
            <GalleryPicker passProps={passProps} />
            <FullScreenGallery passProps={passProps} />
        </>
    )
}