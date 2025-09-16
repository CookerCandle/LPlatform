import React from "react";
import { Outlet } from "react-router-dom";

export default function LessonLayout() {
    return(
        <div className="mt-5">
            <header className="alert alert-danger">s</header>
            <main className="alert alert-danger">
                <Outlet />
            </main>
            <footer className="alert alert-danger">s</footer>
        </div>
    );
}