function Skeleton() {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="mb-4 flex w-full pb-4 text-transparent">
            <div className="animate-shimmer relative h-[120px] w-[100px] rounded-md"></div>

            <div className="ml-3 flex flex-col items-start justify-between">
              <div className="w-32">
                <h1 className="animate-shimmer mb-2 w-48 rounded-md">place</h1>
                <div className="animate-shimmer mb-1 rounded-md">distance</div>
                <p className="animate-shimmer rounded-md">count</p>
              </div>
              <ul className="animate-shimmer w-48 rounded-md">hashtags</ul>
            </div>
          </div>
        ))}
    </>
  );
}

export default Skeleton;
