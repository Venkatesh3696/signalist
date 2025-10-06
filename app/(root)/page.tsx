import TradingviewWidget from "@/components/TradingviewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
  TRADINGVIEW_URL,
} from "@/lib/constants";
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:colspan-1">
          <TradingviewWidget
            title="Markets Overview"
            scriptUrl={`${TRADINGVIEW_URL}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custon-chart"
            height={600}
          />
        </div>
        <div className="md-col-span xl:col-span-2">
          <TradingviewWidget
            title="Stock Heatmap"
            scriptUrl={`${TRADINGVIEW_URL}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            className="custon-chart"
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingviewWidget
            scriptUrl={`${TRADINGVIEW_URL}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custon-chart"
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingviewWidget
            scriptUrl={`${TRADINGVIEW_URL}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custon-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
