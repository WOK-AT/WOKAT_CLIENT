function Skeleton() {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="mb-4 flex w-full animate-pulse pb-4 text-transparent"
          >
            <div className="h-[120px] w-[100px] rounded-md bg-GRAY_200"></div>

            <div className="ml-3 flex flex-col items-start justify-between">
              <div className="w-32">
                <h1 className="mb-2 w-48 rounded-md bg-GRAY_200">place</h1>
                <div className="mb-1 rounded-md bg-GRAY_200">distance</div>
                <p className="rounded-md bg-GRAY_200">count</p>
              </div>
              <ul className="w-48 rounded-md bg-GRAY_200">hashtags</ul>
            </div>
          </div>
        ))}
    </>
  );
}

export default Skeleton;
