import React from "react";
import axios from "axios";
interface VideoProps {
    width: number;
    height: number;
}

export default function VideoInput(props: VideoProps) {
    const { width, height } = props;

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const [source, setSource] = React.useState("");
    const [file,setFile] = React.useState<File | null>(null)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            const url = URL.createObjectURL(file);
            setSource(url);
            setFile(file)
        }
    };
    console.log(import.meta.env.VITE_BACKEND_URI)
    const handleSubmit = async () => {
        const formData = new FormData()
        if (!file) return 
        formData.append('video',file)
        const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URI}/video/upload`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        console.log(res)
    }


    const handleChoose = () => {
        if (inputRef.current)
            inputRef.current.click();
    };

    return (
        <div className="VideoInput">
            <input
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                accept=".mp4"
            />
            {!source && <button onClick={handleChoose}>Choose</button>}
            {source && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height={height}
                    controls
                    src={source}
                />
            )}
            <button disabled={!source} onClick={handleSubmit} >Upload</button>
            <div className="VideoInput_footer">{source || "Nothing selectd"}</div>
        </div>
    );
}