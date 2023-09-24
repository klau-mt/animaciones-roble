import { createRoot } from "react-dom/client";
import { useRive, useStateMachineInput} from '@rive-app/react-canvas';

const A1 = () => {
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'animacion-home',
        stateMachines: 'animaciones',
    });
    
    return (
        <RiveComponent
            className="canvas-size"
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}

const A2 = () => {
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'auto-movimiento-1',
        stateMachines: 'animaciones',
    });
    return (
        <RiveComponent
            className="canvas-size"
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}


const A3 = () => {
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'auto-movimiento-2',
        stateMachines: 'animaciones',
    });
    return (
        <RiveComponent
            className="canvas-size"
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}


const A4 = () => {
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'check',
        
    });
    return (
        <RiveComponent
            className="canvas-size"
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}


const A5 = () => {
    const STATE_MACHINE_NAME = 'animaciones'
    const WHITE = 'white'
    const GRAY = 'grey'
    const RED = 'red_gray'
    const YELLOW = 'yellow_gray'
    const WG = 'white_gray'
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'loader',
        stateMachines: 'animaciones',
    });
    const white = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        WHITE
    );
    const gray = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        GRAY
    );
    const yellow = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        YELLOW
    );
    const red = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        RED,
        true
    );
    const wg = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        WG
    );
    return (
        <RiveComponent
            className="canvas-size"
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}
const A6 = () => {
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'timeline',
        stateMachines: 'animaciones',
    });
    return (
        <RiveComponent
            className="canvas-size"
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
        />
    );
}

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<div>
    <A1 />
    <A2 />
    <A3 />
    <A4 />
    <A5 />
    <A6 />
</div>);
