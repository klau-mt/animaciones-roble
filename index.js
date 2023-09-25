import { createRoot } from "react-dom/client";
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

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
        />
    );
}


const A4 = () => {
    const STATE_MACHINE_NAME = 'animaciones'
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'check',
        stateMachines: STATE_MACHINE_NAME,

    });
    const check = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'check'
    );
    return (
        <div onClick={() => rive && check.fire()}>
            <RiveComponent
                className="canvas-size-check"
            />
            <button type="button" onClick={() => check.fire()}>Check</button>
        </div>
    );
}


const A5 = () => {
    const STATE_MACHINE_NAME = 'animaciones'
    const WHITE = 'white'
    const GRAY = 'gray'
    const RED = 'red_gray'
    const YELLOW = 'yellow_gray'
    const WG = 'white_gray'
    const canvas_style = "background-color: #c9c9c9c9"
    const { rive, RiveComponent: RiveComponentTouch } = useRive({
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
    );
    const wg = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        WG
    );
    const changeColor = (color) => {
        if (color === WHITE) {
            white.fire();
        } else if (color === GRAY) {
            gray.fire();
        } else if (color === RED) {
            red.fire();
        } else if (color === YELLOW) {
            yellow.fire();
        } else if (color === WG) {
            wg.fire();
        }
    };

    return (
        <div >
            <RiveComponentTouch
                className="canvas-size gray-background"
            />
            <select onChange={(event) => { changeColor(event.target.value) }}>
                <option>{WHITE}</option>
                <option>{GRAY}</option>
                <option selected>{RED}</option>
                <option>{YELLOW}</option>
                <option>{WG}</option>
            </select>
        </div>
    );
}
const A6 = () => {
    const STATE_MACHINE_NAME = 'animaciones';
    const BACK = 'back';
    const FORWARD = 'forward'
    const { rive, RiveComponent } = useRive({
        src: 'roble.riv',
        autoplay: true,
        artboard: 'timeline',
        stateMachines: STATE_MACHINE_NAME,
    });
    const backInput = useStateMachineInput(rive, STATE_MACHINE_NAME, BACK);
    const forwardInput = useStateMachineInput(rive, STATE_MACHINE_NAME, FORWARD);
    return (
        <div>
            <RiveComponent
                className="timeline-canvas-size"
            />
            <button type="button" onClick={() => backInput.fire()}>Back</button>
            <button type="button" onClick={() => forwardInput.fire()}>Forward</button>
        </div>
    );
}

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <div>
        <A1 />
        <A2 />
        <A3 />
        <A4 />
        <A5 />
        <A6 />
    </div>
);
