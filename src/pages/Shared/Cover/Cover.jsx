import { Parallax } from 'react-parallax';

  /* eslint-disable react/prop-types */
const Cover = ({img, cover_title, cover_desc}) => {
  return (
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className="hero min-h-screen"
     >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-36 max-w-5xl mx-auto py-24 rounded-md bg-black bg-opacity-30">
          <h1 className="mb-5 text-5xl font-bold uppercase">{cover_title}</h1>
          <p className="mb-5 uppercase">
            {cover_desc}
          </p>
        </div>
      </div>
    </div>
</Parallax>
   
  );
};

export default Cover;
