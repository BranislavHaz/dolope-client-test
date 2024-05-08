import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/step4/Step4.styled";

import { getAreasPrice } from "@/utils/steps/step4/getAreasPrice";

const Step4 = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const getProfilesDoor = (state) => {
    const doorsSpaceWidth = state.wardrobe.width - 2 * state.wardrobe.thickness;
    const doorsCount = state.doors.count;
    const doorWidth = state.doors.width;
    const doorHeight = state.doors.height;
    const { handle, color, wheels } = state.doors.selectedProfile;
    const availableProfiles = state.productsAPI.slidingDoor;

    const topGuideProfilesInColor = availableProfiles.topGuideProfiles.filter(
      (profile) => profile.color === color
    );
    const topGuideProfile = topGuideProfilesInColor
      .filter((profile) => profile.length * 1000 >= doorsSpaceWidth)
      .sort((a, b) => a.length - b.length)
      .shift();

    const bottomGuideProfilesInColor =
      availableProfiles.bottomGuideProfiles.filter(
        (profile) => profile.color === color
      );
    const bottomGuideProfile = bottomGuideProfilesInColor
      .filter((profile) => profile.length * 1000 >= doorsSpaceWidth)
      .sort((a, b) => a.length - b.length)
      .shift();

    const topHorizontProfilesInColor =
      availableProfiles.topHorizontProfiles.filter(
        (profile) => profile.color === color
      );

    //toto treba prerobiť aby som vybral ideálnu dĺžku a počet
    const topHorizontProfile = topHorizontProfilesInColor
      .filter((profile) => profile.length * 1000 >= doorWidth)
      .sort((a, b) => a.length - b.length)
      .shift();

    console.log(topGuideProfile);
    console.log(bottomGuideProfile);
    console.log(topHorizontProfilesInColor);
  };

  getProfilesDoor(state);

  // Vypočítať ceny dekorov na základe objektu areas a dátových polí dtd18 a dtd10
  const prices = getAreasPrice(state);
  console.log(prices);

  return (
    <$.Wrap>
      <$.ContentWrap>
        <div>
          <h1>DTD 18</h1>
          <table>
            {state.productsAPI.dtd18.map((el) => (
              <tr>
                <td style={{ border: "1px solid black", padding: "0.5em" }}>
                  {el.id}
                </td>
                <td style={{ border: "1px solid black", padding: "0.5em" }}>
                  {el.price_with_vat}
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div>
          <h1>DTD 10</h1>
          <table>
            {state.productsAPI.dtd10.map((el) => (
              <tr>
                <td style={{ border: "1px solid black", padding: "0.5em" }}>
                  {el.id}
                </td>
                <td style={{ border: "1px solid black", padding: "0.5em" }}>
                  {el.price_with_vat}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </$.ContentWrap>
    </$.Wrap>
  );
};

export default Step4;
