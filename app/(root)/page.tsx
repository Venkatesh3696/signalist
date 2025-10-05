import Header from "@/components/Header";
import TradingviewWidget from "@/components/TradingviewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:colspan-1">
          <TradingviewWidget
            title="Markets Overview"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custon-chart"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
