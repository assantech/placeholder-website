export default function Showcase() {
  const showcase = [
    { id: 1, name: "hivesoft.it", url: "https://www.hivesoft.it" },
    { id: 2, name: "metropolis.cloud", url: "https://www.metropolis.cloud/" },
    { id: 3, name: "carmilla.cloud", url: "https://www.carmilla.cloud/" },
    { id: 4, name: "brightband.it", url: "https://www.brightband.it/" },
    { id: 5, name: "wisehub.it", url: "https://www.wisehub.it" },
    { id: 6, name: "enersync.cloud", url: "https://www.enersync.cloud/" },
  ];

  return (
    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-5 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {showcase.map((site) => (
        <div
          key={site.id}
          className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6"
        >
          <dt className="text-sm/6">
            <a href={site.url} target="_blank" className="hover:underline">
              {site.name}
            </a>
          </dt>
          {/* <dd className="order-first text-3xl font-semibold tracking-tight">
            {site.name}
          </dd> */}
        </div>
      ))}
    </dl>
  );
}
