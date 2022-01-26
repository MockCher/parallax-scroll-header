// transformed web dev simplified's video to component

import ParalaxHeader from "./ParalaxHeader";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ParalaxHeader
        layer1={<h1>National Park</h1>}
        layer2={
          <img
            alt="mountains"
            src="http://pngimg.com/uploads/mountain/mountain_PNG18.png"
          />
        }
        layer3={
          <img
            alt="forest"
            src="https://i.pinimg.com/originals/a4/1c/db/a41cdba3f1a4fb1ad53b7d2187676c28.png"
          />
        }
      >
        For other uses, see National park (disambiguation). Bogd Khan Uul
        National Park in Mongolia is one of the earliest preserved areas now
        called a national park. National parks often allow protected species to
        flourish. Pictured are Alpine ibexes (Capra ibex) in the Gran Paradiso
        National Park, Piedmont, Italy. The Ibex population increased tenfold
        since the area was declared a national park in 1922. A national park is
        a natural park in use for conservation purposes, created and protected
        by national governments. Often it is a reserve of natural, semi-natural,
        or developed land that a sovereign state declares or owns. Although
        individual nations designate their own national parks differently, there
        is a common idea: the conservation of 'wild nature' for posterity and as
        a symbol of national pride.[1] The United States established the first
        "public park or pleasuring-ground for the benefit and enjoyment of the
        people", Yellowstone National Park, in 1872.[2] Although Yellowstone was
        not officially termed a "national park" in its establishing law, it was
        always termed such in practice[3] and is widely held to be the first and
        oldest national park in the world. However, the Tobago Main Ridge Forest
        Reserve (established in 1776),[4] and the area surrounding Bogd Khan Uul
        Mountain (1778), which were restricted from cultivation in order to
        protect surrounding farmland, are seen as the oldest legally protected
        areas.[5][6] An international organization, the International Union for
        Conservation of Nature (IUCN), and its World Commission on Protected
        Areas (WCPA), has defined "National Park" as its Category II type of
        protected areas.[7] According to the IUCN, 6,555 national parks
        worldwide met its criteria in 2006. IUCN is still discussing the
        parameters of defining a national park.[8] National parks are almost
        always open to visitors.[9]
        <br />-{" "}
        <a href="https://en.wikipedia.org/wiki/National_park">Wikipedia</a>
      </ParalaxHeader>
    </div>
  );
}
