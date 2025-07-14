// import React, { useEffect, useState } from "react";
// import {
//     themeFromSourceColor,
//     applyTheme,
// } from "@material/material-color-utilities";

// const LOCAL_STORAGE_KEYS = {
//     SOURCE_COLOR: "theme_source_color",
//     DARK_MODE: "theme_dark_mode",
// };

// function Settings() {
//     const [sourceColor, setSourceColor] = useState("#ffb1c8");
//     const [isDark, setIsDark] = useState(false);

//     // Load saved theme from localStorage on first render
//     useEffect(() => {
//         const savedColor = localStorage.getItem(
//             LOCAL_STORAGE_KEYS.SOURCE_COLOR
//         );
//         const savedDarkMode = localStorage.getItem(
//             LOCAL_STORAGE_KEYS.DARK_MODE
//         );

//         if (savedColor) setSourceColor(savedColor);
//         if (savedDarkMode) setIsDark(savedDarkMode === "true");
//     }, []);

//     // Apply theme whenever color or mode changes
//     useEffect(() => {
//         generateAndApplyTheme(sourceColor, isDark);
//         localStorage.setItem(LOCAL_STORAGE_KEYS.SOURCE_COLOR, sourceColor);
//         localStorage.setItem(LOCAL_STORAGE_KEYS.DARK_MODE, isDark.toString());
//     }, [sourceColor, isDark]);

//     const generateAndApplyTheme = async (hex, dark) => {
//         const theme = await themeFromSourceColor(
//             parseInt(hex.replace("#", ""), 16)
//         );
//         applyTheme(theme, {
//             target: document.documentElement,
//             dark: dark,
//         });
//     };

//     const handleColorChange = (e) => setSourceColor(e.target.value);
//     const handleDarkToggle = () => setIsDark((prev) => !prev);

//     return (
//         <div className="p-6 space-y-4 max-w-md mx-auto">
//             <h2 className="text-xl font-semibold text-[var(--md-sys-color-on-background)]">
//                 🎛️ Theme Settings
//             </h2>

//             <div className="space-y-2">
//                 <label className="block text-[var(--md-sys-color-on-surface)]">
//                     🎨 Pick primary color
//                 </label>
//                 <input
//                     type="color"
//                     value={sourceColor}
//                     onChange={handleColorChange}
//                     className="w-12 h-12 rounded-full border-none cursor-pointer bg-transparent"
//                 />
//             </div>

//             <div className="space-y-2">
//                 <label className="block text-[var(--md-sys-color-on-surface)]">
//                     🌙 Dark Mode
//                 </label>
//                 <label className="flex items-center gap-3 cursor-pointer">
//                     <input
//                         type="checkbox"
//                         checked={isDark}
//                         onChange={handleDarkToggle}
//                         className="accent-[var(--md-sys-color-primary)] w-5 h-5"
//                     />
//                     <span>{isDark ? "Dark" : "Light"} Mode</span>
//                 </label>
//             </div>
//         </div>
//     );
// }

// export default Settings;

import React from 'react'

function Settings() {
  return (
    <div>
      
    </div>
  )
}

export default Settings
