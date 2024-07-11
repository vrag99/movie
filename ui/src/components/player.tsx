interface PlayerProps {
    src: string;
}
export const Player = (props:PlayerProps) => {
    return(
        <video controls>
            <source src={props.src} type='video/mp4' />
        </video>
    )
}
