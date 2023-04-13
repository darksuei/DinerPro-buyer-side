import Head from "next/head";

function Order() {
  return (
    <div>
      <Head>
        <title>Dinerpro Order</title>
      </Head>
      <div className="p-4">
        <div
          className={`${styles.no_scroll_bar} overflow-y-auto max-h-[calc(100vh-4rem)] `}>
          main Order contents here
        </div>
      </div>
    </div>
  );
}

export default Order;
