import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/steps/step4/Step4.styled";

import { getAreasPrice } from "@/utils/steps/step4/areas/getAreasPrice";
import { getProfilesDoorPrice } from "@/utils/steps/step4/profiles/getProfilesDoorPrice";

const Step4 = () => {
  const { state } = useMainStore((state) => ({
    state: state,
  }));

  const areasPrice = getAreasPrice(state);
  const profilesPrice = getProfilesDoorPrice(state);

  console.log(areasPrice);
  console.log(profilesPrice);

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
