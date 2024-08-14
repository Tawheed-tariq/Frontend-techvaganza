import PageLayout from "../../../Components/PageLayout";

export default function EventDetailsLayout({ title, imgUrl, data }) {
  return (
    <PageLayout title={title} imgUrl={imgUrl}>
      <div className="px-12 py-12 font-playfair bg-white">
        <div className="mb-4">
          <p className="font-medium text-3xl leading-normal mb-3">
            {data.title}
          </p>
          <p className="text-base">{data.desc}</p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-3xl leading-normal mb-4">Entry Fee</p>
          <p className="text-base mb-2">
            {Object.keys(data.entryFee).map((key) => (
              <div className="mb-3">
                <span className="font-medium">{key}:</span>
                {Object.keys(data.entryFee[key]).map((key2) => (
                  <p className="pl-5">
                    <span className="font-medium">{key2}</span> :{" "}
                    {data.entryFee[key][key2]}
                  </p>
                ))}
              </div>
            ))}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-base mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5">
            {data.contact.map((contact) => (
              <li>
                {contact.name} ({contact.phone})
              </li>
            ))}
          </ul>
        </div>

        <div>{data.children}</div>
      </div>
    </PageLayout>
  );
}
