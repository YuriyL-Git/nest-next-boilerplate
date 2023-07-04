export default async function Page() {
  return (
    <div>
      {
        // @ts-ignore
        <gidget-component
          widget-type="block"
          venue-id="de95786a-95c5-457b-a163-bd4cd5ba43d7"
          heading="See what our customers are saying"
          socialverse-id="c6adf6f1-3daf-4472-ae81-0006bdefd1f4"
          show-block-hero-name="true"
        />
      }
      {
        // @ts-ignore
        <gidget-component
          widget-type="grid"
          venue-id="de95786a-95c5-457b-a163-bd4cd5ba43d7"
          heading="See what our customers are saying"
          socialverse-id="832880bf-d138-4c5f-aae3-e7e2417185dc"
          show-block-hero-name="true"
        />
      }
    </div>
  );
}
