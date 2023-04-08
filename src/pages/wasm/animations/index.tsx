import React from "react";
import InternalLink from "../../../components/InternalLink";
import H2 from "../../../components/H2";

export default function IsPrime() {
    return (
        <>
            <H2 msg="アニメーション" />
            <InternalLink to="/wasm/animations/lifegame" msg="ライフゲーム" />
        </>
    );
}

export const Head = () => <title>アニメーション</title>