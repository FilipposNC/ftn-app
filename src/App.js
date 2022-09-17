import React from "react";
import "./App.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import sample from "./photos/000107506.jpg";
import sample2 from "./photos/kodak_pixpro_fz201_01.jpg";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
// <Router>
// <Navbar />
// <Routes>
//  <Route path="/" exact element={<Home />} />
// </Routes>
// </Router>

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

function App() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h2>Scroll Test</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <h2>Scroll Test2</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <h2>Scroll Test3</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div className="section-3">
            <h2>
              <Animator animation={MoveIn(-1000, 0)}>
                <div>
                  <img src={sample2} width="750px" height="750px"></img>
                </div>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>Testing...2</Animator>
              <Animator animation={MoveOut(1000, 0)}>Testing...3</Animator>
              <Animator animation={MoveOut(-1000, 0)}>Testing...4</Animator>
            </h2>
          </div>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <h2>Done</h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), MoveIn(1000, 500))}>
            <div>
              <img src={sample} width="1000px" height="1000px" />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
