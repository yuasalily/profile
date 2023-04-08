import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Universe, Cell } from "../../../wasm/animation/pkg/animation";
import { memory } from "../../../wasm/animation/pkg/animation_bg.wasm";
import H2 from "../../../components/H2";

export default function Lifegame() {
    const CELL_SIZE = 5; // px
    const GRID_COLOR = "#CCCCCC";
    const DEAD_COLOR = "#FFFFFF";
    const ALIVE_COLOR = "#000000";

    const universe = Universe.new();
    const width = universe.width();
    const height = universe.height();

    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    const requestIdRef = useRef<number>();

    const drawGrid = () => {
        if (ctx === null) return;
        ctx.beginPath();
        ctx.strokeStyle = GRID_COLOR;

        // Vertical lines.
        for (let i = 0; i <= width; i++) {
            ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
            ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
        }

        // Horizontal lines.
        for (let j = 0; j <= height; j++) {
            ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
            ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
        }

        ctx.stroke();
    }

    const getIndex = (row: number, column: number) => {
        return row * width + column;
    }

    const drawCells = () => {
        if (ctx === null) return;
        const cellsPtr = universe.cells();
        const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

        ctx.beginPath();

        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const idx = getIndex(row, col);

                ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;
                ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE);
            }
        }

        ctx.stroke();
    }

    const rendorLoop = () => {
        universe.tick();

        drawGrid();
        drawCells();

        requestIdRef.current = requestAnimationFrame(rendorLoop);
    }

    useEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        setCtx(canvas.getContext("2d"));
    }, []);

    useEffect(() => {
        if (ctx !== null) {
            rendorLoop();
            return () => {
                // undefined出ない場合は!!を付けて型チェックを解決
                cancelAnimationFrame(requestIdRef.current!!);
            }
        }
    }, [ctx]);
    return (
        <>
            <H2 msg="ライフゲーム" />
            <canvas id="canvas" width={(CELL_SIZE + 1) * width + 1} height={(CELL_SIZE + 1) * height + 1}></canvas>
        </>
    )
}