import { LightContainer } from "../src/lightContainer";

test('given detination Cleveland and cargoWeight as 100', () => {
    const clevelandContainer = new LightContainer('Cleveland', 100);
    expect(clevelandContainer).toEqual(new LightContainer('Cleveland', 100));
})