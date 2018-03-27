import React from "react";
import { shallow } from "enzyme";
import BeersPage from "./BeersPage";
import BeerCard from "./BeerCard";
import nock from "nock";

describe("ComponentDidMount() http operation", () => {
  it("managed to fetch data from the API", async () => {
    const fetcher = nock("https://api.punkapi.com/v2/beers?page=1&per_page=1")
      .get("beers?page=1&per_page=1")
      .reply(200, {
        name: "Buzz",
        description:
          "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        food_pairing: [
          "Spicy chicken tikka masala",
          "Grilled chicken quesadilla",
          "Caramel toffee cake"
        ]
      });
    fetcher.isDone();
  });
});

describe('BeersPage should load properly', () => {
    it('should render BeersPage properly', () => {
        const wrapper = shallow(<BeerCard/>);
        expect(wrapper.find(BeerCard)).toHaveLength(0);
        
    });
});
