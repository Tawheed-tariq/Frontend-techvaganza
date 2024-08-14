import { Route, Routes } from "react-router-dom";
import EventCategory from "./pages/EventCategory";
import VisualArts from "./pages/VisualArts";
import PerformingArts from "./pages/PerformingArts";
import MuzicalArts from "./pages/MuzicalArts";
import GamingZone from "./pages/GamingZone";
import Others from "./pages/Others";
import Photography from "./pages/Detailing/Photography";
import WallPainting from "./pages/Detailing/WallPainting";
import ReelMaking from "./pages/Detailing/ReelMaking";
import FacePainting from "./pages/Detailing/FacePainting";


export default function Events() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventCategory />} />
        <Route path="/visual-arts" element={<VisualArts />} />
        <Route path="/performing-arts" element={<PerformingArts />} />
        <Route path="/muzical-arts" element={<MuzicalArts />} />
        <Route path="/gaming-zone" element={<GamingZone />} />
        <Route path="/others" element={<Others />} />
        <Route path="/visual-arts/photography" element={<Photography />} />
        <Route path="/visual-arts/reel-making" element={<ReelMaking />} />
        <Route path="/visual-arts/face-painting" element={<FacePainting />} />
        <Route path="/visual-arts/wall-painting" element={<WallPainting />} />
      </Routes>
    </>
  );
}
