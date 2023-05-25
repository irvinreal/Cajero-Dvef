import { gsap } from "gsap";
import { useLayoutEffect } from "react";

import "./CajeroHeader.css";

const CajeroHeader = () => {
    useLayoutEffect(() => {
        let animation = gsap.timeline({ repeat: -1 });
        // gsap.set(".titleBox", { autoAlpha: 1 });
        let stagger = 4;
        // animation
        //     .from(".title", {
        //         y: 100,
        //         opacity: 0,
        //         stagger: stagger,
        //     })
        //     .to(".title", { y: -100, opacity: 0, stagger: stagger }, stagger);
        // -----------------------------------------------------------------------
        let ctx = gsap.context(() => {
            gsap.set(".titleBox", { autoAlpha: 1 });
            animation
                .from(".title", {
                    duration: 0.6,
                    y: 140,
                    opacity: 0,
                    stagger: stagger,
                    scale: 0.5,
                })
                .to(
                    ".title",
                    { y: -80, opacity: 0, stagger: stagger, scale: 1.5 },
                    stagger
                );
        }, ".titleBox");
        return () => ctx.revert();
        // -----------------------------------------------------------------------
    }, []);

    return (
        <header className="header-container">
            <div className="background-title">
                <div className="titleBox">
                    <div className="title">Bienvenido a tu Cajero ATM</div>
                    <div className="title">Bienvenido a tu Cajero ATM</div>
                    <div className="title">Bienvenido a tu Cajero ATM</div>
                    <div className="title">Bienvenido a tu Cajero ATM</div>
                </div>
            </div>
            <div className="menu">
                <div className="lowBox-menu">
                    <button class="btn-lowBox-INGRESAR">INGRESAR</button>
                    <button class="btn-lowBox">Usuario Nuevo</button>
                    <button class="btn-lowBox">Ver Usuarios</button>
                    <button class="btn-lowBox">Ayuda</button>
                </div>
            </div>
        </header>
    );
};

export default CajeroHeader;
