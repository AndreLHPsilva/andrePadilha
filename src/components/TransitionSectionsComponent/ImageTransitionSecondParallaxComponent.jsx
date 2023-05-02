export default function ImageTransitionSecondParallaxComponent() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
    </>
  );
}
