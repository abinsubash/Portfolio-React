import React from "react";
import InfiniteMenu from "../components/Effects/Scroll";
import Navbar from "../components/Navbar";

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];


const Projects = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900">
      <div className="h-full w-full">
        <div style={{ height: '600px', position: 'relative' }}>
          <InfiniteMenu items={items} />
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Projects;
